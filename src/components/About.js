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
            I'm Ornie, a software developer who loves working on 
            projects where I can bring my creativity and curiosity to the 
            table, and pick up new skills along the way expanding my 
            knowledge. I'm drawn to teams where everyone-whether it's 
            collaborators, stakeholders, or leaders-is united by the goal 
            of building something great that truly engages its users.
          </p>
          <p className="mt-3">
            I really enjoy jumping into projects that challenge me and spark 
            interest. Whether it's coding, teaming up with others, or learning 
            something new, I'm all about mixing it up and staying curious.
          </p>
          <p className="mt-3">
            In my free time, I love reading, traveling, cooking, fitness, going 
            for drives and spending way too much time with my mechanical keyboard.
          </p>
          <p className="mt-3">
            Personal stats: 5'7" on a good day, 
            175, stack experience, 
            above average mario golf player, 
            sub 5 minute oil change time, 
            120 pushups high score
          </p>
        </div>
      </div>

      <div>
        <div className="text-purple-light text-2xl mb-6">Work Experience</div>

        <div className="mt-3">{workFormatted()}</div>

        <a
          href="https://www.linkedin.com/in/ornie-payer/"
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
