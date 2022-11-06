import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import {TableFarmaciaAdmin, AddEditFarmaciaForm} from "../../components/Admin/Farmacia";

import {HeaderPage} from "../../components/Admin/HeaderPage/HeaderPage"
import { ModalBasic } from "../../components/Common/ModalBasic/ModalBasic";
import { useFarmacia } from "../../hooks/useFarmacia";

export function  FarmaciaAdmin() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const { loading, farmacias, getFarmacias, deleteFarmacia} = useFarmacia();  

  useEffect(() => {getFarmacias()}, [refetch]);

  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);

  const addFarmacia = () => {
    setTitleModal("Nueva Farmacia");
    setContentModal(
      <AddEditFarmaciaForm onClose={openCloseModal} onRefetch={onRefetch} />
    );
    openCloseModal();
  };

  const updateFarmacia = (data) => {
    console.log("Editando Farmacia...")
    console.log("Edicion: "+data);
    
    setTitleModal("Actualizar Farmacia");
    setContentModal(
      <AddEditFarmaciaForm onClose={openCloseModal}  onRefetch={onRefetch} farmacia={data}   />
    );
    openCloseModal();
    
  };

 
  const onDeleteFarmacia = async (data) => {
    console.log(data);
    const result = window.confirm(`¿Eliminar Farmacia ${data.nombre}?`);
    if (result) {
      await deleteFarmacia(data.id);
      onRefetch();
    }
  };
 

  return (
    <>
      <HeaderPage
        title="Farmacias"
        btnTitle="Nueva Farmacia"
        btnClick={addFarmacia}
      />
            
      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
    
        <TableFarmaciaAdmin
          farmacias={farmacias}
          updateFarmacia={updateFarmacia}
          deleteFarmacia={onDeleteFarmacia}
        />

      )}
     
     <ModalBasic 
       show={showModal}
       onClose={openCloseModal}
       title={titleModal}
       children={contentModal}
      /> 


      
    </>
  );
}
