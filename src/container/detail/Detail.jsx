import React, { useEffect, useState } from 'react';
import './Detail.css';
import { connect } from "react-redux";

const Detail = (props) => {
    const { bookInfo } = props;
    const [bookInterno, setBookInterno] = useState({
        id: "123456789",
        title: "teste book interno",
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
    });

    useEffect(() => {
        if (bookInterno.id !== bookInfo.id) {
            setBookInterno(bookInfo);
        }
    }, [])

    return (
        <div className='Detail' >
            {
                (bookInterno) ?
                    <div className='container'>
                        <img src="https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg" className="imgLogin" alt="books" />
                        <div className='modal-description'>
                            <div className='header'>
                                <div className='title'><b>{bookInterno.title}</b></div>
                                <div className='escritor'>{bookInterno.authors[0]}</div>
                            </div>
                            <div style={{ width: '80%', margin: 'auto' }}>Informações</div>
                            <div className='body'>
                                <div className='info-left'>
                                    <div>Páginas </div>
                                    <div>Editora </div>
                                    <div>Publicação </div>
                                    <div>Idioma </div>
                                    <div>Titulo Original </div>
                                    <div>ISBN-10 </div>
                                    <div>ISBN-13 </div>
                                </div>
                                <div className='info-rigth'>
                                    <div>{bookInterno.pageCount}</div>
                                    <div>{bookInterno.publisher}</div>
                                    <div>{bookInterno.published}</div>
                                    <div>{bookInterno.language}</div>
                                    <div>{bookInterno.title}</div>
                                    <div>{bookInterno.isbn10}</div>
                                    <div>{bookInterno.isbn13}</div>
                                </div>
                                <div className='description'>
                                    <div className='info-left'>REDESENHA DA EDITORA</div>
                                    <div className='info-rigth'>{bookInterno.description}</div>
                                </div>
                            </div>
                        </div>
                    </div> : null}
        </div>
    )
}

const mapStateToProps = state => (
    {
        bookInfo: state.auth.bookInfo
    })

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);