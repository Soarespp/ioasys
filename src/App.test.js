import React, { render } from "@testing-library/react";
import App from "./App";
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import MatchMediaMock from 'jest-matchmedia-mock';

describe("<App />", () => {
  let props;
  let matchMedia;

  beforeEach(() => {
    props = {
      library: {},
      auth: {},
      bookInfo: {}
    }

  })

  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  const mockStore = configureMockStore([thunk])

  const store = mockStore({
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
    }
  });

  const mediaQuery = '(prefers-color-scheme: light)';

  test('render component', () => {
    expect(render(<Provider store={store}><App {...props} /></Provider>));
  })
});
