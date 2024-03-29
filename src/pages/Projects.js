import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {MdSearch} from 'react-icons/md';

/* Importaciones propias */
import {projects} from '../assets/data/projects';
import {SectionTitle} from '../components/ui/SectionTitle';
import {ProjectItem} from '../components/home/projects/ProjectItem';

const ProjectStyle = styled.div`
  padding: 10rem 0;

  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }

  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }

  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }

  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;

    right: 1rem;
  }

  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }

  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;

export const Projects = () => {
    const [searchText, setSearchText] = useState('');
    const [projectsData, setProjectsData] = useState(projects);

    useEffect(() => {
        if (searchText === '') return;
        setProjectsData(() =>
            projects.filter((item) =>
                item.name.toLowerCase().match(searchText.toLowerCase())
            )
        );
    }, [searchText]);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);
        if (!e.target.value.length > 0) {
            setProjectsData(projects);
        }
    };

    return (
        <>
            <ProjectStyle>
                <div className="container">
                    <SectionTitle
                        heading="Proyectos"
                        subheading="Algunos de mis trabajos recientes"
                    />
                    <div className="projects__searchBar">
                        <form>
                            <input
                                type="text"
                                value={searchText}
                                onChange={handleChange}
                                placeholder="Nombre del proyecto"
                            />
                            <MdSearch className="searchIcon"/>
                        </form>
                    </div>
                    <div className="projects__allItems">
                        {projectsData.map((item) => (
                            <ProjectItem
                                key={item.id}
                                link={item.link}
                                title={item.name}
                                desc={item.desc}
                                img={item.img}
                                repoFrontend={item.repoFrontend}
                                repoBackend={item.repoBackend}
                            />
                        ))}
                    </div>
                </div>
            </ProjectStyle>
        </>
    )
}