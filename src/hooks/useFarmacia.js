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
    try {
      setLoading(true);
      await updateFarmaciaApi(id, data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const deleteFarmacia = async (nombre) => {
    console.log("esta entrando");
    try {
      setLoading(true);
      await deleteFarmaciaApi(nombre, auth.token);
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