import React, { useState} from "react";


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email);
}

    return (
        
        <div className="auth-form-container">
           <div className="form-group logogroup"
          style={{display:"inline-block",fontweight:"bold"}}>
            <span className="logo">SuaLogo</span>
            <span style={{color:"gold",fontsize:"70px",width:"70px" }}>#</span>
            </div>
       <form  className="login-form" onsubmit={handlesubmit}>
       
        <input value={email} type="email" placeholder="Username" id="email" name="email" />
        
        
        
        
        <input  value={pass} type="password" placeholder="Password" id="password" name="password" />
        
       <button className="link-btn" onclick={() =>props.onFormSwitch('register')}>ENTER</button>
       </form>
       </div>
       
    )
}