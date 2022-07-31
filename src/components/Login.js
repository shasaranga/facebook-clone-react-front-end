import React from "react";
import GoogleButton from "react-google-button";
import "./Login.css";

const Login = ({ fetchUser }) => {
  const redirectToGoogleSSO = async () => {
    let timer = null;
    const googleLoginURL = `${process.env.REACT_APP_BACKEND_BASE_URL}/api/v1/login/google`;
    const newWindow = window.open(
      googleLoginURL,
      "_blank",
      "width=500,height=600"
    );

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log("Yay we're authenticated");
          fetchUser();
          if (timer) clearInterval(timer);
        }
      }, 500);
    }
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          alt="FB-Logo"
        />
        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" />
      </div>
      <div id="signInDiv">
        <GoogleButton onClick={redirectToGoogleSSO} />
      </div>
    </div>
  );
};

export default Login;
