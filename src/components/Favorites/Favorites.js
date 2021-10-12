import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { BookOutlined, UserAddOutlined } from '@ant-design/icons';
import { Affix, Button, Modal } from 'antd';
import { Form } from '../Form'
import img from '../../assets/img/jpg/canada.jpg'
import './Favorites.scss'

const { SubMenu } = Menu;

const Favorites = () => {

    const [modalVisible, setModalVisible] = useState(false);


    return (
        <>

            <Affix style={{ position: 'absolute', top: 0, left: 990 }} className="fixedbuttons">
                <Menu theme="dark" mode="inline">
                    <SubMenu key="sub1" icon={<BookOutlined />} title="FAVORITOS">
                        <Menu.Item key="1" className="row">
                            <img src={img} alt="" className="col-md-4 img-fluid" / >
                            <p className="col-md-4">Nombre del Personaje</p>
                            <UserAddOutlined className="col-md-4" />
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Affix>

            {/*BOTON Ventana Modal */}
            <Affix style={{ position: 'absolute', top: 0, left: 1142 }}>
                <Button type="primary" onClick={() => setModalVisible(true)}>
                    AGREGAR
                    <UserAddOutlined />
                </Button>
            </Affix>

            {/*Ventana Modal */}
            <Modal
                title="Agregar un personaje"
                centered
                visible={modalVisible}
                onOk={() => setModalVisible(false)}
                onCancel={() => setModalVisible(false)}
            >
                {/* Formulario de la ventana Modal */}
                <Form />
            </Modal>
        </>
    );

}

export default Favorites
