import React, { Component } from 'react';
import PropType from 'prop-types';
import { WebView } from 'react-native-webview';

// import { Container } from './styles';

export default class gitRepository extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').name,
  });

  static propType = {
    navigation: PropType.shape({
      getParam: PropType.func,
    }).isRequired,
  };

  render() {
    const repository = this.props.navigation.getParam('repository');
    return (
      <WebView source={{ uri: repository.html_url }} style={{ flex: 1 }} />
    );
  }
}
