import React from 'react';
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

export default function Home() {
  return (
    <Container>
      <ProductList>
        <Product>
          <ProductImage
            source={{
              uri:
                'https://imgcentauro-a.akamaihd.net/900x900/92344102/tenis-new-balance-ml501-masculino-img.jpg',
            }}
          />
          <Title>Tênis de caminhada leve e confortaél</Title>
          <Price>R$ 1000,00</Price>

          <ButtonCart>
            <QntCart>
              <Icon name="shopping-cart" size={20} color="#FFF" />
              <Qnt>1</Qnt>
            </QntCart>
            <ButtonCartText>Adicionar</ButtonCartText>
          </ButtonCart>
        </Product>
      </ProductList>
    </Container>
  );
}
