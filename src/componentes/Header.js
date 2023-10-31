import React from "react";
import Imagem from "./Imagem";

const Header = () => {
    return(
        <header className="header">
            <Imagem src={ require('../assets/imgs/logo.png') } alt="Logo"/>            
            <h2>Calculadora @2023</h2>
        </header>
    )
}

export default Header;
