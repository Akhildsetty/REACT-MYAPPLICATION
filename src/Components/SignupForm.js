import axios from "axios";
import React, { useState } from "react";

const SignupForm = () => {
  const [info, newinfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const { username, email, password, confirmpassword } = info;
  const onchange = (e) => {
    newinfo({ ...info, [e.target.name]: e.target.value });
  };
  const onsubmit = (e) => {
    e.preventDefault();
   if(username.length<5){
     alert("username must have atleast 5 characters");
   }else if(password!==confirmpassword){
    alert("password is miss-matched");
   }else{
     console.log(info)
     axios.post("https://react-signin-form-default-rtdb.firebaseio.com/signinform.json",info).then(
     ()=>alert("Registration Completed")
   )
   }
   
  };

  return (
    <div className="App">
      <h2>Signup Form</h2>

      <form onSubmit={onsubmit}>
        <label>Username: </label>
        <input type="text" placeholder="Username" name="username" value={username} onChange={onchange}/>
        <br />
        <label>Email: </label>
        <input type="email" placeholder="email" name="email" value={email} onChange={onchange}/>
        <br />
        <label>Password: </label>
        <input type="password" placeholder="Password" name="password" value={password} 
        onChange={onchange}/>
        <br />
        <label>Confirm Password: </label>
        <input type="password" placeholder="re-enter password" name="confirmpassword" value={confirmpassword} onChange={onchange}/>
        <br />
        <input type="submit" name="submit" />
        {/* {password!==confirmpassword? <p>Password not matching</p>:null} */}
      </form>
    </div>
  );
};

export default SignupForm;
