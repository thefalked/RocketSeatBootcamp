import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #191920;
  flex: 1;
`;

export const ProductList = styled.ScrollView.attrs({
  horizontal: true,
})`
  padding: 20px 0;
`;

// export const Product = styled.FlatList``;
export const Product = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  margin-left: 20px;

  max-width: 250px;
  margin-bottom: auto;
`;

export const ProductImage = styled.Image`
  align-self: center;
  width: 100px;
  height: 100px;
  max-width: 250px;
`;

export const Title = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
`;

export const Price = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 30px;
`;

export const ButtonCart = styled(RectButton)`
  background: #7159c1;
  flex-direction: row;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;
  align-items: center;
`;

export const ButtonCartText = styled.Text`
  color: white;
  font-size: 20px;
  text-align: center;
  width: auto;
  margin: 0 auto;
`;

export const QntCart = styled.Text`
  flex-direction: row;
  align-items: baseline;
  background: rgba(0, 0, 0, 0.1);
  text-align: center;
  font-weight: bold;
  padding: 10px 10px;
`;

export const Qnt = styled.Text`
  color: white;
  font-size: 20px;
`;
