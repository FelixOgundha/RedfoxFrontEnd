import axios from "axios";

const API_URL = "https://localhost:7155/api/Auth";

const signup = (email, password, role, firstName, lastName, nationalId, confirmPassword) => {
  console.log("we are in auth server", email, password, role, firstName, lastName, nationalId, confirmPassword)

  return axios
    .post("https://localhost:7155/api/Auth/Register", {
      email,
      password,
      confirmPassword,
      role,
      firstName,
      lastName,
      nationalId,

    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post("https://localhost:7155/api/Auth/Login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const verify = (code) => {
  return axios
    .post(`https://localhost:7155/api/Auth/Verify?token=${code}`)
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
  verify
};

export default authService;