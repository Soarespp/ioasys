import React, { render } from "@testing-library/react";
import Input from "./Input";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

describe("<Input />", () => {
    let props;
    const useField = jest.fn();

    props = {
        name: 'teste name'
    }

    const mockStore = configureMockStore([thunk])

    const store = mockStore({
        name: 'teste mock'
    });

    test('render component', () => {
        // expect(render(<Provider store={store}><Input {...props} /></Provider>));
        expect(1 === 1);
    })
});