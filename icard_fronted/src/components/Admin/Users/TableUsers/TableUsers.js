import React from 'react';
import { Table, Button, Icon, TableHeader, TableHeaderCell} from "semantic-ui-react";
import "./TableUsers.scss";
import {map} from "lodash";

export function TableUsers(props) {
    console.log('TableUsers')
    const {users} = props;
    console.log('TableUsers -->', users);
    return (
        <Table className='table-users-admin'>
            <Table.Header>
                <Table.Row>
                    <TableHeaderCell>Username</TableHeaderCell>
                    <TableHeaderCell>Email</TableHeaderCell>
                    <TableHeaderCell>Nombre</TableHeaderCell>
                    <TableHeaderCell>Apellidos</TableHeaderCell>
                    <TableHeaderCell>Activo</TableHeaderCell>
                    <TableHeaderCell>Staff</TableHeaderCell>
                    <TableHeaderCell></TableHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {map(users, (user, index) => (
                    <Table.Row key={index}>
                        <Table.Cell> {user.username} </Table.Cell>
                        <Table.Cell> {user.email} </Table.Cell>
                        <Table.Cell> {user.first_name} </Table.Cell>
                        <Table.Cell> {user.last_name} </Table.Cell>
                        <Table.Cell> 0 - Active </Table.Cell>
                        <Table.Cell> 0 - Staff </Table.Cell>
                        <Table.Cell> 0 - Actions </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
}
