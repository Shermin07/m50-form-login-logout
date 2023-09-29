import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import { useState } from "react";


const Registration = () => {
 const [registrationError, setRegistrationError] = useState('') ;
 const [registerSuccess, setRegisterSuccess] = useState('') ;

 

    const handleRegistrationForm = e =>{
        e.preventDefault();
       // console.log('form submitting')
        const email = e.target.email.value ;
        const password = e.target.password.value ;
        console.log(email, password) ;
        setRegistrationError('') ;
        setRegisterSuccess('') ;

        if(password < 6){
            setRegistrationError('Password should be at least 6 cheracters');
            return ;
        }

        

        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            console.log(result.user)
         setRegisterSuccess('User register successfully') ;
        })
        .catch(error =>{
            console.error(error);
            setRegistrationError(error.message) ;
        })
    }

    return (
        <div>
        <h1  className="text-center text-3xl font-bold text-teal-500">Please Registration</h1>

        <div className="text-center mt-7 max-auto max-h-screen-xl">
            <form onSubmit={handleRegistrationForm}>

                <input className="border-2 mb-2 px-20 py-2" type="text" name='name' placeholder="Your name" ></input><br></br>

                <input  className="border-2 px-20 mb-2 py-2"  type="email" name='email' placeholder="Your email" ></input><br></br>

                <input  className="border-2 px-20  py-2"  type="password" name='password' placeholder="Your password" ></input><br></br>

                <input value='register' type="submit" className="border-2 mt-5 bg-teal-800 text-white px-20  py-2" ></input>

             

            </form>
            {
                registrationError && <p className="text-red-500 text-xl">{registrationError}</p>
            }

            {
                registerSuccess && <p>{registerSuccess}</p>
            }
          
        </div>
    </div>
    );
};

export default Registration;