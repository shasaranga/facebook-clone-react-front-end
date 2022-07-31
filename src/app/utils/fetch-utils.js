import axios from "axios";
const fetchAuthUser = async () => {
  return await axios
    .get(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/v1/auth/user`, {
      withCredentials: true,
    })
    .catch((err) => {
      console.log("Not properly authenticated");
      console.error("LOGIN ERR --> ", err);
    });
};

const logoutUser = async () => {
  await axios.get(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/api/v1/auth/logout`,{
        withCredentials: true,
      }
  );
};

export { fetchAuthUser, logoutUser };
