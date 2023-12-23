

import React, { useState } from 'react';
import { login } from '@/services';
import { useForm, SubmitHandler } from 'react-hook-form';

import { adminAtom, loggedInAtom } from '@/store';
import { useAtom } from 'jotai';

const LoginForm = () => {

  const [_, setAdmin] = useAtom(adminAtom);
  const [__, setLoggedIn] = useAtom(loggedInAtom);

  const [busy, setBusy] = useState<boolean>(false);
  const { register, watch, handleSubmit, formState: { errors } } = useForm<TLogin>();

  const handleLogin: SubmitHandler<TLogin> = async (data: any) => {
    setBusy(true);
    const res = await login(data.email, data.password);
    if (res.success) {
      const admin = res.data;
      setAdmin(admin);
      setLoggedIn(true);
      window.location.href = '/admin';
    }
    setBusy(false);
    return false;
  }
  
  return (
    <>
      <div className='trc-w-[400px] trc-mx-auto'>
        <div className="row">
          <div className="col-md-12">
            <div className="login-form">
              <div className="login-form-inner">
                <div className="login-form-content">
                  <div className="login-form-header text-center mb-3">
                    <h3 className='trc-text-3xl trc-font-bolder'>Admin Login</h3>
                    <p>Enter your email address and password to login</p>
                  </div>
                  <form autoComplete='off' onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input autoComplete='off' disabled={busy} type="email" {...register("email")} className="form-control" id="email" placeholder="Enter your email address" />
                      {errors.email && <p role="alert">{errors.email.message}</p>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input autoComplete='off' disabled={busy} type="password" {...register("password", { minLength: 4 })} className="form-control" id="password" placeholder="Enter your password" />
                      {errors.password && <p role="alert">{errors.password.message}</p>}
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <input className="form-check-input" {...register("remember")} type="checkbox" id="remember" />
                        <label className="form-check-label" htmlFor="remember">Remember me</label>
                      </div>
                    </div>
                    <div className="form-group">
                      <button disabled={busy} type="submit" className="btn btn-primary btn-block">Login</button>
                    </div>
                  </form>
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
