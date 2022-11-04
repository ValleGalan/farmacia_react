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
    accept: "imagen/jpeg, imagen/png",
    noKeyboard: true,
    multiple: false,
    onDrop,
  });

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
        name="turno_date"
        placeholder="turno_date de la farmacia"
        value={formik.values.turno_date}
        onChange={formik.handleChange}
        error={formik.errors.turno_date}
      />
      <Form.Input
        name="turno_time"
        placeholder="turno_time de la farmacia"
        value={formik.values.turno_time}
        onChange={formik.handleChange}
        error={formik.errors.turno_time}
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
    turno_date: data?.turno_date || "",
    turno_time: data?.turno_time || "",

    imagen: "",
  };
}

function newSchema() {
  return {
    nombre: Yup.string().required(true),
    ubicacion: Yup.string().required(true),
    localidad: Yup.string().required(true),
    turno_date: Yup.string().required(true),
    turno_time: Yup.string().required(true),
    imagen: Yup.string().required(true),
  };
}

function updateSchema() {
  return {
    nombre: Yup.string().required(true),
    ubicacion: Yup.string().required(true),
    localidad: Yup.string().required(true),
    turno_date: Yup.string().required(true),
    turno_time: Yup.string().required(true),
    imagen: Yup.string(),
  };
}