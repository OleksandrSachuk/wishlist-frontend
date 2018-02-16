import React from 'react';
import { RaisedButton } from 'material-ui';

import PersonAdd from 'material-ui/svg-icons/social/person-add';

const CreateUser = () => (
  <RaisedButton
    href="https://github.com/callemall/material-ui"
    target="_blank"
    label="Registration"
    primary
    icon={<PersonAdd />}
  />
);

export default CreateUser;
