  import logo from '../../Images/marcacareca_1.png';
  import { Header } from "antd/es/layout/layout";
import useApp from "./useApp";
import { Avatar, Menu } from 'antd';

export const MenuBar = () => {
    const {
      headerStyle,
      menuStyle,
      menuContainerStyle,
      logoStyle,
      itemsLeft,
      itemsRight,
    } = useApp();

    return (
        <Header style={headerStyle}>
          <div style={menuContainerStyle}>
            <Menu mode="horizontal" items={itemsLeft} style={menuStyle} />
            <img src={logo} alt="Logo" style={logoStyle} />
            <Menu mode="horizontal" items={itemsRight} style={menuStyle} />
          </div>
        </Header>
    )
}