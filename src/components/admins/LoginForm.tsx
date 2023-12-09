"use client"

import React, {useState} from 'react'

const LoginForm = () => {
    
  const [loginInfo, setLoginInfo] = useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: ''
  });

  const handleLogin = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('o');
  }
  
  return (
    <>
      <div className='trc-w-[400px] trc-mx-auto'>
        <div className="row">
          <div className="col-md-12">
            <div className="login-form">
              <div className="login-form-inner">
                <div className="login-form-content">
                  <div className="login-form-header">
                    <h3>Login</h3>
                    <p>Enter your email address and password to login</p>
                  </div>
                  <form onSubmit={handleLogin}>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" className="form-control" id="email" placeholder="Enter your email address"
                        value={loginInfo.email}
                        onChange={(e) => setLoginInfo({...loginInfo, email: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-control" id="password" placeholder="Enter your password"
                        value={loginInfo.password}
                        onChange={(e) => setLoginInfo({...loginInfo, password: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox"  id="remember" 
                          value={loginInfo.password}
                          onChange={(e) => setLoginInfo({...loginInfo, password: e.target.value})}
                        />
                        <label className="form-check-label" htmlFor="remember">Remember me</label>
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block">Login</button>
                    </div>
                    <div className="form-group">
                      <div className="forgot-password">
                        <a href="#">Forgot Password?</a>
                      </div>
                    </div>
                  </form>
                  <div className="login-form-footer">
                    <p>Don't have an account? <a href="#">Create an account</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm
