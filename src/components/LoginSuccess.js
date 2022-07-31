import { useEffect } from "react";

const LoginSuccess = () => {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, [500]);
  }, []);
  return <div>Thanks for logging in!</div>;
};

export default LoginSuccess;
