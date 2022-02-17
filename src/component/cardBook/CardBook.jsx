import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as libraryActions from '../../store/actions/auth/actionAuth'
import './CardBook.css';

const CardBook = (props) => {
    const { book, click, setDetail } = props;

    const testeFun = () => {
        setDetail(book);
    }

    return (
        <div onClick={testeFun} >
            <div className='CardBook' onClick={click}>
                < img src={book.imageUrl} className="imgLogin" alt="books" />
                <div className='title'>
                    <b style={{ fontSize: '14px', fontStyle: '' }}>{book.title}</b>
                    <p style={{ color: '#AB2680' }}>{book.authors[0]}</p>
                </div>
                <div className='body'>
                    <p style={{ color: '#999999' }}>{book.pageCount} paginas
                        Editora {book.publisher}
                        Publicado em {book.published}</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => (
    {
        auth: state.auth
    })

const mapDispatchToProp = (dispatch) => bindActionCreators(libraryActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProp)(CardBook);