const pegarPosts = async (salvarState) => {

    // Mock
    const _listaPosts = [
        {
            'id': 1,
            'idCategoria': 2,
            'descricao': 'Post 1'
        },
        {
            'id': 2,
            'idCategoria': 1,
            'descricao': 'Post 2'
        },
        {
            'id': 3,
            'idCategoria': 3,
            'descricao': 'Post 3'
        },
        {
            'id': 4,
            'idCategoria': 4,
            'descricao': 'Post 4'
        },
        {
            'id': 5,
            'idCategoria': 2,
            'descricao': 'Post 5'
        }
    ];

    salvarState(_listaPosts);
};

export default pegarPosts;