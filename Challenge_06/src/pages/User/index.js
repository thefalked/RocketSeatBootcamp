import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropType from 'prop-types';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  static propType = {
    navigation: PropType.shape({
      getParam: PropType.func,
    }).isRequired,
  };

  state = {
    stars: [],
    loading: false,
    refreshing: false,
    page: 1,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const { navigation } = this.props;

    const user = navigation.getParam('user');

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data, loading: false });
  }

  loadMore = async () => {
    const { navigation } = this.props;

    const user = navigation.getParam('user');

    const { stars, page } = this.state;

    const response = await api.get(
      `/users/${user.login}/starred?page=${page + 1}`
    );

    this.setState({ stars: [...stars, ...response.data], page: page + 1 });
  };

  refreshList = async () => {
    this.setState({ refreshing: false });

    const { navigation } = this.props;

    const user = navigation.getParam('user');

    const response = await api.get(`/users/${user.login}/starred?page=1`);

    this.setState({ stars: response.data, page: 1, refreshing: false });
  };

  handleNavigateToRepository = repository => {
    const { navigation } = this.props;

    navigation.navigate('Repository', { repository });
  };

  render() {
    const { navigation } = this.props;
    const { stars, loading, refreshing } = this.state;

    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        {loading ? (
          <ActivityIndicator color="black" />
        ) : (
          <Stars
            onRefresh={this.refreshList} // Função dispara quando o usuário arrasta a lista pra baixo
            refreshing={refreshing} // Variável que armazena um estado true/false que representa se a lista está atualizando
            onEndReachedThreshold={0.2} // Carrega mais itens quando chegar em 20% do fim
            onEndReached={this.loadMore} // Função que carrega mais itens
            data={stars}
            KeyExtractor={star => String(star.id)}
            renderItem={({ item }) => (
              <Starred onPress={() => this.handleNavigateToRepository(item)}>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />
        )}
      </Container>
    );
  }
}
