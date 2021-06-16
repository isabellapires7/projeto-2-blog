import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './PaginaInicial.css';
import Cabecalho from '../Cabecalho/Cabecalho';
import ConteudoCentral from '../ConteudoCentral/ConteudoCentral';
import BarraLateral from '../BarraLateral/BarraLateral';
import Rodape from '../Rodape/Rodape';
import TemaContext from '../../contexts/TemaContext';
import { COR_PADRAO, COR_1, COR_2, COR_3 } from '../../utils/coresTema';

const PaginaInicial = () => {

    const [tema, setTema] = useState('branco');

    const modificarTema = temaSelecionado => {

        switch(temaSelecionado) {
            case 'COR_1':
                const _tema1 = {
                    corFundoTema: 'rgb(141, 243, 218)'
                };
                setTema(_tema1);
            break;

            case 'COR_2':
                const _tema2 = {
                    corFundoTema: 'rgb(250, 250, 157)'
                };
                setTema(_tema2);
            break;

            case 'COR_3':
                const _tema3 = {
                    corFundoTema: 'rgb(201, 194, 194'
                };
                setTema(_tema3);
            break;

            case 'COR_PADRAO':
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