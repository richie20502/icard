import React, {useEffect} from 'react';
import {useUser } from "../../hooks";

export function UserAdmin() {
    const {users,loading,getUsers} = useUser();
    console.log("user  ---> ",users);
    useEffect(() =>{
        getUsers();
    },[]);
    return (
        <div>
            <h1>Estamos en Users Admin</h1>
        </div>
    )
}
