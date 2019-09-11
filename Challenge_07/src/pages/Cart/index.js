import React from 'react';
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

export default function Cart() {
  return (
    <Container>
      <ProductList>
        <Product>
          <ProductDescription>
            <ProductImage
              source={{
                uri:
                  'https://imgcentauro-a.akamaihd.net/900x900/92344102/tenis-new-balance-ml501-masculino-img.jpg',
              }}
            />
            <ProducTexts>
              <Title>Tênis de caminhada leve e confortavél</Title>
              <Price>R$ 1000,00</Price>
            </ProducTexts>
            <ButtonDelete>
              <Icon name="delete-forever" size={20} color="#7159c1" />
            </ButtonDelete>
          </ProductDescription>
          <ProductInfo>
            <ProductQnt>
              <ProductQntPlus>
                <Icon name="add-circle-outline" size={20} color="#7159c1" />
              </ProductQntPlus>
              <InputQnt>1</InputQnt>
              <ProductQntRemove>
                <Icon name="remove-circle-outline" size={20} color="#7159c1" />
              </ProductQntRemove>
            </ProductQnt>
            <ProductSubPrice>R$ 1,200.00</ProductSubPrice>
          </ProductInfo>
        </Product>
        <Product>
          <ProductDescription>
            <ProductImage
              source={{
                uri:
                  'https://imgcentauro-a.akamaihd.net/900x900/92344102/tenis-new-balance-ml501-masculino-img.jpg',
              }}
            />
            <ProducTexts>
              <Title>Tênis de caminhada leve e confortavél</Title>
              <Price>R$ 1000,00</Price>
            </ProducTexts>
            <ButtonDelete>
              <Icon name="delete-forever" size={20} color="#7159c1" />
            </ButtonDelete>
          </ProductDescription>
          <ProductInfo>
            <ProductQnt>
              <ProductQntPlus>
                <Icon name="add-circle-outline" size={20} color="#7159c1" />
              </ProductQntPlus>
              <InputQnt>1</InputQnt>
              <ProductQntRemove>
                <Icon name="remove-circle-outline" size={20} color="#7159c1" />
              </ProductQntRemove>
            </ProductQnt>
            <ProductSubPrice>R$ 1,200.00</ProductSubPrice>
          </ProductInfo>
        </Product>
      </ProductList>
      <Total>
        <TotalText>Total</TotalText>
        <TotalPrice>R$ 1,200.00</TotalPrice>
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
