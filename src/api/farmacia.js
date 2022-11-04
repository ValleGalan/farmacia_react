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

  export async function addFarmaciaApi(data, token) {
    try {
      const formData = new FormData();
      formData.append("imagen", data.imagen);
      formData.append("nombre", data.nombre);
  
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
      formData.append("title", data.title);
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