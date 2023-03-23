import { useState } from "react";
import useAuthToken from "../useAuthToken/useAuthToken";

const useUser = () => {
  const [isLoading, setIsloading] = useState(true);
  const [user, setUser] = useState(null);

  const { authToken } = useAuthToken();

  const getUser = async () => {
    const URL = `${process.env.API_URL}/user`;
    const body = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    };
  };
  return { user, isLoading };
};

export default useUser;