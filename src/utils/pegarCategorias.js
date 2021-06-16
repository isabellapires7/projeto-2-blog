import React from 'react'

const pegarCategorias = salvarState => {

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
        }
    ];
    salvarState(__listaCategorias);
};

export default pegarCategorias;