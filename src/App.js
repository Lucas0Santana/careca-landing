import logo from './marcacareca_1.png';
import './App.css';
import { Avatar, ConfigProvider, Layout, Menu } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';

const baseColor = '#82010B'

const theme = {
  token: {
    colorPrimary: 'none',
    colorText: 'white',
    colorBgContainer: baseColor,
  },
  components: {
    Header: {

    },
    Button: {
      colorBgContainer: baseColor,
      colorText: 'white'
    },
  },
};

const headerStyle = {
  backgroundColor: baseColor,
  padding: '10px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const logoStyle = {
  marginTop: '50px',
  padding: '20px',
  backgroundColor: baseColor,
};

const menuStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
};
const menuContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
};

const itemsLeft = [
  { key: 0, label: "Cardápio" },
  { key: 1, label: "Faça seu pedido" }
];
const itemsRight = [
  { key: 2, label: "Nossa Localização" },
  { key: 3, label: "Nossas Redes Sociais" }
];

const contentStyle = {
  flex: 1, // Faz o conteúdo expandir e empurrar o Footer para baixo
  padding: '20px',
  backgroundColor: '#f5f5f5', // Apenas para visualização melhor
};

const footerStyle = {
}

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Layout>
        <Header style={headerStyle}>
          <div style={menuContainerStyle}>
            <Menu mode="horizontal" items={itemsLeft} style={menuStyle} />
            <Avatar size={160} src={logo} alt="Logo" style={logoStyle} />
            <Menu mode="horizontal" items={itemsRight} style={menuStyle} />
          </div>
        </Header>

        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App;