import React from "react";

import SignIn from "../../component/sign-in/sign-in";
import SignUp from "../../component/sign-up/sign-up";
import './sign.scss';


const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp/>
  </div>
);

export default SignInAndSignUpPage;
