import styled from 'styled-components';

/* Importaciones propias */
import {AboutInfoItem} from '../components/about/AboutInfoItem';
import {Button} from '../components/ui/Button';
import {PText} from '../components/ui/PText';
import {ContactBanner} from '../components/home/banner/ContactBanner';
import AboutImg from '../../src/assets/images/about-page-img.jpg';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .left {
    flex: 3;
  }

  .right {
    flex: 2;
  }

  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;

    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }

  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }

  .about__info {
    margin-bottom: 4rem;

    .para {
      max-width: 100%;
    }
  }

  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }

  .about__info__items {
    margin-top: 15rem;
  }

  .about__info__item {
    margin-bottom: 10rem;
  }

  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }

    .about__subheading {
      font-size: 1.8rem;
    }

    .about__heading {
      font-size: 2.8rem;
    }

    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export const About = () => {
    return (
        <>
            <AboutPageStyles>
                <div className="container">
                    <div className="top-section">
                        <div className="left">
                            <p className="about__subheading">
                                Hola, soy <span>Arian Angoma</span>
                            </p>
                            <h2 className="about__heading">Un desarrollador de Software</h2>
                            <div className="about__info">
                                <PText>
                                    Profesional en el desarrollo de software e integración de sistemas, con experiencia
                                    como
                                    programador en diferentes proyectos.
                                    <br/> <br/>
                                    Me fascina la programación y todo lo relacionado con la web, me gusta aprender
                                    nuevas tecnologías cada día y crear apps para que la gente las use y mejorar su
                                    forma de trabajo, me encanta pensar que con una sola aplicación puedo solucionar
                                    miles de problemas a miles de personas.
                                    <br/>
                                    <br/>
                                    Como desarrollador autodidacta, se podría decir que he destacado más como
                                    programador Full Stack, trabajando en muchos proyectos privados y públicos, lo cual
                                    mejoró
                                    enormemente mi experiencia y habilidades en general.
                                </PText>
                            </div>
                            <Button btnText="Download CV" download={true}
                                    btnLink="/cv/CV_ARIAN_ANGOMA.pdf"/>
                        </div>
                        <div className="right">
                            <img src={AboutImg} alt="me"/>
                        </div>
                    </div>
                    <div className="about__info__items">
                        <div className="about__info__item">
                            <h1 className="about__info__heading">Educación</h1>

                            <AboutInfoItem
                                title="Tecsup"
                                items={['Instituto de Educación Superior en Perú']}
                            />
                            <AboutInfoItem
                                title="Universidad"
                                items={['Universidad Complutense de Madrid']}
                            />
                        </div>
                        <div className="about__info__item">
                            <h1 className="about__info__heading">Mis Habilidades</h1>

                            <AboutInfoItem
                                title="FrontEnd"
                                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
                            />
                            <AboutInfoItem
                                title="BackEnd"
                                items={['NodeJs', 'ExpressJs', 'NestJs']}
                            />
                            <AboutInfoItem
                                title="Tecnologías"
                                items={['TypeScript', 'Git', 'Github', 'AWS']}
                            />
                        </div>
                        <div className="about__info__item">
                            <h1 className="about__info__heading">Experiencias</h1>

                            <AboutInfoItem
                                title="Equip"
                                items={['Backend Developer']}
                            />
                            <AboutInfoItem
                                title="Pucara Bull"
                                items={['Full Stack Developer']}
                            />
                            <AboutInfoItem
                                title="Tukuy Club"
                                items={['Software Developer']}
                            />
                        </div>
                    </div>
                </div>

                <ContactBanner/>
            </AboutPageStyles>
        </>
    )
}