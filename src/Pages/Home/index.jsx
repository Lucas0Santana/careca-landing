import { Content } from 'antd/es/layout/layout';
import { Carrossel } from '../../Shared/Components/Carrossel';
import { Typography, Avatar } from 'antd';
import { ArrowRightOutlined, BookOutlined } from '@ant-design/icons';
import careca from '../../Shared/Images/Home/image 3.png';

const contentStyle = {
    flex: 1,
    padding: '20px',
    backgroundColor: 'black',
    // height: '10000px',
    marginBottom: '100px',
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
    padding: '10px',
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
}

const containerHistoria = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '5%',
    padding: '10px',
}

export const Home = () => {

    return (
        <Content style={contentStyle} >
            <div style={{justifyContent: 'center', alignItems: 'center', height: '100vh', }}>
                <div style={containerCarrossel}>
                    <Carrossel />
                </div>

                <div style={containerCardapio}>
                    <div>
                        <Typography style={tituloCardapio}> Conheça Nosso Cardápio! </Typography>
                    </div>
                    <div>
                        <button style={btnCardapio}><BookOutlined /> CARDÁPIO <ArrowRightOutlined /></button>
                    </div>
                </div>

                <div style={containerHistoria}>
                    <div>
                        <Typography.Title variant='titule'> Nossa História </Typography.Title>
                        <Typography> A Pizzaria do Careca foi fundada em 2015 por João, um apaixonado por pizza. Com massas leves e coberturas frescas, o local rapidamente conquistou os moradores pela qualidade e pelo atendimento simpático. João, sempre sorridente, é a alma do lugar, tornando cada visita uma experiência única e saborosa. </Typography>
                    </div>
                    <div>
                        <Avatar src={careca}/>
                    </div>
                </div>

            </div>

        </Content>
    )
}