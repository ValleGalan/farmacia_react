import { useState } from "react";
import {
  getFarmaciaApi,
  addFarmaciaApi,
  updateFarmaciaApi,
  deleteFarmaciaApi,
} from "../api/farmacia";

import { useAuth } from "./useAuth";

export function useFarmacia() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [farmacias, setFarmacias] = useState(null);
  const { auth } = useAuth();

  const getFarmacias = async () => {
    try {
      setLoading(true);
      const response = await getFarmaciaApi();
      setLoading(false);
      setFarmacias(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const addFarmacia = async (data) => {
    try {
      setLoading(true);
      await addFarmaciaApi(data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const updateFarmacia = async (id, data) => {
    console.log("esta entrando para editar ");
    console.log(" el ID"+ id);
    try {
      setLoading(true);
      await updateFarmaciaApi(id, data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const deleteFarmacia = async (id) => {
    console.log("esta entrando para eliminar ");
    console.log(" el ID"+ id);
    try {
      setLoading(true);
      await deleteFarmaciaApi(id, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return {
    loading,
    error,
    farmacias,
    getFarmacias,
    addFarmacia,
    updateFarmacia,
    deleteFarmacia,
  };
}