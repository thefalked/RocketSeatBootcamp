import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Cart, Badge, ValueBadge } from './styles';

import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <Container>
      <Logo source={logo} />

      <Cart>
        <Icon name="shopping-basket" size={33} color="#FFF" />
        <Badge>
          <ValueBadge>1</ValueBadge>
        </Badge>
      </Cart>
    </Container>
  );
}

export default Header;
