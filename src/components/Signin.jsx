
const Signin = () => {
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
                    <input type="password" id="password"/>
                    <p className="error"> Password is Required</p>
                </fieldset>
                <button type="submit">Login</button>
                <div className="forgot">Forgot Password</div>
            </form>
        </div>
        <p> Don&apos;t have an account &copy; <span>Sign Up</span></p>
    </main>
  )
}

export default Signin