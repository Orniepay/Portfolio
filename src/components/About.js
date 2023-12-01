const work = require('../data/work-experience.json')

const About = () => {
  const workFormatted = () => {
    return work.map((job, index) => {
      return (
        <div key={index}>
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
            I'm Allie, a full-stack software engineer. I'm interested in
            contributing to projects where my creativity and curiosity can be
            expressed, and my knowledge expanded. Teams where everyone -- my
            co-collaborators, stakeholders, leaders -- share a common goal in
            making an awesome product that delights its users.
          </p>
          <p className="mt-3">
            I thrive on diving into projects that push my boundaries and spark
            interest. For me, it's all about mixing it up, whether it's coding,
            collaborating, or learning something totally new.
          </p>
          <p className="mt-3">
            In my free time, I dabble in building electronic hardware, rock
            climbing, reading, and mooning over my mechanical keyboard.
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
        <div className="text-purple-light text-2xl mb-6">Work Experience</div>

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
