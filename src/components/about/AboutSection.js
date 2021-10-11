import styled from 'styled-components';

/* Importaciones propias */
import {Button} from '../ui/Button';
import {PText} from '../ui/PText';
import {SectionTitle} from '../ui/SectionTitle';
import AboutImg from '../../assets/images/about-sec-img.jpg';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }

  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }

  .section-title {
    text-align: left;
  }

  .para {
    margin-top: 2rem;
    margin-left: 0;
  }

  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }

  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }

    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }

    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }

    .aboutSection__right {
      margin-top: 3rem;
    }

    .section-title {
      text-align: center;
    }

    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }

    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;

      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export const AboutSection = () => {
    return (
        <AboutSectionStyles>
            <div className="container">
                <div className="aboutSection__left">
                    <SectionTitle
                        subheading="Permítame presentarme"
                        heading="Sobre Mí"
                    />
                    <PText>
                        Apasionado con la programación y las nuevas tecnologías, gran parte de
                        mi tiempo la dedico a la investigación y desarrollo de software, me encanta aprender y ponerlo
                        en práctica día a día.
                    </PText>
                    <div className="aboutSection__buttons">
                        <Button btnText="Proyectos" btnLink="/projects"/>
                        <Button btnText="Leer Más" btnLink="/about" outline/>
                    </div>
                </div>
                <div className="aboutSection__right">
                    <img className="aboutImg" src={AboutImg} alt="Img"/>
                </div>
            </div>
        </AboutSectionStyles>
    )
}