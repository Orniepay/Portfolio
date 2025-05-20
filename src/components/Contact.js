import QuickLinks from './QuickLinks.js'

const Contact = () => {
  return (
    <div id="contact" className="my-24 w-full">
      <div className="text-purple-light text-2xl mb-6"> 
        <span className="text-white drop-shadow-neon-gray">Contact</span>
      </div>
      <span className="text-purple-light">Please reach out to me at </span>
      <a
        className="text-yellow underline"
        href="mailto:payerornie@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        payerornie@gmail.com
      </a>
      <span className="text-purple-light"> for inquiries.</span>

      <div className="mt-9 credits">
        <p className="text-teal mb-3">print(credits, goodbye)</p>
        <p className="text-purple-light">
          {`>>`} design created by Allie Caton and inspired by my favorite text editor theme,{' '}
          <a
            className="text-purple-light"
            href="https://www.nordtheme.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Nord and SynthWave '84
          </a>
        </p>
        <div className="text-purple-light">{`>>`} thanks for visiting! :D</div>

        <QuickLinks />
      </div>
    </div>
  )
}

export default Contact
