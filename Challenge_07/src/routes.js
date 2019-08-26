import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createDrawerNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#191920',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
