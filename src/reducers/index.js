
const initialState = {
    books: [
        {id: 1, 
        title: '1984',
        author: 'George Oruel'},
        {id: 2,
        title: 'Aggs',
        author: 'Ms Daniel'}
    ]
};

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'BOOKS_LOADED' :
            return {
                books: action.payload
            };
            
        default: 
            return state;
    }
};

export default reducer;