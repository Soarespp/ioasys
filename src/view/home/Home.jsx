import React, { useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionAuth from '../../store/actions/auth/actionAuth';
import './Home.css';

import { getOtherPage } from '../../service/api';
import axios from "axios";

import imgLogin from '../../img/ioasys.png';
import books from '../../img/books.png';
import CardBook from '../../component/cardBook/CardBook';
import Detail from '../../container/detail/Detail';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 50,
    p: 4,
};

const Home = (props) => {
    const { library, auth, bookInfo } = props;
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
        console.log('page', page)
        // props.setDadosLibrary(await getOtherPage(auth.token, page))
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
                        console.log("Response do GET: ", respget.data);
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
                    <span className="welcome">Bem vindo,</span>
                    {(auth.user) ? <span>{auth.user}</span> : null}
                    <button onClick={() => props.logout()}>Sair</button>
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
                        <button onClick={() => setNextPage(library.page, 'P')} disabled={library.page <= 1}>Prev</button>
                        <button onClick={() => setNextPage(library.page, 'N')} disabled={library.page === library.totalPages}>Next</button>
                    </div>

                </div>
                :
                <div> Loading...</div>}
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