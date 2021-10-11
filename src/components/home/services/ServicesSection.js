import {MdDesktopMac, MdCode, MdImportantDevices} from 'react-icons/md';
import styled from 'styled-components';

/* Importaciones propias */
import {SectionTitle} from './SectionTitle';
import {ServicesSectionItem} from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;

  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }

  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export const ServicesSection = () => {
    return (
        <ServicesItemsStyles>
            <div className="container">
                <SectionTitle subheading="Lo que haré por ti" heading="Servicios"/>
                <div className="services__allItems">
                    <ServicesSectionItem
                        icon={<MdImportantDevices/>}
                        title="Desarrollo Web"
                        desc="Desarrollo sitios web. Creo un sitio web de alto rendimiento con una velocidad increíble."
                    />
                    <ServicesSectionItem
                        icon={<MdCode/>}
                        title="Backend"
                        desc="Desarrollo API's robustas y escalables con comunicación a diferentes bases de datos SQL y/o NoSQL."
                    />
                    <ServicesSectionItem
                        icon={<MdDesktopMac/>}
                        title="Frontend"
                        desc="Desarrollo interfaces gráficas para que el usuario pueda ver e interactuar con la información."
                    />
                </div>
            </div>
        </ServicesItemsStyles>
    );
}