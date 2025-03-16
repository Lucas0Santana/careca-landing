import { Typography, Card, Flex, Image, Row, Col } from 'antd';

export const Personalized_card = ({ pizza, ingredientes, img_pizza }) => {

    const cardStyle = {
        width: 620,
        height: 210,
        backgroundColor: 'blue',
    };


    return (
        <Card hoverable size='small' style={cardStyle} styles={{ body: { overflow: 'hidden' } }} variant="borderless">
            <Flex justify="space-between">
                <Row>
                    <Col span={12}>
                        <Image alt="avatar" src={img_pizza} width={200} />
                    </Col>

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
            </Flex>
        </Card>
    )
}