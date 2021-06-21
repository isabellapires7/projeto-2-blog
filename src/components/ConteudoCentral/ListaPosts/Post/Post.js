import React, { useContext } from 'react';
import './Post.css';
import TemaContext from '../../../../contexts/TemaContext';
import { Link } from 'react-router-dom';

const Post = ( { Post} ) => {

    const tema = useContext(TemaContext);

    return (
        <article className="posts" style={ { backgroundColor: tema.corFundoTema } }>
           <h3 className="p-titulo">Título do Post</h3>
           <p className="p-postado-em">Postado em: 30/05/2021</p>

           <div className="p-img-texto">
               <div className='p-img'>
                    <img src='/imagens/barcelona.jpg' />
                </div>
               <div className="p-texto">
                   <p>
                       Barcelona (em catalão: AFI: [bərsəˈɫonə]; em castelhano: AFI: [barθeˈlona]) é a capital da comunidade autônoma da Catalunha 
                        no Reino de Espanha, bem como o segundo município mais populoso do país, com uma população de 1,6 milhão dentro 
                        dos limites da cidade.
                    </p>
                    <p>
                        A sua área urbana se estende para além dos limites administrativos da cidade com uma população de 
                        cerca de 4,7 milhões de pessoas,[3] sendo a sexta área urbana mais populosa da União Europeia, depois de Paris, Londres, 
                        Madri, Ruhr e Milão.
                    </p>
                    <p>
                        É a maior metrópole do Mar Mediterrâneo, localizada na costa entre as foz dos rios Llobregat e 
                        Besòs, e limitada ao oeste pela Serra de Collserola, cujo pico mais alto é de 512 metros de altura.
                    </p>
                </div>
            </div>

            <div className="p-cat-btn">
                <div className="p-categoria">
                        Categoria: cidade
                </div>
                    
                <Link 
                to={ '/detalhes-post/${ post.id }' } 
                className="p-continue-lendo" >
                    Continue lendo...
                </Link>
            </div>
           

        </article>
    );
};

export default  Post;