import { AUTH_LOGIN, AUTH_LOGOUT, SET_BOOKS, SET_DETAIL } from '../../actionsType';

const INITIAL_STATE = {
    user: '',
    validToken: false,
    token: '',
    book: {},
    profileObj: {},
    bookInfo: {
        id: "8f41b92c7460b9337660405e",
        title: "A Culpa é das Estrelas 5",
        description: "Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ",
        authors: [
            "Jonh Green"
        ],
        pageCount: 288,
        category: "Romance",
        imageUrl: "https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg",
        isbn10: "0062856626",
        isbn13: "978-0062856623",
        language: "Inglês",
        publisher: "Intrínseca",
        published: 2002
    },
    library: {}
}

const AuthReducer = (state = INITIAL_STATE, action) => {
    console.log('reducer 1', action.type);
    console.log('reducer 2', action.payload);
    switch (action.type) {
        case SET_BOOKS:
            console.log('SET_BOOKS', action.payload)
            return { ...state, library: action.payload }
        case AUTH_LOGIN:
            return { ...state, user: action.payload.data.name, token: action.payload.headers.authorization, validToken: true, profileObj: action.payload.data }
        case SET_DETAIL:
            return { ...state, bookInfo: action.payload }
        case AUTH_LOGOUT:
            return INITIAL_STATE
        default:
            return state
    }
}

export default AuthReducer;