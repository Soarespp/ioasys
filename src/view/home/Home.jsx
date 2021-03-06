import React, { useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionAuth from '../../store/actions/auth/actionAuth';
import './Home.css';

import axios from "axios";

import imgLogin from '../../img/ioasys.png';
import books from '../../img/books.png';
import CardBook from '../../component/cardBook/CardBook';
import Detail from '../../container/detail/Detail';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import { ButtonImg } from './style';
import imgNext from '../../img/next.png'
import back from '../../img/back.png'
import logout from '../../img/logout.png'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 50,
    p: 4,
};

const Home = (props) => {
    const { library, auth } = props;
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    async function setNextPage(page, type) {
        setLoading(true);
        if (type === 'N') {
            page++;
        } else {
            page--;
        }
        await GetData(page);
    }

    async function GetData(page) {
        let apiUrlGet = `https://books.ioasys.com.br/api/v1/books?page= ${page}&amount=20`
        try {
            axios.get(apiUrlGet, {
                headers: {
                    "Authorization": `Bearer ${auth.token}`,
                }
            })
                .then(
                    respget => {
                        props.setDadosLibrary(respget.data);
                        setLoading(false);
                    }
                );
        } catch (err) {
            console.log('error get', err)
        };
    }

    return (
        <div className='Home'>
            <div className='header'>
                <div className='logo'>
                    <img src={imgLogin} className="imgLogin" alt="imgLogin" />
                    <img src={books} className="imgLogin-books" alt="books" />
                </div>
                <div className='menu'>
                    <div style={{ width: '95%' }}>
                        <span className="welcome">Bem vindo,</span>
                        {(auth.user) ? <span>{auth.user}</span> : null}
                    </div>
                    <ButtonImg width='30px' height='30px' src={logout} onClick={() => props.logout()} />
                </div>
            </div>
            {((library.data) || (loading)) ?
                <div className='container'>
                    <div className='lista'>
                        {library.data
                            .map(book => (
                                <CardBook book={book} click={handleOpen} />
                            ))
                        }
                    </div>
                    <div className='button'>
                        {`Pagina ${library.page} de ${library.totalPages}`}
                        <ButtonImg width='12px' height='20px' src={back} onClick={() => setNextPage(library.page, 'P')} disabled={library.page <= 1} data-testid='home-button-next' />
                        <ButtonImg width='12px' height='20px' src={imgNext} onClick={() => setNextPage(library.page, 'N')} disabled={library.page === library.totalPages} data-testid='home-button-back' />
                    </div>
                </div>
                :
                <div>Loading...</div>}
            <div className='modal'>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-description"
                >
                    <Box sx={style}>
                        <Detail />
                    </Box>
                </Modal>
            </div>
        </div >
    )
}

const mapStateToProps = state => (
    {
        auth: state.auth,
        library: state.auth.library
    })

const mapDispatchToProp = (dispatch) => bindActionCreators(actionAuth, dispatch)

export default connect(mapStateToProps, mapDispatchToProp)(Home);
