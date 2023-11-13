import { AiFillGithub } from 'react-icons/ai'
const projects = require('../data/projects.json')

const Projects = () => {
  const getGithub = (project) => {
    if (project.github) {
      return (
        <a
          href={project.github}
          className="text-purple-light hover:text-purple-dark"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="text-xl" />
        </a>
      )
    }

    if (project.backend && project.frontend) {
      return (
        <div className="gh-fullstack-links flex">
          <a
            href={project.frontend}
            className="text-purple-light flex items-center hover:text-purple-dark"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="text-xl mr-1" /> frontend
          </a>
          <a
            href={project.backend}
            className="ml-3 text-purple-light flex items-center hover:text-purple-dark"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="text-xl mr-1" /> backend
          </a>
        </div>
      )
    }
  }

  const projectsFormatted = () => {
    return projects.map((project) => {
      return (
        <div className="w-full sm:basis-[45%]">
          <div className="text-yellow text-xl">{project.title}</div>
          <div className="text-yellow mt-3">{project.description}</div>
          <div className="text-teal mt-3">{project.tech}</div>

          <div className="mt-3 flex items-center">
            <a
              className="py-[2px] px-2 bg-purple-light text-purple-dark rounded-md hover:bg-purple-dark hover:text-purple-light"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              visit
            </a>
            <div className="text-teal ml-3">{getGithub(project)}</div>
          </div>
        </div>
      )
    })
  }

  return (
    <div id="projects" className="w-full my-24">
      <div className="text-2xl text-purple-light mb-6">Projects</div>

      <div className="container flex flex-row gap-20 flex-wrap">
        {projectsFormatted()}
      </div>
    </div>
  )
}

export default Projects
