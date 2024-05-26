import { mockAPI } from "./axiosInstances";

export const fetchPayments = async () => {
  const response = await mockAPI.get("/payments");
  return response.data;
};

export const fetchPaymentById = async (paymentId) => {
  const response = await mockAPI.get(`/payments/${paymentId}`);
  return response.data;
};
