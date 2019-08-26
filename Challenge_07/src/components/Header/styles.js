import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #191920;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image``;

export const Cart = styled(RectButton)`
  position: relative;
`;

export const Badge = styled.View`
  width: 20px;
  height: 20px;

  background: #7159c1;
  border-radius: 10px;

  position: absolute;
  top: -2;
  right: -2;
`;

export const ValueBadge = styled.Text`
  color: white;
  text-align: center;
`;
