import Typewriter from 'typewriter-effect'   // <-- NEW
import img from '../assets/me.jpg'
import QuickLinks from './QuickLinks.js'

const Home = () => {
  return (
    <>
      <div className="container gap-14 flex items-center my-24 w-full justify-between">
        <div>
          <p className="text-2xl leading-relaxed">                {/* back to 2xl */}
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 70,
                cursor: '',
                html: true                                         // ← let HTML render
              }}
              onInit={(tw) => {
                tw.typeString(
                  // first line ─ def orniePayer():
                  `<span class='text-purple-dark'>def</span>` +
                    `<span class='text-yellow'> orniePayer` +
                      `<span class='text-purple-dark'>()</span></span>` +
                    `<span class='text-purple-dark'>:</span>` +

                  // line break + indent
                  `<br/><span class='pl-6 text-xl text-yellow'>` +   // ← text-xl here
                    `<span class='text-purple-dark'>return</span> software developer` +
                  `</span>`
                )
                  .pauseFor(1500)     // show the full text for a moment
                  .deleteAll()        // erase everything
                  .start()            // the built in loop restarts the sequence
              }}
            />
          </p>

          <div className="mt-10">
            <div className="text-sm text-teal">print(github, resume, linkedin)</div>
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
