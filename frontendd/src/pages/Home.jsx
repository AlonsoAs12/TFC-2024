import React from 'react';
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';
import Subtitle from './../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
    return (<> 

    {/* ============= hero section start ===========*/}
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className='hero__content'>
                        <div className='hero__subtitle d-flex align-items-center'>
                            <Subtitle Subtitle={'Know Before You Go'} />
                            <img src={worldImg} alt="" />
                        </div>
                        <h1>
                        Bienvenido a nuestra plataforma web 
                            <span className='highlight'> "EcoPerú Viajes"</span>
                        </h1>
                        <p>
                        Donde cada exploración es una oportunidad para crear recuerdos inolvidables y apoyar la sostenibilidad. Descubre la riqueza cultural y natural del Perú de manera consciente, con experiencias diseñadas para preservar nuestro patrimonio y contribuir al bienestar de las comunidades locales. ¡Viaja por el Perú con EcoPerú, donde cada paso cuenta para un turismo responsable y significativo!
                        </p>
                    </div>
                </Col>

                <Col lg='2'>
                    <div className='hero__img-box'>
                        <img src={heroImg} alt=""/>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className='hero__img-box mt-4'>
                        <video src={heroVideo} alt="" controls/>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className='hero__img-box mt-5'>
                        <img src={heroImg02} alt=""/>
                    </div>
                </Col>

                <SearchBar/>
            </Row>
        </Container>
    </section>
        {/*============== hero section start ==========*/}
    <section>
        <Container>
            <Row>
                <Col lg='3'>
                    <h5 className='services__subtitle'>Lo que ofrecemos</h5>
                    <h2 className='services__title'>Brindamos nuestros mejores servicios</h2>
                </Col>
                <ServiceList/>
            </Row>
        </Container>
    </section>

    {/*======featured tour section start========*/}
    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <Subtitle Subtitle={'Explore'}/>
                    <h2 className='featured__tour-title'>Nuestros tours destacados</h2>
                </Col>
                <FeaturedTourList/>
            </Row>
        </Container>
    </section>
    {/*======featured tour section end========*/}

    {/*=========experience section start========*/}
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className='experience__content'>
                        <Subtitle Subtitle={'Experience'}/>

                        <h2>
                        Con toda nuestra experiencia, <br/> estaremos a tu servicio
                        </h2>
                        <p>
                        Descubre la auténtica hospitalidad mientras exploras destinos fascinantes. Nos dedicamos a brindarte momentos inolvidables, donde cada rincón cuenta una historia única. Quas aliquam, hic tempora inventore suscipit unde. 
                            <br/>
                            ¡Viaja con nosotros y sumérgete en una experiencia inigualable!
                        </p>
                    </div>
                    <div className='counter__wrapper d-flex align-items-center gap-5
                    '>
                        <div className='counter__box'>
                            <span></span>
                            <h6></h6>
                        </div>
                        <div className='counter__box'>
                            <span></span>
                            <h6></h6>
                        </div>
                        <div className='counter__box'>
                            <span></span>
                            <h6></h6>
                        </div>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className='experience__img'>
                        <img src={experienceImg} alt='' />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    {/*=========experience section end========*/}

    {/*=========gallery section start========*/}
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle Subtitle={'Gallery'}/>
                    <h2 className='gallery__title'>
                        Visita nuestra galeria de imagenes 
                    </h2>
                </Col>
                <Col lg='12'>
                  <MasonryImagesGallery/>
                </Col>
            </Row>
        </Container>
    </section>
    {/*=========gallery section end========*/}

    {/*=========testimonial section end========*/}
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle Subtitle={'Fans Love'} />
                    <h2 className='testimonial__title'>Lo que dicen nuestros seguidores sobre nosotros</h2>
                </Col>
                <Col lg='12'>
                    <Testimonials/>
                </Col>
            </Row>
        </Container>
     </section>
     {/*=========testimonial section end========*/}
    <Newsletter/>
    </>
   );
};

export default Home;