import {v4 as uuidv4} from 'uuid';

/* calendar-app */
import CalendarAppImg from '../images/projects/calendar-app.jpeg';
/* portfolio arianjs */
import PortfolioArianJs from '../images/projects/portfolio-arianjs.jpeg';
/* task-app */
import TaskAppImg from '../images/projects/task-app.jpeg';
/* chat-app */
import ChatAppImg from '../images/projects/chat-app.jpeg';

export const projects = [
    {
        id: uuidv4(),
        name: 'Calendar App',
        desc: 'Una aplicación web para agendar notas en un calendario por usuario. Desarrollada en ReactJs y NodeJs.',
        img: CalendarAppImg,
        link: 'https://calendar-app-arianjs.herokuapp.com/',
        repoFrontend: 'https://github.com/ArianAngoma/calendar-app-frontend-react',
        repoBackend: 'https://github.com/ArianAngoma/calendar-app-backend-node'
    },
    {
        id: uuidv4(),
        name: 'Task App',
        desc: 'Una aplicación web para gestionar proyectos y tareas. Desarrollada en ReactJs y NodeJs.',
        img: TaskAppImg,
        link: 'https://task-app-arianjs.netlify.app/',
        repoFrontend: 'https://github.com/ArianAngoma/task-app-frontend-react',
        repoBackend: 'https://github.com/ArianAngoma/task-app-backend-node'
    },
    {
        id: uuidv4(),
        name: 'Chat App',
        desc: 'Una aplicación web para la comunicación de usuarios mediante mensajes. Desarrollada en ReactJs y NodeJs.',
        img: ChatAppImg,
        link: 'https://chat-app-arianjs.netlify.app/',
        repoFrontend: 'https://github.com/ArianAngoma/chat-app-frontend-react-redux',
        repoBackend: 'https://github.com/ArianAngoma/chat-app-backend-node-socket'
    },
    {
        id: uuidv4(),
        name: 'Portfolio ArianJs',
        desc: 'Mi portafolio, donde estaré subiendo los proyectos en los que colaboro y/o realizo. Desarrollada en ReactJs y NodeJs.',
        img: PortfolioArianJs,
        link: 'https://arianjs.netlify.app/',
        repoFrontend: 'https://github.com/ArianAngoma/arian',
        repoBackend: 'https://github.com/ArianAngoma/arian-api'
    },
]