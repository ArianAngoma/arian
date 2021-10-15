import {v4 as uuidv4} from 'uuid';

/* calendar-app */
import CalendarAppImg from '../images/projects/calendar-app.jpeg';
/* portfolio arianjs */
import PortfioArianJs from '../images/projects/portfolio-arianjs.jpeg';

export const projects = [
    {
        id: uuidv4(),
        name: 'Portfolio ArianJs',
        desc: 'Mi portafolio, donde estaré subiendo los proyectos en los que colaboro y/o realizo. Desarrollada en ReactJs y NodeJs.',
        img: PortfioArianJs,
        link: 'https://arianjs.herokuapp.com/',
        repoFrontend: 'https://github.com/ArianAngoma/arian',
        repoBackend: 'https://github.com/ArianAngoma/arian-api'
    },
    {
        id: uuidv4(),
        name: 'Calendar App',
        desc: 'Una aplicación web para agendar notas en un calendario por usuario, Desarrollada en ReactJs y NodeJs.',
        img: CalendarAppImg,
        link: 'https://calendar-app-arianjs.herokuapp.com/',
        repoFrontend: 'https://github.com/ArianAngoma/calendar-app-frontend-react',
        repoBackend: 'https://github.com/ArianAngoma/calendar-app-backend-node'
    },
    {
        id: uuidv4(),
        name: 'Calendar App',
        desc: 'Una aplicación web para agendar notas en un calendario por usuario, Desarrollada en ReactJs y NodeJs.',
        img: CalendarAppImg,
        link: 'https://calendar-app-arianjs.herokuapp.com/',
        repoFrontend: 'https://github.com/ArianAngoma/calendar-app-frontend-react',
        repoBackend: 'https://github.com/ArianAngoma/calendar-app-backend-node'
    }
]