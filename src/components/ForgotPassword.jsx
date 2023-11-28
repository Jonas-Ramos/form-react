import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const ForgotPassword = () => {
  let {setStep} = useContext(AuthContext);
  return (
    <main>
      <h3>Forgot Password</h3>
      <div className="card">
      <form>
        <fieldset>
            <label htmlFor="email">email</label>
            <input type="email" autoComplete="off" id="email" autoFocus/>
            <p className="error"> Valid Email Required</p>
          </fieldset>
          <button type="submit">Remember me!</button>
      </form>
      </div>
      <p>Already have an account? &copy;<span onClick={()=>{setStep("signin")}}> Sign In</span></p>
    </main>
  )
}

export default ForgotPassword