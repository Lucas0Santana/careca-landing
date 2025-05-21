import { InstagramOutlined, PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons"
import { Col, Row, Typography } from "antd"
import { Footer } from "antd/es/layout/layout"
import Link from "antd/es/typography/Link"
import { Environment } from "../../Environment"
import logo from "../../Images/marcacareca_1.png"

import styles from "./App_Footer.module.css"

export const App_Footer = () => {


    return (
        <Footer className={styles.style} style={{ backgroundColor: Environment.BASE_COLOR }}>
            <Row  gutter={100} align={'middle'} className={{ fontSize: '18px',  }}>
                <Col>
                    <img src={logo} alt="" className={styles.imgStyle} />
                </Col>

                <Col>
                    <Typography className={styles.colStyle}>
                        Acesso Rápido
                    </Typography>

                    <Row>
                        <Link className={styles.link}> Início </Link>
                    </Row>
                    <Row>
                        <Link className={styles.link}> Cardápio </Link>
                    </Row>
                    <Row>
                        <Link className={styles.link} href="https://api.whatsapp.com/send?phone=5579988520069" target="_blank"> Fazer Pedido </Link>
                    </Row>
                </Col>

                <Col>
                    <Typography className={styles.colStyle}>
                        Fale Conosco
                    </Typography>
                    
                    <Row>
                        <Link className={styles.link} href="https://api.whatsapp.com/send?phone=5579988520069" target="_blank"> <WhatsAppOutlined /> (79) 9 8852-0069 </Link>
                    </Row>
                    <Row>
                        <Link className={styles.link}> <PhoneOutlined /> (79) 9 9641-6992 </Link>
                    </Row>
                    <Row>
                        <Link className={styles.link} href="https://www.instagram.com/pizzariadocareca1/" target="_blank"> <InstagramOutlined /> @pizzariadocareca1 </Link>
                    </Row>
                </Col>

            </Row>
        </Footer>
    )
}