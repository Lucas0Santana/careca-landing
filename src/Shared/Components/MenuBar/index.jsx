import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Menu } from 'antd';
import { Header } from "antd/es/layout/layout";
import { useEffect, useState } from 'react';
import logo from '../../Images/marcacareca_1.png';
import useApp from "./useApp";

export const MenuBar = () => {
  const {
    headerStyle,
    menuStyle,
    menuContainerStyle,
    logoStyle,
    itemsLeft,
    itemsRight,
  } = useApp();

  // const isMobile = window.innerWidth <= 768;
  const [open, setOpen] = useState(false);
  // const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  // const isMobile = useMediaQuery({ maxWidth: 768 });
  
  const windowSize = 
    {
      width: window.innerWidth,
      height: window.innerHeight,
    };

  const isMobile = 768 > windowSize.width;

    useEffect(() => {
      console.log(open);
      }, [open]);

  return (
    <Header style={headerStyle}>
      {
        isMobile ? (
          <>
            <Button type="text" icon={<MenuOutlined />} onClick={() => setOpen(!open)} />
            <Drawer
              title="Menu"
              placement="right"
              onClose={() => setOpen(false)}
              open={open}
            >
              <Menu mode="vertical" items={[...itemsLeft, ...itemsRight]} />
            </Drawer>
          </>
        ) : (
          <div style={menuContainerStyle}>
            <Menu mode="horizontal" items={itemsLeft} style={menuStyle} />
            <img src={logo} alt="Logo" style={logoStyle} />
            <Menu mode="horizontal" items={itemsRight} style={menuStyle} />
          </div >
        )}
    </Header>
  )
}
// <Header style={headerStyle}>
//   <div style={menuContainerStyle}>
//     <Menu mode="horizontal" items={itemsLeft} style={menuStyle} />
//     <img src={logo} alt="Logo" style={logoStyle} />
//     <Menu mode="horizontal" items={itemsRight} style={menuStyle} />
//   </div>
// </Header>