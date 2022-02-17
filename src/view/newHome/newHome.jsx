import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { logout, setDetail } from '../../store/actions/auth/actionAuth';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import imgLogin from '../../img/ioasys.png';
import books from '../../img/books.png';
import Detail from '../../container/detail/Detail';
import CardBook from '../../component/cardBook/CardBook';

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

const NewHome = (props) => {
    const { library, auth, bookInfo } = props;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className='login'>
            <div>
                <h1>teste NewHome</h1>
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
                    {(library.data) ?
                        <div className='container'>
                            <div className='lista'>
                                {library.data
                                    .map(book => (
                                        <CardBook book={book} click={handleOpen} />
                                        // <div>teste</div>
                                    ))
                                }
                            </div>
                            <div className='button'>
                                Pagina 1 de 100
                                <button>A</button>
                                <button>B</button>
                            </div>

                        </div>
                        :
                        <div> Loading...</div>}
                </div>
            </div>
            <div className='modal'>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-description"
                >
                    <Box sx={style}>
                        <Detail book={bookInfo} />
                    </Box>
                </Modal>
            </div>
        </div>
    )
}
const mapStateToProps = state => (
    {
        auth: state.auth,
        library: state.auth.library
    })

function mapDispatchToProps(dispatch) {
    return {
        setDetail(book) {
            //action creator -> action
            const action = setDetail(book)
            dispatch(action)
        },
        logout() {
            //action creator -> action
            const action = logout()
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewHome)