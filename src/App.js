import {  Button, ConfigProvider, Layout } from 'antd';

import { MenuBar, App_Footer } from './Shared/Components';
import { Environment } from './Shared/Environment';
import Link from 'antd/es/typography/Link';
import { Home } from './Pages/Home';
import { theme } from './Shared/Theme';

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'black' }}>
        <MenuBar />
          <Home />
        <App_Footer />
      </Layout>
    </ConfigProvider>
  );
}

export default App;