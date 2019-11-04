import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ProductList,
  EmptyCart,
  Product,
  ProductDescription,
  ProductImage,
  ProducTexts,
  Title,
  Price,
  ButtonDelete,
  ProductInfo,
  ProductQnt,
  ProductQntPlus,
  InputQnt,
  ProductQntRemove,
  ProductSubPrice,
  Total,
  TotalText,
  TotalPrice,
  TotalButton,
  TottalButtonText,
} from './styles';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <ProductList>
        <Product>
          <ProductDescription>
            <ProductImage
              source={{
                uri: product.image,
              }}
              alt={product.title}
            />
            <ProducTexts>
              <Title>{product.title}</Title>
              <Price>{product.priceFormatted}</Price>
            </ProducTexts>
            <ButtonDelete onClick={() => removeFromCart(product.id)}>
              <Icon name="delete-forever" size={20} color="#7159c1" />
            </ButtonDelete>
          </ProductDescription>
          <ProductInfo>
            <ProductQnt>
              <ProductQntPlus onClick={() => increment(product)}>
                <Icon name="add-circle-outline" size={20} color="#7159c1" />
              </ProductQntPlus>
              <InputQnt>{product.amount}</InputQnt>
              <ProductQntRemove onClick={() => decrement(product)}>
                <Icon name="remove-circle-outline" size={20} color="#7159c1" />
              </ProductQntRemove>
            </ProductQnt>
            <ProductSubPrice>{product.subtotal}</ProductSubPrice>
          </ProductInfo>
        </Product>
      </ProductList>
      <Total>
        <TotalText>Total</TotalText>
        <TotalPrice>{total}</TotalPrice>
        <TotalButton>
          <TottalButtonText>Finalizar Pedido</TottalButtonText>
        </TotalButton>
      </Total>
    </Container>
    // <Container>
    //   <ProductList>
    //     <Icon name="shopping-cart" size={80} color="lightgray" />
    //     <EmptyCart>Seu Carrinho Está Vazio</EmptyCart>
    //   </ProductList>
    // </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    // subtotal: formatPrice(product.price * product.amount),
    subtotal: product.price * product.amount,
  })),
  // total: formatPrice(
  //   state.cart.reduce((total, product) => {
  //     return total + product.price * product.amount;
  //   }, 0)
  // ),
  total: state.cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
