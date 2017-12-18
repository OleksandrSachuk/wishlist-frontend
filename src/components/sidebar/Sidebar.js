import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Sidebar = props => (
    <div>
        <Nav vertical>
            <NavItem>
                <NavLink href="/create">Create</NavLink>
            </NavItem>
        </Nav>
    </div>
);

export default Sidebar;