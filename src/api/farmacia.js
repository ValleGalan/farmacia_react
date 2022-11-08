import {BASE_API} from "../utils/constants"

export async function getFarmaciaApi() {
    try {
      const url = `${BASE_API}/api/farmacia_app/`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }
//CORRECTO :D
  export async function addFarmaciaApi(data, token) {
    try {
      const formData = new FormData();
      //campos o atributos que puedo añadir
      formData.append("imagen", data.imagen);
      formData.append("nombre", data.nombre);
      formData.append("ubicacion", data.ubicacion);
      formData.append("telefono", data.telefono);
      formData.append("localidad", data.localidad);
      formData.append("turno_date", data.turno_date);
      formData.append("turno_timeFrom", data.turno_timeFrom);
      formData.append("turno_timeTo", data.turno_timeTo);

      const url = `${BASE_API}/api/farmacia_app/`;
      const params = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      };
  
      const response = await fetch(url, params);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  export async function updateFarmaciaApi(id, data, token) {
    try {
      const formData = new FormData();
      formData.append("nombre", data.nombre);
      formData.append("ubicacion", data.ubicacion);
      formData.append("localidad", data.localidad);
      formData.append("telefono", data.telefono);

      formData.append("turno_date", data.turno_date);
      formData.append("turno_timeFrom", data.turno_timeFrom);
      formData.append("turno_timeTo", data.turno_timeTo);

      if (data.image) formData.append("imagen", data.imagen);
  
      const url = `${BASE_API}/api/farmacia_app/${id}/`;
      const params = {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      };
  
      const response = await fetch(url, params);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  export async function deleteFarmaciaApi(id, token) {
    try {
      const url = `${BASE_API}/api/farmacia_app/${id}/`;
      const params = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const response = await fetch(url, params);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }