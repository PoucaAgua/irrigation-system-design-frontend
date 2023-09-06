import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const cardData = [
    {
        title: 'Evapotranspiration',
        image: 'evapotranspiration-image-url.jpg',
        link: '/evapotranspiration',
    },
    {
        title: 'Irrigation',
        image: 'irrigation-image-url.jpg',
        link: '/irrigation',
    },
    {
        title: 'Percent Wetted',
        image: 'percent-wetted-image-url.jpg',
        link: '/percent-wetted',
    },
    {
        title: 'Percent Shaded',
        image: 'percent-shaded-image-url.jpg',
        link: '/percent-shaded',
    },
    {
        title: 'Crop Coefficients',
        image: 'crop-coefficients-image-url.jpg',
        link: '/crop-coefficients',
    },
    {
        title: 'System Design',
        image: 'system-design-image-url.jpg',
        link: '/system-design',
    },
];

const MainView = () => {
    const cardStyle = {
        margin: '0.5rem',
        backgroundColor: 'gray'
    };

    const titleStyle = {
        textAlign: 'center',
    };


    return (
        <Container>
            <h1 style={titleStyle}>PoucaAgua</h1>
            <Row>
                {cardData.map((card, index) => (
                    <Col key={index} xs={12} sm={6} md={4}>
                        <Card  style={cardStyle}> 
                            <Card.Img variant="top" src={card.image} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Button variant="primary" href={card.link}>
                                    Go to {card.title}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default MainView;
