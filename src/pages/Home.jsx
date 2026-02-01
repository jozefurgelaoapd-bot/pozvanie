import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProposeModal from '../components/ProposeModal';
import Image from '../static/images/hero.svg';

const Home = ({ className = '' }) => (
    <header className={`hero ${className}`}>
        <Container>
            <Row className="hero_content justify-content-between py-5">
                <Col md={7} lg={6} className="hero_text-wrapper">
                    <div className="hero_text">
                        <h1 className="hero_text-title mb-2">
                            Radka, mám na teba jednu dôležitú otázku.. ❤️
                        </h1>
                        <p className="hero_text-description">
                            Prosím, klikni na tlačidlo nižšie. Sľubujem, že to stojí za to 😊
                        </p>

                        <ProposeModal />
                        
                    </div>
                </Col>
                <Col md={5} className="hero_media-wrapper">
                    <div className="hero_media">
                        <img
                            src={Image}
                            alt="Afraid To Propose Someone?"
                            className="hero_media-img img-fluid"
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    </header>
);

export default Home;
