import React, { useRef } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as Yup from 'yup';
import * as actionAuth from '../../store/actions/auth/actionAuth';
import { Form } from '@unform/web';
import Input from '../../component/form/Input';
import imgLogin from '../../img/ioasys.png';
import books from '../../img/books.png';

import { Logo } from './style';

import './Login.css';
import axios from "axios";


const Login = (props) => {
    const formRef = useRef(null);

    async function LoginAcess(user, pass) {
        try {
            let webApiUrlPost = 'https://books.ioasys.com.br/api/v1/auth/sign-in';

            let resp = await axios.post(webApiUrlPost, {
                email: user,
                password: pass
            });
            return resp;
        } catch (error) {
            alert('E-mail e/ou senha incorretos!')
            console.log('error', error)
        }
    }

    async function GetData(token) {
        let webApiUrlGetTotal = 'https://books.ioasys.com.br/api/v1/books?page=1&amount=20';
        try {
            axios.get(webApiUrlGetTotal, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            })
                .then(
                    respget => {
                        props.setDadosLibrary(respget.data);
                    }
                );
        } catch (err) {
            console.log('error get', err)
        };
    }

    async function handleSubmit(data, { reset }) {
        try {
            const schema = Yup.object().shape({
                user: Yup.string().required('Nome usuario é obrigatorio.'),
                password: Yup.string().required('A senha é obrigatoria.'),
            });

            await schema.validate(data, {
                abortEarly: false,
            })

            const dadosLogin = await LoginAcess(data.user, data.password);
            if (dadosLogin.status === 200) {
                await GetData(dadosLogin.headers.authorization);
                props.loginUser(dadosLogin);
            }
            reset();
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessager = {};

                err.inner.forEach(error => {
                    errorMessager[error.path] = error.message;
                })

                formRef.current.setErrors(errorMessager);
            }
        }
    }

    return (
        <div className='login'>
            <Form className='container' onSubmit={handleSubmit} ref={formRef}>
                <div className='header'>
                    <Logo width='37%' height='70%' src={imgLogin} />
                    <Logo width='37%' height='59%' src={books} />
                </div>
                <div className='body'>
                    <Input className="inputUser" name="user" placeholder="Email" data-testid='login-input-user' />
                    <Input type="password" name="password" placeholder="senha" data-testid='login-input-pass' />
                    <button type="submit" data-testid='login-button-logar'>Login</button>
                </div>
            </Form>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
    };
}

const mapDispatchToProp = (dispatch) => bindActionCreators(actionAuth, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Login);