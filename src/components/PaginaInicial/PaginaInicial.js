import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './PaginaInicial.css';
import Cabecalho from '../Cabecalho/Cabecalho';
import ConteudoCentral from '../ConteudoCentral/ConteudoCentral';
import BarraLateral from '../BarraLateral/BarraLateral';
import Rodape from '../Rodape/Rodape';
import TemaContext from '../../contexts/TemaContext';

const PaginaInicial = () => {

    const [tema, setTema] = useState('branco');

    const modificarTema = temaSelecionado => {

        switch(temaSelecionado) {
            case 'rosa':
                const _tema1 = {
                    corFundoTema: 'rgb(226, 154, 166)'
                };
                setTema(_tema1);
            break;

            case 'roxo':
                const _tema2 = {
                    corFundoTema: 'rgb(172, 132, 172)'
                };
                setTema(_tema2);
            break;

            case 'azul':
                const _tema3 = {
                    corFundoTema: 'rgb(134, 164, 218)'
                };
                setTema(_tema3);
            break;

            case 'branco':
                const _tema4 = {
                    corFundoTema: 'white'
                };
                setTema(_tema4);
            break;

            default:
                const _tema5 = {
                    corFundoTema: 'white'
                };
                setTema(_tema5);
            break;
        }
    };

    return (
        <TemaContext.Provider value={ tema } >

            <BrowserRouter>
            
                <div id='box-pagina-inicial'>

                    <Cabecalho funcaoConfigurarTema= {modificarTema} />

                    <div id='container'>
                        <ConteudoCentral />
                        <BarraLateral />
                    </div>

                    <Rodape />

                </div>

            </BrowserRouter>

            </TemaContext.Provider>
    );
};

export default  PaginaInicial;