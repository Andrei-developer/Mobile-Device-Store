import { useState } from "react";
import "./Css/LoginSignup.css";
import { Link } from "react-router-dom";

export default function LoginSignup(){
    const [login, setLogin] = useState(true);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const comparate = () => {
        if(password === confirmPassword){
            return true;
        }else {
            return alert("Parolele nu sunt identice!");
        }
    };
    if(login === true){
        return(
            <div className="login-signup-container">
                <div className="back">
                    <Link to="/" className="back-link"><i class="fa-solid fa-chevron-left"></i> Inapoi</Link>
                </div>
                <div className="login">
                    <h1>LOGIN</h1>
                    <form action="">
                            <input type="text" placeholder="username..."/>
                            <input type="password" placeholder="password..."/>
                            <button type="submit">Login</button>
                    </form>
                </div>
                <div className="signup">
                    <p>Nu ai cont?<span onClick={() => setLogin(false)}> Sign up</span></p>
                </div>
            </div>
        )
    } else {
        return(
            <div className="login-signup-container">
                <div className="back">
                    <Link to="/" className="back-link"><i class="fa-solid fa-chevron-left"></i> Inapoi</Link>
                </div>
                <div className="login">
                    <h1>LOGIN</h1>
                    <form action="">
                            <input type="text" placeholder="username..."/>
                            <input type="email" placeholder="email..."/>
                            <input type="password" placeholder="password..." value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <input type="password" placeholder="confirm password..." value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                            <button type="submit" onClick={() => {
                                if(comparate() === true){
                                    return(true);
                                }else{
                                    event.preventDefault();
                                }
                            }}>Sign up</button>
                    </form>
                </div>
                <div className="signup">
                    <p>Ai cont?<span onClick={() => setLogin(true)}> Login</span></p>
                </div>
            </div>
        )
    }
}