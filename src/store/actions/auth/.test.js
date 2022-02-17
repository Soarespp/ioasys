import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { AUTH_LOGIN, AUTH_LOGOUT, SET_BOOKS, SET_DETAIL } from '../../actionsType';

// Actions
import * as actions from "./actionAuth";

const mockStore = configureMockStore([thunk]);

describe("Actions test", () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            auth: {
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
            },
        });
    });

    test("Action loginUser", () => {
        const user = {};

        const action = actions.loginUser(user);

        expect(action).toEqual({
            type: AUTH_LOGIN,
            payload: user,
        });
    });

    test("Action logout", () => {
        const user = {};

        const action = actions.logout(user);

        expect(action).toEqual({
            type: AUTH_LOGOUT,
            payload: user,
        });
    });

    test("Action setDadosLibrary", () => {
        const user = {};

        const action = actions.setDadosLibrary(user);

        expect(action).toEqual({
            type: SET_BOOKS,
            payload: user,
        });
    });

    test("Action setDetail", () => {
        const user = {};

        const action = actions.setDetail(user);

        expect(action).toEqual({
            type: SET_DETAIL,
            payload: user,
        });
    });


});
