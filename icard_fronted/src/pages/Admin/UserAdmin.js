import React, {useState,useEffect} from 'react';
import { HeaPage, TableUsers,AddEditUserForm } from "../../components/Admin";
import { Loader } from "semantic-ui-react";
import { useUser } from "../../hooks";
import { ModalBasic } from "../../components/Common";

export function UserAdmin() {
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState(null);
    const [contentModal, setContentModal] = useState(null);
    const {users,loading,getUsers} = useUser();
    //const prevState = false;
    
    useEffect(() =>{
        getUsers();
    },[]);

    const openCloseModal = () => setShowModal(()  => {
        setShowModal(true);
    });

    const addUser = () => {
        setTitleModal("Nuevo usuario");
        setContentModal(AddEditUserForm);
        openCloseModal();
    }



    return (
        <div>
            <HeaPage title="Usuarios" btnTitle="Nuevo Usuario"  btnClick={addUser} /*btnTitleTwo="Eliminar Usuario"*/ />
            {
                loading ? (
                    <Loader active inline="centered">
                        Cargando ...
                    </Loader>
                ): (
                    <TableUsers users={users} />
                )
            }
            <ModalBasic 
                show={showModal}  
                onClose={openCloseModal}
                title = {titleModal}
                children= {contentModal}

              
            />
        </div>
    )
}
