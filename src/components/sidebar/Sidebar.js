import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Paper from 'material-ui/Paper';
import { MenuList, MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import SendIcon from 'material-ui-icons/Send';

const Sidebar = props => (
    <div>
        <Paper>
            <MenuList>
                <MenuItem>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Sent mail" />
                </MenuItem>
            </MenuList>
        </Paper>
    </div>
);

export default Sidebar;