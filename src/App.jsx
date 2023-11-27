import { useState } from "react"

import ForgotPassword from "./components/ForgotPassword"
import Signin from "./components/Signin"
import Signup from "./components/Signup"


const App = () => {
const [step, setStep] = useState('signup');
  return  (
    <div className="container">
      { step === "signin" && <Signin />}
      { step === "signup" && <Signup />}
      { step === "forgot" && <ForgotPassword />}
    </div>
  )
}

export default App
