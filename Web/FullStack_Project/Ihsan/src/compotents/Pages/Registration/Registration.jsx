import {useState, useEffect } from 'react';
import './Registration.css';
import { Link, useNavigate   } from "react-router-dom";
import Logo from "../Home/Main/img/logo1.png";

import Axios from "axios";
import { useTranslation} from "react-i18next";

// Hashpass
// const bcrypt = require("bcrypt");


const initialErrors = {
    username: '',
    email: '',
    password: '',
    server: '',
  };
  
  const Registration = () => {
    const [t] = useTranslation();
    const [users, setUsers] = useState([]);
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ ...initialErrors }); // State to hold the error message
    const navigate = useNavigate();

    useEffect(() => {
      Axios.get("http://localhost:3001/users")
        .then((res) => {
          setUsers(res.data);
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    }, [users]);
  
    const createUser = async (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();
    
        // Reset previous errors
        setError({ ...initialErrors });
    
        try {
          // Check if the username is not empty
          if (!username) {
            setError({
              ...initialErrors,
              username: 'Bitte geben Sie einen Benutzernamen ein',
            });
            return;
          }
    
          // Check if the email is not empty and is a valid email format
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!email || !emailRegex.test(email)) {
            setError({
              ...initialErrors,
              email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
            });
            return;
          }
    
          // Password validation rules
          const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
          // Check if the password meets the requirements
          if (!passwordRegex.test(password)) {
            setError({
              ...initialErrors,
              password:
                'Passwort muss min 8 Zeichen\n' +
                'min 1 Kleinbuchstaben\n' +
                'min 1 Großbuchstaben\n' +
                'min 1 Zahl\n' +
                'min 1 Sonderzeichen',
            });
            return;
          }
        setError({ ...initialErrors });
        await Axios.post("http://localhost:3001/createUser", {
          username,
          email,
          password,
        });
        navigate('/Login');
        // Successful registration, you might want to handle this case
      } catch (error) {
        if (error.response && error.response.status === 400) {
          const errorData = error.response.data;
          if (errorData.errors) {
            // Check for specific error messages
            if (errorData.errors.username) {
              setError((prevErrors) => ({
                ...prevErrors,
                username: 'Benutzername ist bereits vergeben.',
              }));
            }
            if (errorData.errors.email) {
              setError((prevErrors) => ({
                ...prevErrors,
                email: 'E-Mail-Adresse ist bereits vergeben.',
              }));
            }
  
            if (errorData.errors.password) {
              // Customize this message based on your password rules
              setError((prevErrors) => ({
                ...prevErrors,
                password: 'Das Passwort erfüllt nicht die Anforderungen.',
              }));
            }
          } else {
            // Generic error message for other 400 errors
            setError((prevErrors) => ({
              ...prevErrors,
              server: 'Fehler bei der Registrierung.',
            }));
          }
        } else {
          // Generic error message for non-400 errors
          setError((prevErrors) => ({
            ...prevErrors,
            server: 'Fehler bei der Registrierung.',
          }));
        }
      }
    };

  return (
    <div className="register_container text-center" >
        <h4>{t("Registration")}</h4>
        <img src={Logo} alt="" />
        <form className="px-4 py-3">
            <div className="mb-3">
                <input 
                onChange={e=>setUserName(e.target.value)} value={username}
                type="text" className="form-control " id="exampleDropdownFormUsername1" placeholder="first and lastname" />
                 {/* Display username error */}
                {error.username && (
                    <div className="alert alert-danger">{error.username}</div>
                )}
            </div>
            <div className="mb-3">
                <input 
                onChange={e=>setEmail(e.target.value)} value={email}
                type="email" className="form-control " id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                {/* Display email error */}
                {error.email && (
                    <div className="alert alert-danger">{error.email}</div>
                )}
            </div>
            <div className="mb-3">
                <input 
                onChange={e=>setPassword(e.target.value)} value={password}
                type="password" className="form-control " id="exampleDropdownFormPassword1" placeholder="Password" />
                {/* Display password error */}
                {error.password && (
                    <div className="alert alert-danger">
                        {error.password.split('\n').map((line, index)=>
                            <div key={index}>{line}</div>
                        )}
                    </div>
                )}
            </div>
            {/* <div className="mb-3">
                <input type="password" className="form-control " id="exampleDropdownFormPassword1" placeholder="Password again" />
            </div> */}
            <div className="mb-3">
                <div className="form-check">
                    <label className="form-check-label" htmlFor="dropdownCheck">
                    <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                        {t("RememberMe")}
                    </label>
                </div>
            </div>
            <button 
            onClick={createUser}
            type="submit" className="btn Button">{t("Registration")} </button>
        </form>
        <div className="dropdown-divider"></div>
        <Link className="dropdown-item text-danger" to="/Login"> {t("YouHaveAcount")}</Link>
        
    </div>
  )
}

export default Registration;