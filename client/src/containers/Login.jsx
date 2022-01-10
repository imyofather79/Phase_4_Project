import React, {useState} from 'react'
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
// import {useNavigate} from "react-router-dom"
import { Button } from "../styles";


function Login({ onLogin }) {
    
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
            <h1>Login</h1>
            {showLogin ? (
                <>
                    <LoginForm onLogin={onLogin} />
                    <p>
                        Don't have an account? &nbsp;
                        <Button onClick={() => setShowLogin(false)}>
                            Sign Up
                        </Button>
                    </p>
                </>

            ) : (
                <>
                    <SignUpForm onLogin={onLogin} />
                    <p>
                        Already have an account? &nbsp;
                        <Button onclick={() => setShowLogin(true)}>
                            Log In
                        </Button>
                    </p>
                </>
            )}
        </div>
    )
}


export default Login;