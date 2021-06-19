import api from "./apiconfig";
const localStorage = window.localStorage;

export const setLoggedIn = async (formData) => {
  localStorage.setItem("guest-token", JSON.stringify(formData));
};

export const checkLoggedIn = async () => {
  const token = localStorage.getItem("guest-token");
  if (token) {
    return true;
  }
  return false;
};

export const logoutGuest = async (id) => {
  const response = await api.put(`/bmc_guests/${id}`, {
    duets_guest: { active: false },
  });
  return response;
};

export const createGuest = async (guestData) => {
  const response = await api.post("/bmc_guests", { bmc_guest: guestData });
  return response.data;
};

export const showGuests = async () => {
  const response = await api.get("/bmc_guests");
  return response.data;
};

export const deleteGuest = async (id) => {
  const response = await api.delete(`/bmc_guests/${id}`);
  return response.data;
};

export const deleteAllGuests = async () => {
  const response = await api.delete("/all_bmc_guests");
  return response.data;
};

export const updateGuest = async (id, payload) => {
  const resp = await api.put(`/bmc_guests/${id}`, { bmc_guest: payload });
  return resp.data;
};

export const removeToken = () => {
  localStorage.removeItem("guest-token");
};
