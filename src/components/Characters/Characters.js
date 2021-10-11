// import { useEffect, useContext } from 'react'
// //Context
// import characterReducer from '../context/CharacterReducer'
import { Favorites } from '../Favorites'
import { Cards } from '../Cards';
import "./Character.scss"
import harryTitle from '../../assets/img/png/harry.png'


//AntDesign
import { Col, Row, Layout } from 'antd';


const { Content } = Layout;
const Characters = () => {

    // const { getCharacters, characters } = useContext(characterReducer)

    // useEffect(() => {
    //     getCharacters()
    // }, [])

    return (
        <div className="fondo">
            <Layout>
                <Content className="fd-black">
                    {/* Componenetes de los botones flotantes */}
                    <Favorites />
                    <div className="site-card-wrapper">
                        <div className="cont-header">
                            {/* Contenedor de Titulo */}
                            <div className="cont-title-img">
                                <img className="title-harry" src={harryTitle} alt="" />
                            </div>
                            <h2 className="title-filtros">Selecciona tu filtro</h2>
                            <div className="btn-flex">
                                <button className="btn-filter">ESTUDIANTES</button>
                                <button className="btn-filter">SAFF</button>
                            </div>
                        </div>
                        {/* Cards y Sistema de rejillas */}
                        <Cards />
                    </div>
                </Content>
            </Layout>
        </div>
    )
}

export default Characters
