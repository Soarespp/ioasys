import authReducer from "./AuthReducer";
import { AUTH_LOGIN, AUTH_LOGOUT, SET_BOOKS, SET_DETAIL } from '../../actionsType';

describe("reducerCountry", () => {
    const state = {
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
    };

    test("return default value store", () => {
        expect(authReducer(undefined, {})).toEqual(state);
    });

    test("return when AUTH_LOGOUT", () => {
        const action = { type: AUTH_LOGOUT, payload: { name: 'teste' } };
        expect(authReducer(undefined, action)).toEqual(state);
    });

    test("return when SET_BOOKS", () => {
        const action = { type: SET_BOOKS, payload: { name: 'teste' } };

        expect(authReducer(undefined, action)).toEqual({
            ...state,
            library: { name: 'teste' },
        });
    });

    test("return when SET_DETAIL", () => {
        const action = { type: SET_DETAIL, payload: { name: 'teste' } };

        expect(authReducer(undefined, action)).toEqual({
            ...state,
            bookInfo: { name: 'teste' },
        });
    });

});
