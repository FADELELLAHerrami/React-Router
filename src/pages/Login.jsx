import React, { useState } from "react";
import { useLoaderData , useNavigate , Form } from "react-router-dom";
import { loginUser } from "./fetchUser";












export function loader({ request }) {
    return new URL(request.url).searchParams.get('message');
}

export default function Login() {
    // idle
    const [status,setStatus] = useState('idle');
    // error
    const [error,setError] = useState(null);
    // 
    const navigate = useNavigate();
    // 
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })

    function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        setError(null);
        loginUser(loginFormData)
            .then(data => navigate('/host'),{replace: true})
            .catch(err => setError(err))
            .finally(() => setStatus('idle'));
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    // message 
    const message = useLoaderData();
    console.log(message)  
    
    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            <Form onSubmit={handleSubmit} className="login-Form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button disabled={status === 'submitting'}>{status === 'submitting' ? "Loggining ... " : "Log in"}</button>
                {message && <p className="messageMustAppear">{ message }</p>}
                {error && <p className="messageMustAppear">{ error.message }</p>}
            </Form>
        </div>
    )

}