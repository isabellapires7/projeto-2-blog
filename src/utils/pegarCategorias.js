import React from 'react'

const pegarCategorias = salvarState => {

    //Mock
    const __listaCategorias = [
        {
            'id': 1,
            'descricao': 'Turismo'
        },
        {
            'id': 2,
            'descricao': 'Gastronomia'
        },
        {
            'id': 3,
            'descricao': 'Cultura'
        },
        {
            'id': 4,
            'descricao': 'Transporte'
        }
    ];

    __listaCategorias.sort( (a,b ) => {
        return ( a.descricao > b.descricao ) ? 1 : -1;
    } );

    salvarState(__listaCategorias);
};

export default pegarCategorias;