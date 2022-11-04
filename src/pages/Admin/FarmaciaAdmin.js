import React, { useState, useEffect } from "react";
import {HeaderPage} from "../../components/Admin/HeaderPage/HeaderPage";
import {
  TableFarmaciaAdmin,
  AddEditFarmaciaForm,
} from "../../components/Admin/Farmacia";
import { ModalBasic } from "../../components/Common/ModalBasic/ModalBasic";
import { useFarmacia } from "../../hooks/useFarmacia";

//MATERIAL
import CircularProgress from '@material-ui/core/CircularProgress';

export function FarmaciaAdmin() {
 const {loading ,farmacias, getFarmacia, deleteFarmacia } = useFarmacia();


  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
 
  useEffect(() => getFarmacia(), [refetch]);
  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);
  
  //CRUD BASICO
  const addFarmacia = () => {
    setTitleModal("Nueva farmacia");
    setContentModal(
      <AddEditFarmaciaForm onClose={openCloseModal} onRefetch={onRefetch} />
    );
    openCloseModal();
  };

  const updateFarmacia = (data) => {
    setTitleModal("Actualizar Farmacia");
    setContentModal(
      <AddEditFarmaciaForm
        onClose={openCloseModal}
        onRefetch={onRefetch}
        farmacia={data}
      />
    );
    openCloseModal();
  };
  const onDeleteFarmacia = async (data) => {
    const result = window.confirm(`¿Eliminar farmacia ${data.title}?`);
    if (result) {
      await deleteFarmacia(data.id);
      onRefetch();
    }
  };
  //RETORNO
  return (
    <>
      <HeaderPage
        title="Farmacias"
        btnTitle="Nuevo farmacia"
        btnClick={addFarmacia}
      />

      {loading ? (
        <div  active inline="centered" sx={{ display: 'flex' }}>
           <CircularProgress />
        </div >
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

  )
}
