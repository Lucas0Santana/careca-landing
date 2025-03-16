import {  Button, ConfigProvider, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { MenuBar, App_Footer } from './Shared/Components';
import { Environment } from './Shared/Environment';
import Link from 'antd/es/typography/Link';

const theme = {
  token: {
    colorPrimary: 'none',
    colorText: 'white',
    colorBgContainer: Environment.BASE_COLOR,
  },
  components: {
    Header: {

    },
    Link: {
    }
  },
};

const contentStyle = {
  flex: 1,
  padding: '20px',
  backgroundColor: 'black',
  height: '10000px',
  paddingTop: '0px',
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Layout style={{ height: '100vh' }}>
        <MenuBar />

        <Content style={contentStyle}>Content</Content>

        <App_Footer />
      </Layout>
    </ConfigProvider>
  );
}

export default App;