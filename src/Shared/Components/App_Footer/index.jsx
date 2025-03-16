import logo from "../../Images/marcacareca_1.png"
import { Avatar, Col, Row, Typography } from "antd"
import { Footer } from "antd/es/layout/layout"
import Link from "antd/es/typography/Link"
import { Environment } from "../../Environment"
import { InstagramOutlined, PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons"

export const App_Footer = () => {

    const style = {
        backgroundColor: Environment.BASE_COLOR,
        marginBottom: '0px',
    }

    const link = {
        color: 'white',
        fontSize: '16px',
    }

    const colStyle = {
        fontSize: '18px',
        width: '100%',
        marginRight: '50%',
    }

    const imgStyle = {
        width: '200px',
    }

    return (
        <Footer style={style}>
            <Row  gutter={100} align={'middle'} style={{ fontSize: '18px' }}>
                <Col>
                    <img src={logo} alt="" style={imgStyle} />
                    {/* <Avatar size={200} style={{ padding: '25px', }} src={logo} alt="Logo"></Avatar> */}
                </Col>

                <Col>
                    <Typography style={colStyle}>
                        Acesso Rápido
                    </Typography>

                    <Row>
                        <Link style={link}> Início </Link>
                    </Row>
                    <Row>
                        <Link style={link}> Cardápio </Link>
                    </Row>
                    <Row>
                        <Link style={link} href="https://api.whatsapp.com/send?phone=5579988520069" target="_blank"> Fazer Pedido </Link>
                    </Row>
                </Col>

                <Col>
                    <Typography style={colStyle}>
                        Fale Conosco
                    </Typography>
                    
                    <Row>
                        <Link style={link} href="https://api.whatsapp.com/send?phone=5579988520069" target="_blank"> <WhatsAppOutlined /> (79) 9 8852-0069 </Link>
                    </Row>
                    <Row>
                        <Link style={link}> <PhoneOutlined /> (79) 9 9641-6992 </Link>
                    </Row>
                    <Row>
                        <Link style={link} href="https://www.instagram.com/pizzariadocareca1/" target="_blank"> <InstagramOutlined /> @pizzariadocareca1 </Link>
                    </Row>
                </Col>

            </Row>
        </Footer>
    )
}