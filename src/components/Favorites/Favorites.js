import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { BookOutlined, UserAddOutlined } from '@ant-design/icons';
import { Affix, Button, Modal } from 'antd';
import { Form } from '../Form'
import './Favorites.scss'

const { SubMenu } = Menu;

const Favorites = () => {

    const [modalVisible, setModalVisible] = useState(false);


    return (
        <>

            <Affix style={{ position: 'absolute', top: 0, left: 990 }} className="fixedbuttons">
                <Menu theme="dark" mode="inline">
                    <SubMenu key="sub1" icon={<BookOutlined />} title="FAVORITOS">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
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
