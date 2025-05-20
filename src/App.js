import ptBR from 'antd/locale/pt_BR.js';
import { theme } from './Shared/Theme';

import { ConfigProvider, Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './Routes';
import { App_Footer, MenuBar } from './Shared/Components';


function App() {
  return (
    <ConfigProvider theme={theme} locale={ptBR}>
      <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'black' }}>
        <MenuBar />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        <App_Footer />
      </Layout>
    </ConfigProvider>
  );
}

export default App;