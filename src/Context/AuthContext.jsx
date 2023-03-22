import React, { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { register } from "../services/authService";

const Context = createContext();

function AuthProvider({ children }) {

  const navigate = useNavigate();

  const [authenticated, setAuthenticated] = useState(localStorage.getItem('auth') || '');
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const [messagem, setMessagem] = useState('');
  const [user, setUser] = useState({ name: '', email: '', password: '', passwordconf: '', });


  //Check if the user is already authenticated
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    const storedToken = localStorage.getItem("token");
    if (auth && storedToken) {
      setAuthenticated(true);
      setToken(storedToken);
    }
  }, []);


  //method login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(user,token);
      if (response.token) {
        localStorage.setItem("auth", true);
        localStorage.setItem("token", response.token);
        setAuthenticated(true);
        setToken(response.token);
        navigate("/painel");
      } else {
        setAuthenticated(false);
        navigate("/");
      }
      setMessagem(response.message);
    } catch (error) {
      setMessagem("Ocorreu um erro ao fazer login!");
    }
  };

  //register user
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await register(user);
      setMessagem(response);
    } catch (error) {
      setMessagem("Ocorreu um erro ao registrar!" + error.message);
    }
  };


  //method to logout user
  function handleLoggout() {
    setAuthenticated(false);
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
    setToken("");
    setUser({});
    navigate("/");
  }

  return (
    <Context.Provider value={{ authenticated, token, handleRegister, handleLogin, setUser, user, messagem, handleLoggout, }}>
      {children}
    </Context.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Context, AuthProvider };
