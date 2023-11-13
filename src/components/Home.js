import img from '../assets/me.jpg'

import QuickLinks from './QuickLinks.js'

const Home = () => {
  return (
    <>
      <div className="container gap-14 flex items-center my-24 w-full justify-between">
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
            <p className="pl-6 text-lg text-yellow">full-stack developer</p>
          </div>
          <p className="text-purple-dark text-2xl"> {`}`} </p>

          <div className="mt-10">
            <div className="text-sm text-teal">
              console.log(github, resume, linkedin)
            </div>
            <QuickLinks />
          </div>
        </div>

        <img
          className="rounded-[100%] w-[90%] sm:w-[45%]"
          alt="portrait of Allie Caton"
          src={img}
        />
      </div>
    </>
  )
}

export default Home
