import { ArrowRightOutlined, BookOutlined } from '@ant-design/icons';
import { Avatar, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useNavigate } from "react-router-dom";
import { Carrossel } from '../../Shared/Components/Carrossel';
import careca from '../../Shared/Images/Home/image 3.png';
import styles from './Home.module.css';

export const Home = () => {
    const navigate = useNavigate();
    return (
        <Content className={styles.contentStyle} >
            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                <div className={styles.containerCarrossel}>
                    <Carrossel />
                </div>

                <div className={styles.sectionContainer}>
                    <div className={styles.sectionContent}>
                        <Typography className={styles.tituloSecao}>Conheça Nosso Cardápio!</Typography>
                        <button className={styles.btnCardapio} onClick={() => navigate('/cardapio')}>
                            <BookOutlined /> CARDÁPIO <ArrowRightOutlined />
                        </button>
                    </div>
                </div>


                <div className={styles.sectionContainer}>
                    <div className={styles.sectionContent}>
                        <div className={styles.textoHistoriaContainer}>
                            <Typography.Title level={2} className={styles.tituloSecao}>Nossa História</Typography.Title>
                            <Typography className={styles.textoHistoria}>
                                A Pizzaria do Careca foi fundada em 2015 por João, um apaixonado por pizza.
                                Com massas leves e coberturas frescas, o local rapidamente conquistou os moradores
                                pela qualidade e pelo atendimento simpático. João, sempre sorridente, é a alma do
                                lugar, tornando cada visita uma experiência única e saborosa.
                            </Typography>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <Avatar src={careca} size={150} />
                            <div className={styles.legendaAvatar}>O Careca</div>
                        </div>
                    </div>
                </div>

            </div>

        </Content>
    )
}