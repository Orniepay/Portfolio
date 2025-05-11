import img from '../assets/me.jpg'

import QuickLinks from './QuickLinks.js'

const Home = () => {
  return (
    <>
      <div className="container gap-14 flex items-center my-24 w-full justify-between">
        <div>
          <p className="text-2xl">
            <span className="text-purple-dark">def</span>
            <span className="text-yellow">
              {' '}
              orniePayer<span className="text-purple-dark">()</span>
            </span>
            <span className="text-purple-dark "> {`:`}</span>{' '}
          </p>
          <div className="my-9">
            <p className="pl-6 text-lg text-yellow">
              <span className="text-purple-dark">return</span> software engineer
            </p>
          </div>
          <p className="text-purple-dark text-2xl"> {``} </p>

          <div className="mt-10">
            <div className="text-sm text-teal">
              print(github, resume, linkedin)
            </div>
            <QuickLinks />
          </div>
        </div>

        <img
          className="rounded-[20%] w-[90%] sm:w-[35%]"
          alt="portrait of Ornie Payer"
          src={img}
        />
      </div>
    </>
  )
}

export default Home
