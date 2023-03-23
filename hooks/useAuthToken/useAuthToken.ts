import { useEffect, useState } from "react";

const useAuthToken = () => {
  const [authToken, setAuthtoken] = useState<String | null>(null);

  useEffect(() => {
    const token: String | null = localStorage.getItem("access-token");
    // console.log(token);
    setAuthtoken(token);
  }, []);

  return { authToken };
};
export default useAuthToken;