import React from 'react';
import { StatusBar } from 'react-native';

import Header from './components/Header';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#191920" />
      <Header />
      <Routes />
    </>
  );
}
