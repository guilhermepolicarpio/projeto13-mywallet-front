import ReactDOM from "react-dom";
import React from "react";
import { useState} from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";
import Credit from "./components/Credit";
import Debit from "./components/Debit";
import Token from "./context/token";

const rootHtml= document.querySelector(".root");

export default function Initial(){

const [token,setToken]= useState([]);

return(
<Token.Provider value ={{token,setToken}}>
    <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/Registration" element={<Registration />}/>
                <Route path="/Home" element={<Home />}/>
                <Route path="/Credit" element={<Credit />}/>
                <Route path="/Debit" element={<Debit />}/>
            </Routes>
        </BrowserRouter>
 </Token.Provider>
)}

ReactDOM.render(
    <React.StrictMode>
        <Initial />
    </React.StrictMode>, rootHtml);
