import { Typography, Card, Flex, Image, Row, Col } from 'antd';
import { Environment } from "../../Environment";

export const Personalized_card = ({ pizza, ingredientes, img_pizza }) => {
    const cardStyle = {
        width: 620,
        height: 200,
        backgroundColor: Environment.BACKGROUND_COLOR,
    };

    return (
        <Card hoverable size='small' style={cardStyle} variant="borderless">
            <Row gutter={20} align={"middle"} justify={"space-around"}>
                <Row>
                    <Image alt="avatar" src={img_pizza} width={200} />
                </Row>

                <Col span={12}>
                    <Row>
                        <Typography.Title level={3}>
                            {pizza}
                        </Typography.Title>
                    </Row>

                    <Row>
                        <Typography.Text>
                            {ingredientes}
                        </Typography.Text>
                    </Row>
                </Col>
            </Row>
        </Card>
    )
}