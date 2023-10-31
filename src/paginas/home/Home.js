/* eslint no-eval: 0 */
/* eslint-disable no-useless-escape */

import React, { useState } from "react";
import Header from "../../componentes/Header";
import Display from "../../componentes/Display";
import Base from "../../componentes/Base";

const Home = () => {

    const [visor, setVisor] = useState('');

    const mostrarVisor = (valor) => {
        
        // Variáveis
        let campo = visor;
        let numero = '';
        let operador = '';
        let parenteses = '';

        // Regex Operadores
        const regexOperador = new RegExp(/[\.\%\+\-\*\/]$/); // Função Regex para filtrar Operador
        const ultimoOperador = regexOperador.test(valor);
        const valorDoOperador = regexOperador.test(campo);

        // Regex Parênteses
        const regexParenteses = new RegExp(/[\(\)]$/); // Função Regex para filtrar Operador
        const ultimoParenteses = regexParenteses.test(valor);
        const valorDoParenteses = regexParenteses.test(campo);

        // Valores Selecionados
        if(valor==='0'||valor==='1'||valor==='2'||valor==='3'||valor==='4'||
        valor==='5'||valor==='6'||valor==='7'||valor==='8'||valor==='9') {
            numero = valor;
            campo+=numero;
            if(campo[campo.length - 2] === '%') {
                campo=campo.replaceAll('%','%x');
            }
        }
        else if(valor==='+'||valor==='-'||valor==='*'||valor==='/'||valor==='%'||valor==='.') {            
            if (!ultimoOperador || !valorDoOperador) { // Não repete o valor
                if (valor) {                  
                    operador=valor;
                }              
                campo+=operador;
            }
        }
        else if(valor==='('||valor===')') {            
            if (!ultimoParenteses || !valorDoParenteses) { // Não repete o valor
                if (valor) {
                  parenteses=valor;
                }
                campo+=parenteses;
            }
        }    

        // Iniciar com Operador
        if(operador === campo[0] || ')' === campo[0]) {
            campo = ''; // Se iniciar com operador retorna vazio
        }

        // Número e Abre Parênteses
        let indexUmA = campo.lastIndexOf("1(");
        let indexDoisA = campo.lastIndexOf("2(");
        let indexTresA = campo.lastIndexOf("3(");
        let indexQuatroA = campo.lastIndexOf("4(");
        let indexCincoA = campo.lastIndexOf("5(");
        let indexSeisA = campo.lastIndexOf("6(");
        let indexSeteA = campo.lastIndexOf("7(");
        let indexOitoA = campo.lastIndexOf("8(");
        let indexNoveA = campo.lastIndexOf("9(");
        let indexZeroA = campo.lastIndexOf("0(");

        if(indexUmA >= -1) {
            campo = campo.replace("1(",'1');
        }
        if(indexDoisA >= -1) {
            campo = campo.replace("2(",'2');
        }
        if(indexTresA >= -1) {
            campo = campo.replace("3(",'3');
        }
        if(indexQuatroA >= -1) {
            campo = campo.replace("4(",'4');
        }
        if(indexCincoA >= -1) {
            campo = campo.replace("5(",'5');
        }
        if(indexSeisA >= -1) {
            campo = campo.replace("6(",'6');
        }
        if(indexSeteA >= -1) {
            campo = campo.replace("7(",'7');
        }
        if(indexOitoA >= -1) {
            campo = campo.replace("8(",'8');
        }
        if(indexNoveA >= -1) {
            campo = campo.replace("9(",'9');
        }
        if(indexZeroA >= -1) {
            campo = campo.replace("0(",'0');
        }

        // Fecha Parênteses e Número
        let indexUmF = campo.lastIndexOf(")1");
        let indexDoisF = campo.lastIndexOf(")2");
        let indexTresF = campo.lastIndexOf(")3");
        let indexQuatroF = campo.lastIndexOf(")4");
        let indexCincoF = campo.lastIndexOf(")5");
        let indexSeisF = campo.lastIndexOf(")6");
        let indexSeteF = campo.lastIndexOf(")7");
        let indexOitoF = campo.lastIndexOf(")8");
        let indexNoveF = campo.lastIndexOf(")9");
        let indexZeroF = campo.lastIndexOf(")0");

        if(indexUmF >= -1) {
            campo = campo.replace(")1",')');
        }
        if(indexDoisF >= -1) {
            campo = campo.replace(")2",')');
        }
        if(indexTresF >= -1) {
            campo = campo.replace(")3",')');
        }
        if(indexQuatroF >= -1) {
            campo = campo.replace(")4",')');
        }
        if(indexCincoF >= -1) {
            campo = campo.replace(")5",')');
        }
        if(indexSeisF >= -1) {
            campo = campo.replace(")6",')');
        }
        if(indexSeteF >= -1) {
            campo = campo.replace(")7",')');
        }
        if(indexOitoF >= -1) {
            campo = campo.replace(")8",')');
        }
        if(indexNoveF >= -1) {
            campo = campo.replace(")9",')');
        }
        if(indexZeroF >= -1) {
            campo = campo.replace(")0",')');
        }

        // Ponto e Abre Parênteses
        let indexPonto1 = campo.lastIndexOf(".(");       

        if(indexPonto1 >= -1) {
            campo = campo.replace(".(",'.');
        }
        
        // Fecha Parênteses e Ponto
        let indexPonto2 = campo.lastIndexOf(").");

        if(indexPonto2 >= -1) {
            campo = campo.replace(").",')');
        }

        // Ponto e Fecha Parênteses
        let indexPonto3 = campo.lastIndexOf(".)");

        if(indexPonto3 >= -1) {
            campo = campo.replace(".)",')');
        }

        // Abre Parênteses e Ponto
        let indexPonto4 = campo.lastIndexOf("(.");

        if(indexPonto4 >= -1) {
            campo = campo.replace("(.",'(');
        }

        // Operador e Fecha Parênteses
        let indexMa = campo.lastIndexOf("+)");
        let indexMe = campo.lastIndexOf("-)");
        let indexX = campo.lastIndexOf("x)");
        let indexD = campo.lastIndexOf("÷)");
        let indexP = campo.lastIndexOf("%)");

        if(indexMa > -1) {
            campo = campo.replace("+)",")");
        }
        if(indexMe > -1) {
            campo = campo.replace("-)",")");
        }
        if(indexX > -1) {
            campo = campo.replace("x)",")");
        }
        if(indexD > -1) {
            campo = campo.replace("÷)",")");
        }
        if(indexP > -1) {
            campo = campo.replace("%)",")");
        }

        // Total de Dígitos
        if(campo.length >= 17) {
            return campo;
        }

        // Replace Sinais
        let converterSinais = campo.replaceAll('*', 'x').replaceAll('/', '÷');
     
        // Exibe no Visor
        setVisor(converterSinais);
    }
     
    // Calcular
    const calcularFormula = () => {

        let total = 0; // Inicia total            

        try{
            // Calcular fórmula
            total = eval(visor.replaceAll('%','/100').replaceAll('x', '*').replaceAll('÷', '/'));
                
            if(!total || total === 0) {
                limpar(); // Caso não houver um total
            }
            else {
                if(total % 1 === 0) { 
                    setVisor(total); // Número inteiro 
                }
                else {
                    setVisor(total.toFixed(2)); // Número não inteiro
                }
            }                
        } catch(e) {
            alert('\nAtenção!\nFórmula Incorreta!'); // Mensagem de erro
            return limpar(); // Limpar
        }
    }

    // Limpar
    const limpar = () => { // Limpar Visor        
        setVisor(''); // Visor vazio
    }

    // Apagar
    const apagarDigitos = () => { // Apagar dígitos        
        let valor = visor.substring(0,visor.length - 1); // Remove a partir do último dígito        
        setVisor(valor); // Exibe no visor
    }     

    return (
        <>
            <Header />

            <Display  value={ visor ? visor : 0 } />
            
            <Base
                // Números
                onClickZero={() => mostrarVisor('0')}
                onClickUm={() => mostrarVisor('1')}
                onClickDois={() => mostrarVisor('2')}
                onClickTres={() => mostrarVisor('3')}
                onClickQuatro={() => mostrarVisor('4')}
                onClickCinco={() => mostrarVisor('5')}
                onClickSeis={() => mostrarVisor('6')}
                onClickSete={() => mostrarVisor('7')}
                onClickOito={() => mostrarVisor('8')}
                onClickNove={() => mostrarVisor('9')}                
                onClickPonto={() => mostrarVisor('.')}
                // Igual
                onClickIgual={() => calcularFormula()}
                // Operações
                onClickSoma={() => mostrarVisor('+')}
                onClickSubtracao={() => mostrarVisor('-')}
                onClickDivisao={() => mostrarVisor('/')}
                onClickMultiplicacao={() => mostrarVisor('*')}
                // Porcentagem
                onClickPorcentagem={() => mostrarVisor('%')}
                // Parênteses
                onClickAbrirParenteses={() => mostrarVisor('(')}
                onClickFecharParenteses={() => mostrarVisor(')')}
                // Limpar e Apagar
                onClickLimpar={() => limpar()} 
                onClickApagar={() => apagarDigitos()}           
            />
        </>
    )
}

export default Home;
