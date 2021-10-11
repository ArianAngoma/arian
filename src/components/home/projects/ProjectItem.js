import styled from 'styled-components';

/* Importaciones propias */
import ProjectImg from '../../../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);

    img {
      height: 100%;
    }
  }

  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }

  .projectItem__title {
    font-size: 2.2rem;
  }

  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular', serif;
    margin-top: 1rem;
  }

  .projectItem__repo_desc {
    font-size: 1.2rem;
    font-family: 'RobotoMono Regular', serif;
  }

  .projectItem__repo {
    font-size: 1.2rem;
    font-family: 'RobotoMono Regular', serif;
    color: lightskyblue;
  }

  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export const ProjectItem = ({
                                img = ProjectImg,
                                title = 'Project Name',
                                desc = 'Desc',
                                link = 'https://calendar-app-arianjs.herokuapp.com',
                                repoFrontend,
                                repoBackend
                            }) => {
    return (
        <ProjectItemStyles>
            <a href={link} target="_blank" className="projectItem__img" rel="noreferrer">
                <img src={img} alt="project img"/>
            </a>
            <div className="projectItem__info">
                <a href={link} target="_blank" rel="noreferrer">
                    <h3 className="projectItem__title">{title}</h3>
                </a>
                <p className="projectItem__desc">{desc}</p>
                <br/>
                <p className="projectItem__repo_desc">
                    Repositorios: <span/>
                    {
                        (repoFrontend) && (
                            <a href={repoFrontend}
                               target="_blank"
                               rel="noreferrer"
                               className="projectItem__repo"
                            >Frontend</a>
                        )
                    }

                    {
                        (repoBackend) && (
                            <>
                                <span> - </span>
                                <a href={repoBackend}
                                   target="_blank"
                                   rel="noreferrer"
                                   className="projectItem__repo"
                                >Backend</a>
                            </>
                        )
                    }
                </p>

            </div>
        </ProjectItemStyles>
    )
}