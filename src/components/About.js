const work = require('../data/work-experience.json')

const About = () => {
  const workFormatted = () => {
    return work.map((job) => {
      return (
        <div>
          <div className="mt-3 text-yellow">{job.title}</div>
          <div className="mt-1 text-purple-light">{job.company}</div>
          <div className="mt-1 text-purple-dark">{job.time}</div>
        </div>
      )
    })
  }

  return (
    <div id="about" className="container gap-20 flex justify-between my-24">
      <div className="basis-6/12  mr-3">
        <div className="text-purple-light text-2xl mb-6">About</div>

        <div className="text-yellow">
          <p className="mt-3">
            I'm Allie, a full-stack web developer. I'm interested in building
            clean and effective applications with people who are similarly
            passionate.
          </p>
          <p className="mt-3">
            In my free time, I dabble in building electronic hardware, drawing,
            reading, and mooning over my mechanical keyboard.
          </p>
          <p className="mt-3">
            Here are a few technologies I've been working with recently:
          </p>
          <div className="pl-3 mt-3 text-teal">
            <div className="mt-2">
              <span className="text-purple-light">{`>`}</span> JavaScript +
              TypeScript
            </div>
            <div className="mt-2">
              <span className="text-purple-light">{`>`}</span> Vue 3
            </div>
            <div className="mt-2">
              <span className="text-purple-light">{`>`}</span> React
            </div>
            <div className="mt-2">
              <span className="text-purple-light">{`>`}</span> NodeJS + Express
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-purple-light text-2xl mb-3">Work Experience</div>

        <div className="mt-3">{workFormatted()}</div>

        <a
          href="https://www.linkedin.com/in/alliecaton/"
          className="text-purple-light inline-block mt-6 hover:text-purple-dark"
          target="_blank"
          rel="noreferrer"
        >
          view more {'->'}
        </a>
      </div>
    </div>
  )
}

export default About
