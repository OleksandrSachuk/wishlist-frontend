import React from 'react';
import {
  AppBar,
  IconButton,
} from 'material-ui';

import NavigationMore from 'material-ui/svg-icons/navigation/menu';
import {
  CreateUser,
} from '../common';

const Main = () => (
  <div>
    <AppBar
      title="Wishlist"
      iconElementLeft={<IconButton><NavigationMore /></IconButton>}
      iconElementRight={<CreateUser />}
    />
  </div>
);

export default Main;
