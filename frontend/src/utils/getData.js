import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/userSlice";
import { useEffect } from "react";

export const getData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      axios
        .get("http://localhost:3001/api/usuarios/me", {
          withCredentials: true,
        })
        .then((res) => res.data)
        .then((res) => {
          const { _id, email, name } = res;
          dispatch(loginUser({ id: _id, email: email, name: name }));
        });
    } catch (error) {
      console.error(error);
    }
    // eslint-disable-next-line
  }, []);
};
