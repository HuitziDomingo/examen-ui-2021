import React from 'react'
import './Cards.scss'
import img from '../../assets/img/jpg/canada.jpg'


const Cards = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4 fd-casa">
                                <img className="title-harry img-fluid rounded-circle" src={img} alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className="d-flex bd-highlight mb-3">
                                        <p className="card-text me-auto bd-highligh">Vivo/Estudiante</p>
                                        <h5 className="card-title bd-highlight">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                            </svg>
                                        </h5>
                                    </div>
                                    <h2>Harry Potter</h2>
                                    <p className="card-text">Cumpleaños: <small className="text-muted">31-0-1980</small></p>
                                    <p className="card-text">Genero: <small className="text-muted">Male</small></p>
                                    <p className="card-text">Color de ojos: <small className="text-muted">Green</small></p>
                                    <p className="card-text">Color de pelo: <small className="text-muted">Black</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4 fd-casa">
                                <img className="title-harry img-fluid rounded-circle" src={img} alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className="d-flex bd-highlight mb-3">
                                        <p className="card-text me-auto bd-highligh">Vivo/Estudiante</p>
                                        <h5 className="card-title bd-highlight">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                            </svg>
                                        </h5>
                                    </div>
                                    <h2>Harry Potter</h2>
                                    <p className="card-text">Cumpleaños: <small className="text-muted">31-0-1980</small></p>
                                    <p className="card-text">Genero: <small className="text-muted">Male</small></p>
                                    <p className="card-text">Color de ojos: <small className="text-muted">Green</small></p>
                                    <p className="card-text">Color de pelo: <small className="text-muted">Black</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
