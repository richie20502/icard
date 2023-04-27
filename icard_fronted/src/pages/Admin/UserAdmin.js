import React, {useEffect} from 'react';
import { HeaPage } from "../../components/Admin";
import {useUser } from "../../hooks";

export function UserAdmin() {
    const {users,loading,getUsers} = useUser();
    
    useEffect(() =>{
        getUsers();
    },[]);
    return (
        <div>
            <HeaPage title="Usuarios" /*btnTitle="Nuevo Usuario" btnTitleTwo="Eliminar Usuario"*/ />
            <h1>Estamos en Users Admin</h1>
        </div>
    )
}
