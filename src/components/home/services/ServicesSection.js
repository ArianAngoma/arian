import {MdDesktopMac} from 'react-icons/md';
import styled from 'styled-components';

/* Importaciones propias */
import {PText} from '../../ui/PText';

const ItemStyles = styled.div`
  text-align: center;

  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }

  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold', serif;
  }

  .para {
    margin-top: 2rem;
  }
`;

export const ServicesSection = (
    {
        icon = <MdDesktopMac/>,
        title = 'Web Design',
        desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok"
    }
) => {
    return (
        <ItemStyles className="servicesItem">
            <div className="servicesItem__icon">{icon}</div>
            <div className="servicesItem__title">{title}</div>
            <PText>{desc}</PText>
        </ItemStyles>
    )
}