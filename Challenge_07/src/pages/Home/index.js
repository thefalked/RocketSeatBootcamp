import React from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
// import { formatPrice } from '../../util/format';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ProductList,
  Product,
  ProductImage,
  Title,
  Price,
  ButtonCart,
  ButtonCartText,
  QntCart,
  Qnt,
} from './styles';

class Home extends React.Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      // priceFormatted: formatPrice(product.price),
      priceFormatted: product.price,
    }));

    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <Container>
        <ProductList
          data={products}
          KeyExtrator={product => product.id}
          renderItem={({ product }) => (
            <Product>
              <ProductImage
                source={{
                  uri: product.image,
                }}
                alt={product.title}
              />
              <Title>{product.title}</Title>
              <Price>{product.priceFormatted}</Price>

              <ButtonCart onClick={() => this.handleAddProduct(product.id)}>
                <QntCart>
                  <Icon name="shopping-cart" size={19} color="#FFF" />
                  <Qnt>{amount[product.id] || 0}</Qnt>
                </QntCart>
                <ButtonCartText>Adicionar</ButtonCartText>
              </ButtonCart>
            </Product>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
