import { theme } from './Shared/Theme';
import ptBR from 'antd/locale/pt_BR.js';

import { ConfigProvider, Layout } from 'antd';
import { MenuBar, App_Footer } from './Shared/Components';
import { AppRoutes } from './Routes';
import { Home } from './Pages/Home';
import { BrowserRouter } from 'react-router-dom';


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