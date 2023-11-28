import { useFormik } from "formik";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { forgotPasswordSchema } from "../schemas/forgotPasswordSchema";

const ForgotPassword = () => {
  let {setStep} = useContext(AuthContext);


  
  function onSubmit() {
    // e.preventDefault();
    return(
    console.log(values))
  }

  const { values, errors, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: forgotPasswordSchema,
    onSubmit,
  });
  
  


  return (
    <main>
      <h3>Forgot Password</h3>
      <div className="card">
      <form onSubmit={handleSubmit} autoComplete="off">
        <fieldset>
          <small>
          
          </small>
            <label htmlFor="email">email:</label>
            <input 
            type="email" 
            autoComplete="off" 
            id="email" 
            autoFocus
            value={ values.email}
            onChange={ handleChange}
            onBlur={ handleBlur}
            />
            { errors.email && <p className="error-message"> {errors.email}</p> }
          </fieldset>
          <button type="submit">Remember me!</button>
      </form>
      </div>
      <p>Already have an account? &copy;<span onClick={()=>{setStep("signin")}}> Sign In</span></p>
    </main>
  )
}

export default ForgotPassword