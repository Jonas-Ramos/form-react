import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";


const Signin = () => {
    let {setStep} = useContext(AuthContext);

    //Datos del formulario
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");

    // Focus
    const [ emailFocus, setEmailFocus ] = useState(false);
    const [ passwordFocus, setPasswordFocus ] = useState(false);

    const handlerSubmit = (e) => {
        // Evita el envío de datos a un backend
        e.preventDefault();
        console.log(`${email} ${password}`);
    }
  return(
    <main> 
        <h3>Hello, friend!</h3> 
        <div className="card">
            <form onSubmit={ handlerSubmit } autoComplete="off">
                <fieldset>
                    <label htmlFor="email">email</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        autoFocus
                        required
                        onBlur={ ()=> setEmailFocus(true) }
                        data-focus= {emailFocus}
                        />
                    <p className="error"> Valid Email Required</p>
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        onBlur={ ()=> setPasswordFocus(true) }
                        data-focus= {passwordFocus}
                        pattern="^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$"
                    />
                    <p className="error"> La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.
NO puede tener otros símbolos.</p>
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