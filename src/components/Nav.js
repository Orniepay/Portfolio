const Nav = () => {
  const scroll = (id) => {
    const el = document.getElementById(id)

    el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="flex w-full items-center justify-between">
      <div className="text-purple-light hover:text-purple-dark text-[30px] cursor-pointer">
        ✦
      </div>

      <div className="flex gap-10 items-center">
        <div
          className="text-purple-light hover:text-purple-dark cursor-pointer"
          onClick={() => scroll('about')}
        >
          about
        </div>
        <a
          target="_blank"
          href="https://garden.alliecaton.com"
          rel="noreferrer"
          className="text-[#beb7cb] hover:text-[#453f53] cursor-pointer"
        >
          blog
        </a>
        <div
          className="text-[#beb7cb] hover:text-[#453f53] cursor-pointer"
          onClick={() => scroll('projects')}
        >
          projects
        </div>
        <div
          className="text-[#beb7cb] hover:text-[#453f53] cursor-pointer"
          onClick={() => scroll('contact')}
        >
          contact
        </div>
      </div>
    </nav>
  )
}

export default Nav
