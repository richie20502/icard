import React from 'react';
import "./TopMenu.scss";
import {Icon, Menu} from "semantic-ui-react";

export function TopMenu() {
    return (
        <Menu fixed='top' className='top-menu-admin'>
            <Menu.Item className='top-menu-admin__logo'>
                <p>iCard Admin</p>
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item>
                    Hola, Usuario ...
                </Menu.Item>
                <Menu.Item>
                    <Icon name='sign-out'/>
                </Menu.Item>
            </Menu.Menu>

        </Menu>
    )
}
