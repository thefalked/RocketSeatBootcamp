import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #191920;
  flex: 1;
`;

export const ProductList = styled.View`
  background-color: white;
  margin: 0 20px 0 20px;
  align-items: center;
  padding: 0 20px;
`;

export const EmptyCart = styled.Text`
  text-align: center;
  width: 100%;
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
`;

// =================================================

export const Product = styled.FlatList`
  margin-top: 20px;
`;

export const ProductDescription = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const ProductImage = styled.Image`
  align-self: center;
  width: 80px;
  height: 80px;
  max-width: 250px;
  margin-right: 10px;
`;

export const ProducTexts = styled.View`
  width: 65%;
`;

export const Title = styled.Text``;

export const Price = styled.Text`
  font-weight: 700;
`;

export const ButtonDelete = styled(RectButton)`
  width: 7%;
  align-self: center;
`;

// ===================================================

export const ProductInfo = styled.View`
  flex-direction: row;
  background-color: #eeee;
  width: 100%;
  border-radius: 4px;
  padding: 10px;
`;

export const ProductQnt = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ProductQntPlus = styled(RectButton)``;

export const InputQnt = styled.TextInput.attrs({
  editable: false,
})`
  background-color: white;
  color: black;
  width: 50px;
  font-size: 15px;
  margin: 0 10px;
  padding: 2px 10px;
  border-radius: 4px;
  border: 1px solid lightgrey;
`;

export const ProductQntRemove = styled(RectButton)``;

export const ProductSubPrice = styled.Text`
  font-weight: 700;
  align-self: center;
  margin-left: auto;
`;

// ==========================================================

export const Total = styled.View`
  background-color: white;
  margin: 0 20px;
  align-items: center;
  padding: 20px;
`;

export const TotalText = styled.Text`
  text-transform: uppercase;
  font-weight: 700;
  color: grey;
`;

export const TotalPrice = styled.Text`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 25px;
`;

export const TotalButton = styled(RectButton)`
  background: #7159c1;
  width: 100%;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;
  align-items: center;
`;

export const TottalButtonText = styled.Text`
  color: white;
  font-size: 20px;
  margin: 5px 0;
  text-align: center;
  text-transform: uppercase;
`;
