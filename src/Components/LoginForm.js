import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
//import {useHistory} from "react-router-dom"

const Loginform = () => {
  const navigate=useNavigate()
  //const history=useHistory()
  const [user, setuser] = useState({
    username: "",
    password: "",
  });
  const { username, password } = user;
  const onchange = (e) => {
    setuser ({ ...user, [e.target.name]: e.target.value });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if(user.username.length<5){
      alert("Incorrect Username")
    }else if(user.password===null){
      alert('Incorrect password')
    }else{
     // history.push('/axiosfetch')
      navigate('/axiosfetch')
    }

  };
  return (
    <div className="App">
      <h2>Login Form</h2>
      <form onSubmit={onsubmit}>
        <label>Username: </label>
        <input
          type="text" placeholder="Username" name="username" value={username} onChange={onchange} />
        <br />
        <label>Password: </label>
        <input
          type="password" placeholder="Password" name="password"  value={password} onChange={onchange} />
        <br />
        <input type="submit" name="submit" />
      </form>
    </div>
  );
};

export default Loginform;
