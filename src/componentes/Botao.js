import React from "react";

const Botao = (props) => {
    return(
        <button className={ props.classe } onClick={ props.onClick } >
            { props.texto }           
        </button>
    )
}

export default Botao;
