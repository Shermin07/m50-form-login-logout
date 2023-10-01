/* eslint-disable no-unused-vars */

import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";


const Login = () => {

    const handleLoginForm = e =>{
        e.preventDefault() ;
        console.log('it works') ;
        const email = e.target.email.value 
        const password = e.target.password.value 
        console.log(email,password) ;

        createUserWithEmailAndPassword( auth, email, password)
        .then( result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error ( error)
        })
    }


    return (
        <div className="text-center text-3xl font-bold text-emerald-600">
            <h1>Please Login</h1>
            <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
  
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
       <form onSubmit={handleLoginForm}>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
       </form>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Login;