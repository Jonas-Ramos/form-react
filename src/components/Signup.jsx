
const Signup = () => {
  return (
    <main>
      <h3>Welcome, Join Us!</h3>
      <div className="card">
        <form autoComplete="off">
          <fieldset>
            <label htmlFor="fullName">Full fullName</label>
            <input type="text" id="fullName" autoFocus/>
            <p className="error">Required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="email">email</label>
            <input type="email" autoComplete="off" id="email" autoFocus/>
            <p className="error"> Valid Email Required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"/>
            <p className="error"> Password is Required</p>
          </fieldset>
          <fieldset>
             <label htmlFor="confirm">Confirm Password</label>
             <input type="password" id="confirm"/>
             <p className="error">Required</p>
         </fieldset>
         <fieldset>
            <label htmlFor="framework">Favorite Framework</label>
            <select id="framework">
              <option value="">Select your framework</option>
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="angular">Angular</option>
            </select>
            <p className="error">Required</p>
         </fieldset>
         <fieldset>
          <label htmlFor="terms">
            <input type="checkbox"  id="terms" /> Accept terms & conditions
          </label>
            <p className="error error_terms">Required</p>
         </fieldset>
         <button type="submit">Register</button>
        </form>
      </div>
      <p>Already have an account? &copy;<span> Sign In</span></p>
    </main>
  )
}

export default Signup