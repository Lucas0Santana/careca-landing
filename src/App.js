import { theme } from './Shared/Theme';
import ptBR from 'antd/locale/pt_BR.js';

import { ConfigProvider, Layout } from 'antd';
import { MenuBar, App_Footer } from './Shared/Components';
import { Home } from './Pages/Home';

function App() {
  return (
    <ConfigProvider theme={theme} locale={ptBR}>
      <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'black' }}>
        <MenuBar />
          <Home />
        <App_Footer />
      </Layout>
    </ConfigProvider>
  );
}

export default App;