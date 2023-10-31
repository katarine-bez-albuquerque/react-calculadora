import React from "react";
import Botao from "./Botao";

const Base = (props) => {
    return(
        <section className="base">
            <aside className="numeros">
                <Botao classe="botao" onClick={ props.onClickLimpar } texto='AC'/>                
                <Botao classe="botao" onClick={ props.onClickPorcentagem } texto="%"/>
                <Botao classe="botao" onClick={ props.onClickAbrirParenteses } texto="("/>
                <Botao classe="botao" onClick={ props.onClickFecharParenteses } texto=")"/>
                <Botao classe="botao btn_apagar" onClick={ props.onClickApagar } texto="⌫"/>               
            </aside>
            <aside className="numeros">
                <Botao classe="botao" onClick={ props.onClickSoma } texto="+"/> 
                <Botao classe="botao" onClick={ props.onClickSubtracao } texto="-"/>
                <Botao classe="botao" onClick={ props.onClickMultiplicacao } texto="x" /> 
                <Botao classe="botao" onClick={ props.onClickDivisao } texto="÷" />
            </aside>
            <aside className="numeros">
                <Botao classe="botao" onClick={ props.onClickUm } texto="1"/>
                <Botao classe="botao" onClick={ props.onClickDois } texto="2"/>
                <Botao classe="botao" onClick={ props.onClickTres } texto="3"/>
                <Botao classe="botao" onClick={ props.onClickQuatro } texto="4"/>
                <Botao classe="botao" onClick={ props.onClickCinco } texto="5"/>
                <Botao classe="botao" onClick={ props.onClickSeis } texto="6"/>
            </aside>
            <aside className="numeros">
                <Botao classe="botao" onClick={ props.onClickSete } texto="7"/>
                <Botao classe="botao" onClick={ props.onClickOito } texto="8"/>
                <Botao classe="botao" onClick={ props.onClickNove } texto="9"/>
                <Botao classe="botao" onClick={ props.onClickZero } texto="0"/>
                <Botao classe="botao" onClick={ props.onClickPonto } texto=","/>
                <Botao classe="botao" onClick={ props.onClickIgual } texto="="/>               
            </aside>
        </section>
    )
}

export default Base;
