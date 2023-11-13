import img from '../assets/me.jpg'
import resume from '../assets/resume.pdf'

import { AiFillGithub, AiOutlineDownload, AiFillLinkedin } from 'react-icons/ai'

const Home = () => {
  return (
    <>
      <div className="my-16 w-full max-w-[65%]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl">
              <span className="text-purple-dark">function</span>
              <span className="text-yellow">
                {' '}
                allieCaton<span className="text-purple-dark">()</span>
              </span>
              <span className="text-purple-dark "> {`{`}</span>{' '}
            </p>
            <div className="my-9">
              <p className="pl-6 text-yellow">full-stack developer</p>
            </div>
            <p className="text-purple-dark text-2xl"> {`}`} </p>

            <div className="mt-10">
              <div className="text-sm text-teal">
                console.log(github, resume, linkedin)
              </div>
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
            </div>
          </div>

          <div>
            <img
              className="ml-9 rounded-[100%] w-[350px]"
              alt="portrait of Allie Caton"
              src={img}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
