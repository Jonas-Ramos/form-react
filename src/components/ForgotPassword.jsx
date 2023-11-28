const ForgotPassword = () => {
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
      <p>Already have an account? &copy;<span> Sign In</span></p>
    </main>
  )
}

export default ForgotPassword