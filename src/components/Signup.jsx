import { useContext } from "react";
import { Formik, Form, Field } from "formik";
import AuthContext from "../context/AuthContext";

const Signup = () => {
  let {setStep} = useContext(AuthContext);

  const initialValues = {
    fullname: '',
    email: '',
    password: '',
    confirm: '',
    framework: '',
    terms: false,
  }

  return (
    <main>
      <h3>Welcome, Join Us!</h3>
      <div className="card">
        <Formik initialValues={initialValues}>
        <Form autoComplete="off">
          <fieldset>
            <label htmlFor="fullName">Full fullName</label>
            {/* <input type="text" id="fullName" autoFocus/>
             */}
             <Field name="fullname" id="fullName" type="text" autoFocus/>
            <p className="error">Required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="email">email:</label>
            {/* <input type="email" autoComplete="off" id="email" autoFocus/> */}
            <Field name="email" id="email" type="email"/>
            <p className="error"> Valid Email Required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            {/* <input type="password" id="password"/> */}
            <Field name="password" id="password" type="password" />
            <p className="error"> Password is Required</p>
          </fieldset>
          <fieldset>
             <label htmlFor="confirm">Confirm Password</label>
             {/* <input type="password" id="confirm"/> */}
             <Field name="confirm" id="confirm" type="password" />
             <p className="error">Required</p>
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
            <p className="error">Required</p>
         </fieldset>
         <fieldset>
          <label htmlFor="terms">
            <Field name="terms" id="terms" type="checkbox"/>
            {/* <input type="checkbox"  id="terms" />  */}
             Accept terms & conditions
          </label>
            <p className="error error_terms">Required</p>
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