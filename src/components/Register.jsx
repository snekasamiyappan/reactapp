import React, {useState} from "react";
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name,setName] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form"onsubmit={handlesubmit}>
            <label htmlfor="name">Full name</label>
            <input value={name} name="name" id="name" placeholder="full Name" />
         <label htmlfor="email">email</label>
         <input value={email} type="email" placeholder="your" id="email" name="email" />
         <label htmlfor="password">Password</label>
         <input  value={pass} type="password" placeholder="222222" id="password" name="password" />
        <button className="link-btn" onclick={() =>props.onFormSwitch('login')}>ENTER</button>
        </form>
        </div>
    )
}