import ReactDOM from "react-dom";
import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";
import Operation from "./components/Operation";

const rootHtml= document.querySelector(".root");

export default function Initial(){
return(
<>
<GlobalStyle />
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Registration" element={<Registration />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Operation" element={<Operation />}/>
    </Routes>
 </BrowserRouter>
</>
)
}

ReactDOM.render(
    <React.StrictMode>
        <Initial />
    </React.StrictMode>, rootHtml);
