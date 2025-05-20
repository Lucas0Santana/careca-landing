import { ArrowRightOutlined, BookOutlined } from '@ant-design/icons';
import { Avatar, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useNavigate } from "react-router-dom";
import { Carrossel } from '../../Shared/Components/Carrossel';
import careca from '../../Shared/Images/Home/image 3.png';

const contentStyle = {
    flex: '1',
    padding: '20px',
    backgroundColor: 'black',
    marginTop: '5%',
    background: 'linear-gradient(to bottom, #000000,rgb(8, 0, 0))',
    width: '100%',
};

const containerCarrossel = {
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    marginTop: '7%',
    border: 'none',
    primaryColor: 'none',
}

const containerCardapio = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '5%',
    // padding: '10px',
}

const tituloCardapio = {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '48px',
}

const btnCardapio = {
    backgroundColor: '#174E23',
    border: 'none',
    color: 'white',
    fontSize: '24px',
    padding: '20px',
    borderRadius: '90px',
    cursor: 'pointer',
}

const containerHistoria = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '45%',
    padding: '0 60px',
    fontSize: '24px',
}

// chat gpt
const sectionContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    padding: '0 60px',
};

const sectionContent = {
    maxWidth: '1000px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const tituloSecao = {
    fontSize: '36px',
    fontFamily: 'Georgia, serif', // mais clássico como na imagem
    color: 'white',
};

const textoHistoria = {
    fontSize: '20px',
    textAlign: 'justify',
    marginTop: '18px',
    color: 'white',
    fontFamily: 'Georgia, serif',
    maxWidth: '600px',
};

const legendaAvatar = {
    textAlign: 'center',
    marginTop: '8px',
    color: 'white',
    fontStyle: 'italic',
};


export const Home = () => {
    const navigate = useNavigate();
    return (
        <Content style={contentStyle} >
            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                <div style={containerCarrossel}>
                    <Carrossel />
                </div>

                <div style={sectionContainer}>
                    <div style={sectionContent}>
                        <Typography style={tituloSecao}>Conheça Nosso Cardápio!</Typography>
                        <button style={btnCardapio} onClick={() => navigate('/cardapio')}>
                            <BookOutlined /> CARDÁPIO <ArrowRightOutlined />
                        </button>
                    </div>
                </div>


                <div style={sectionContainer}>
                    <div style={sectionContent}>
                        <div>
                            <Typography.Title level={2} style={tituloSecao}>Nossa História</Typography.Title>
                            <Typography style={textoHistoria}>
                                A Pizzaria do Careca foi fundada em 2015 por João, um apaixonado por pizza.
                                Com massas leves e coberturas frescas, o local rapidamente conquistou os moradores
                                pela qualidade e pelo atendimento simpático. João, sempre sorridente, é a alma do
                                lugar, tornando cada visita uma experiência única e saborosa.
                            </Typography>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <Avatar src={careca} size={150} />
                            <div style={legendaAvatar}>O Careca</div>
                        </div>
                    </div>
                </div>

            </div>

        </Content>
    )
}