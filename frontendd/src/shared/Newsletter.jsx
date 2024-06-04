import React  from "react"
import './newsletter.css'

import { Container,Row,Col } from "reactstrap"
import maleTousit from '../assets/images/male-tourist.png'

const Newsletter = () => {
    return (
    <section className="newsletter">
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Suscríbete ahora para recibir información útil sobre viajes.</h2>
                        <div className="newsletter__input">
                            <input type="email" placeholder="Enter yout email"/>
                            <button className="btn newsletter__btn">Subscribe</button>
                        </div>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem delectus facilis odio odit minima officia aperiam culpa ipsam,
                        quasi numquam neque tenetur unde doloribus mollitia nesciunt eligendi quae placeat corrupti!</p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTousit} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    );
}

export default Newsletter