import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Grid, Menu } from 'antd';
import { Header } from "antd/es/layout/layout";
import { useState } from 'react';
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

  const [open, setOpen] = useState(false);

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const isMobile = screens.md;
  return (
    <Header style={headerStyle}>
      {
        !isMobile ? (
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