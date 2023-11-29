import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthContext from "../context/AuthContext";
import { signUpSchema } from "../schemas/signUpSchema";

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  confirm: '',
  framework: '',
  terms: false,
}
const Signup = () => {
  let {setStep} = useContext(AuthContext);

const onSubmit = (values)=>{
  console.log(values);
}
  return (
    <main>
      <h3>Welcome, Join Us!</h3>
      <div className="card">
        <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit}
        validationSchema={signUpSchema}
        >
        <Form   autoComplete="off">
          <fieldset>
            <label htmlFor="fullName">Full fullName</label>
            {/* <input type="text" id="fullName" autoFocus/>
             */}
             <Field name="fullName" id="fullName" type="text" autoFocus/>
             <ErrorMessage 
             name="fullName" 
             className="error-message" 
             component="p"
             />
            {/* <p className="error-message">Required</p> */}
          </fieldset>
          <fieldset>
            <label htmlFor="email">email:</label>
            {/* <input type="email" autoComplete="off" id="email" autoFocus/> */}
            <Field name="email" id="email" type="email"/>
            <ErrorMessage 
             name="email" 
             className="error-message" 
             component="p"
             />

            {/* <p className="error"> Valid Email Required</p> */}
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            {/* <input type="password" id="password"/> */}
            <Field name="password" id="password" 
            type="password" />
            <ErrorMessage 
             name="password" 
             className="error-message" 
             component="p"
             />
            {/* <p className="error"> Password is Required</p> */}
          </fieldset>
          <fieldset>
             <label htmlFor="confirm">Confirm Password</label>
             {/* <input type="password" id="confirm"/> */}
             <Field name="confirm" id="confirm" type="password" />
             <ErrorMessage 
             name="confirm" 
             className="error-message" 
             component="p"
             />
             {/* <p className="error">Required</p> */}
         </fieldset>
         <fieldset>
            <label htmlFor="framework">Favorite Framework</label>
            {/* <select id="framework">
              <option value="">Select your framework</option>
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="angular">Angular</option>
            </select> */}
            <Field name="framework" id="framework" as="select">
              <option value="">Select your framework</option>
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="angular">Angular</option>
            </Field>
            <ErrorMessage 
             name="framework" 
             className="error-message" 
             component="p"
             />
            {/* <p className="error">Required</p> */}
         </fieldset>
         <fieldset>
          <label htmlFor="terms"> 
            <Field name="terms" id="terms" type="checkbox"/> 
            {/* <input type="checkbox"  id="terms" />  */}
             `Accept terms & conditions`
          </label>
          <ErrorMessage 
             name="terms" 
             className="error-message error-message_terms" 
             component="p"
             />
            {/* <p className="error error_terms">Required</p> */}
         </fieldset>
         <button type="submit">Register</button>
        </Form>
        </Formik>
      </div>
      <p>Already have an account? &copy;<span onClick={()=>{setStep("signin")}}> Sign In</span></p>
    </main>
  )
}

export default Signup