const Home = () => {
  return (
    <>
      <div className="flex">
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
            <p className="text-yellow">full-stack developer</p>
          </div>
          <p className="text-purple-dark text-2xl"> {`}`} </p>
        </div>

        <div>
          {/* <img className="portrait" alt="portrait of Allie Caton" src={image} /> */}
        </div>
      </div>

      <div className="mt-10">
        <div className="text-teal">console.log(github, resume, linkedin)</div>
        <div className="text-purple-light">{`>> `} </div>
        {/* <img className="portrait" alt="portrait of Allie Caton" src={image} /> */}
      </div>
    </>
  )
}

export default Home
