import React, {useState,useEffect} from 'react';
import { HeaPage, TableUsers } from "../../components/Admin";
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

    return (
        <div>
            <HeaPage title="Usuarios" btnTitle="Nuevo Usuario"  btnClick={openCloseModal} /*btnTitleTwo="Eliminar Usuario"*/ />
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
                title ='Titulo modal props'  >
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </ModalBasic>
        </div>
    )
}
