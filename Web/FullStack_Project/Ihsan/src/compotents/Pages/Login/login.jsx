import './Login.css';

import { useState } from 'react';
import { Link } from "react-router-dom";
import {useCookies} from "react-cookie";

import Logo from "../Home/Main/img/logo1.png";
import UserProfile from "../UserProfile/UserProfile";
import { useTranslation} from "react-i18next";

import Axios from "axios";

const Login = () => {
    const [cookies, _] = useCookies(["access_token"])

    // const removeCookies = () => {
    //     setCookies("access_token", "")
    //     window.localStorage.removeItem("userID")
    // }

  return (
        <> 
            {
                !cookies.access_token
                ? <LoginForm />
                :<UserProfile />
            }
        </>
)};

export default Login;


// LOGIN FORM
const LoginForm = () => {
    const [t] = useTranslation();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(""); // State to hold the error message


    const [_, setCookies] = useCookies(["access_token"])

    const onSubmit = async (e) => {
        // don`t reload the Page
        e.preventDefault();
        try {
        const response = 
            await Axios.post("http://localhost:3001/loginUser", {username, password });
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("userID", response.data.userID);
        window.localStorage.setItem("username", response.data.username);
        window.localStorage.setItem("email", response.data.email);
        window.location.reload(false);
        // console.log(response);
    } catch (error) {
        if (error.response && error.response.status === 401) {
            // alert("Benutzername oder Passwort ist nicht korrekt.");
            setError("Benutzername oder Passwort ist nicht korrekt");
        }
    }
};
        return (
    <div className="login_container text-center " >
        <h4>{t("Login")} </h4>
        <img src={Logo} alt="" />
        <form className="px-4 py-3" onSubmit={onSubmit}>
            {/* Display error message */}
            {error && <div className="alert alert-danger">{error}</div>} 
            <div className="mb-3">
                <input 
                onChange={e => setUsername(e.target.value)} value={username} onSubmit={onSubmit}
                type="text" className="form-control " id="exampleDropdownFormEmail1" placeholder="Username" />
            </div>
            <div className="mb-3">
                <input 
                onChange={e => setPassword(e.target.value)} value={password} onSubmit={onSubmit}
                type="password" className="form-control " id="exampleDropdownFormPassword1" placeholder="Password" />
                <Link className="dropdown-item mt-3 me-5 text-danger forgetPassword" href="#">{t("ForgetPassword")}</Link>
            </div>
            <div className="mb-3">
                <div className="form-check">
                    <label className="form-check-label" htmlFor="dropdownCheck">
                    <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                        {t("RememberMe")}
                    </label>
                </div>
            </div>
            <button type="submit" className="btn Button">{t("Login")}</button>
        </form>
        <div className="dropdown-divider"></div>
        <Link className="dropdown-item text-danger dontHaveAcount" to="/Registration"> {t("DontHaveAcount")} </Link>
    </div>
)};

