import React, { useState, useCallback } from "react";
import { Form, Image, Button } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useFarmacia} from "../../../../hooks/useFarmacia";
import "./AddEditFarmaciaForm.scss";

export function AddEditFarmaciaForm(props) {
  const { onClose, onRefetch, farmacia } = props;
  const [previewImage, setPreviewImage] = useState(farmacia?.imagen || null);
  const { addFarmacia, updateFarmacia } = useFarmacia();

  const formik = useFormik({
    initialValues: initialValues(farmacia),
    validationSchema: Yup.object(farmacia ? updateSchema() : newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (farmacia) await updateFarmacia(farmacia.id, formValue);
        else await addFarmacia(formValue);

        onRefetch();
        onClose();
      } catch (error) {
        console.error(error);
      }
    },
  });

  const onDrop = useCallback(async (acceptedFile) => {
    const file = acceptedFile[0];
    await formik.setFieldValue("imagen", file);
    setPreviewImage(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "",//"  en la pagina no lo acepta asiq verXD  imagen/jpeg, imagen/.jpg,  imagen/.png
    noKeyboard: true,
    multiple: false,
    onDrop,
  });
//     <Button basic color='green' content="mapa" with="40px" > </Button>

  return (
    <Form className="add-edit-farmacia-form" onSubmit={formik.handleSubmit}>


      <Form.Input
        name="nombre"
        placeholder="Nombre de la farmacia"
        value={formik.values.nombre}
        onChange={formik.handleChange}
        error={formik.errors.nombre}
      />
       <Form.Input
        name="ubicacion"
        placeholder="ubicacion de la farmacia"
        value={formik.values.ubicacion}
        onChange={formik.handleChange}
        error={formik.errors.ubicacion}
      />
       <Form.Input
        name="localidad"
        placeholder="localidad de la farmacia"
        value={formik.values.localidad}
        onChange={formik.handleChange}
        error={formik.errors.localidad}
      />
      <Form.Input
        name="telefono"
        placeholder="telefono de la farmacia"
        value={formik.values.telefono}
        onChange={formik.handleChange}
      //  error={formik.errors.telefono}
      />
       <Form.Input
        name="turno_date"
        placeholder="turno_date de la farmacia"
        value={formik.values.turno_date}
        onChange={formik.handleChange}
        error={formik.errors.turno_date}
      />
      <Form.Input
        name="turno_timeFrom"
        placeholder="turno desde"
        value={formik.values.turno_timeFrom}
        onChange={formik.handleChange}
        //error={formik.errors.turno_timeFrom}
      />
      <Form.Input
        name="turno_timeTo"
        placeholder="turno hasta"
        value={formik.values.turno_timeTo}
        onChange={formik.handleChange}
      //  error={formik.errors.turno_timeTo}
      />


      <Button
        type="button"
        fluid
        color={formik.errors.imagen && "red"}
        {...getRootProps()}
      >
        {previewImage ? "Cambiar imagen" : "Subir imagen"}
      </Button>

      <input {...getInputProps()} />
      <Image src={previewImage} fluid />

      

      <Button
        type="submit"
        primary
        fluid
        content={farmacia ? "Actualizar" : "Crear"}
      />
    </Form>
  );
}

function initialValues(data) {
  return {
    nombre: data?.nombre || "",
    ubicacion: data?.ubicacion || "",
    localidad: data?.localidad || "",
    telefono: data?.telefono || "",
    turno_date: data?.turno_date || "",
    turno_timeFrom: data?.turno_timeFrom || "",
    turno_timeTo: data?.turno_timeTo || "",


    imagen: "",
  };
}

function newSchema() {
  return {
    nombre: Yup.string().required(true),
    ubicacion: Yup.string().required(true),
    localidad: Yup.string().required(true),
  //  telefono: Yup.string().required(true),
    turno_date: Yup.string().required(true),
   // turno_timeFrom: Yup.string().required(true),
    //turno_timeTo: Yup.string().required(true),

    imagen: Yup.string().required(true),
  };
}

function updateSchema() {
  return {
    nombre: Yup.string().required(true),
    ubicacion: Yup.string().required(true),
    localidad: Yup.string().required(true),
   // telefono: Yup.string().required(true),
    turno_date: Yup.string().required(true),
   // turno_timeFrom: Yup.string().required(true),
    //turno_timeTo: Yup.string().required(true),

    imagen: Yup.string(),
  };
}