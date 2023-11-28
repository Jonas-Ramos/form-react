import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import InputPassword from "./InputPassword";


const Signin = () => {
    let {setStep} = useContext(AuthContext);
  return(
    <main> 
        <h3>Hello, friend!</h3> 
        <div className="card">
            <form autoComplete="off">
                <fieldset>
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" autoFocus/>
                    <p className="error"> Valid Email Required</p>
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password</label>
                    {/* <input type="password" id="password"/> */}
                    <InputPassword /> 
                    {/* <p className="error"> Password is Required</p> */}
                </fieldset>
                <button type="submit">Login</button>
                <div className="forgot" onClick={()=>{setStep("forgot")}}>Forgot Password</div>
            </form>
        </div>
        <p> Don&apos;t have an account &copy; <span onClick={()=>{setStep("signup")}}>Sign Up</span></p>
    </main>
  )
}

export default Signin