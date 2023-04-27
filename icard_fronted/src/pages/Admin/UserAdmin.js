import React, {useEffect} from 'react';
import { HeaPage, TableUsers } from "../../components/Admin";
import { Loader } from "semantic-ui-react";
import {useUser } from "../../hooks";

export function UserAdmin() {
    const {users,loading,getUsers} = useUser();
    console.log(users);
    
    useEffect(() =>{
        getUsers();
    },[]);
    return (
        <div>
            <HeaPage title="Usuarios" btnTitle="Nuevo Usuario" /*btnTitleTwo="Eliminar Usuario"*/ />
            {
                loading ? (
                    <Loader active inline="centered">
                        Cargando ...
                    </Loader>
                ): (
                    <TableUsers users={users} />
                )
            }
        </div>
    )
}
