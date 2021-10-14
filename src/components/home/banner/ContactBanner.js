import styled from 'styled-components';

/* Importaciones propias */
import {Button} from '../../ui/Button';
import {PText} from '../../ui/PText';

const ContactBannerStyles = styled.div`
  padding: 5rem 0;

  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }

  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export const ContactBanner = () => {
    return (
        <ContactBannerStyles>
            <div className="container">
                <div className="contactBanner__wrapper">
                    <PText>Tienes un proyecto en mente</PText>
                    <h3 className="contactBanner__heading">Déjame que te ayude</h3>
                    <Button btnText="Contactar Ahora" btnLink="/contact"/>
                </div>
            </div>
        </ContactBannerStyles>
    );
}