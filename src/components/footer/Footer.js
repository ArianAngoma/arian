import styled from 'styled-components';
import {FooterCol} from '../ui/FooterCol';
import {PText} from '../ui/PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;

  .container {
    display: flex;
    gap: 3rem;
  }

  .footer__col1 {
    flex: 2;
  }

  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }

  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;

    .para {
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;

      & > div {
        margin-top: 5rem;
      }
    }

    .footer__col1 .para {
      max-width: 100%;
    }

    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export const Footer = () => {
    return (
        <FooterStyle>
            <div className="container">
                <div className="footer__col1">
                    <h1 className="footer__col1__title">Arian Angoma</h1>
                    <PText>
                        Apasionado con la programación y las nuevas tecnologías, gran parte de
                        mi tiempo la dedico a la investigación y desarrollo de software.
                    </PText>
                </div>
                <div className="footer__col2">
                    <FooterCol
                        heading="Enlaces"
                        links={[
                            {
                                title: 'Home',
                                path: '/',
                                type: 'Link',
                            },
                            {
                                type: 'Link',
                                title: 'About',
                                path: '/about',
                            },
                            {
                                type: 'Link',
                                title: 'Projects',
                                path: '/projects',
                            },
                            {
                                type: 'Link',
                                title: 'Contact',
                                path: '/contact',
                            },
                        ]}
                    />
                </div>
                <div className="footer__col3">
                    <FooterCol
                        heading="Información de Contacto"
                        links={[
                            {
                                title: '+51983416698',
                                path: 'tel:+51983416698',
                            },
                            {
                                title: 'arian.angoma.js@gmail.com',
                                path: 'mailto:arian.angoma.js@gmail.com',
                            },
                            /*{
                                title: 'Lima - Perú',
                                path: 'http://google.com/maps',
                            },*/
                        ]}
                    />
                </div>
                <div className="footer__col4">
                    <FooterCol
                        heading="Redes Sociales"
                        links={[
                            {
                                title: 'Linkedin',
                                path: 'https://www.linkedin.com/in/arian-angoma-vilchez/',
                            },
                            {
                                title: 'Twitter',
                                path: 'https://twitter.com/ArianAngomaJS',
                            }
                        ]}
                    />
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <PText>
                        © 2022 - Arian Angoma
                    </PText>
                </div>
            </div>
        </FooterStyle>
    )
}
