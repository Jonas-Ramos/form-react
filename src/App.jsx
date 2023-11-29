import { useState } from "react";
import AuthContext from "./context/AuthContext";

import ForgotPassword from "./components/ForgotPassword"
import Signin from "./components/Signin"
import Signup from "./components/Signup"


const App = () => {
const [step, setStep] = useState('signup');
  return  (
    <AuthContext.Provider value={{ step, setStep}}>
      <div className="container">
      { step === "signin" && <Signin />}
      { step === "signup" && <Signup />}
      { step === "forgot" && <ForgotPassword />}
    </div>
    </AuthContext.Provider>
  );
};

export default App
