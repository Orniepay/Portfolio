import { AiFillGithub, AiOutlineDownload, AiFillLinkedin } from 'react-icons/ai'

import resume from '../assets/resume.pdf'

const QuickLinks = () => {
  return (
    <div className="mt-3 text-purple-light flex items-center">
      <span className="text-sm mr-3 ">{`>> `}</span>

      <a
        href="https://github.com/alliecaton"
        className="px-1 hover:text-purple-dark text-2xl"
        target="_blank"
        rel="noreferrer noopener"
      >
        <AiFillGithub />
      </a>
      <a
        href={resume}
        target="_blank"
        rel="noreferrer noopener"
        className="px-1 hover:text-purple-dark text-2xl"
      >
        <AiOutlineDownload />
      </a>
      <a
        href="https://www.linkedin.com/in/alliecaton/"
        className="px-1 hover:text-purple-dark text-2xl"
        target="_blank"
        rel="noreferrer noopener"
      >
        <AiFillLinkedin />
      </a>
    </div>
  )
}

export default QuickLinks
