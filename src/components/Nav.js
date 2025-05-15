const Nav = () => {
  const scroll = (id) => {
    const el = document.getElementById(id)

    el.scrollIntoView({ behavior: 'smooth', inline: 'center' })
  }

  return (
    <nav className="flex w-full items-center justify-between">
      <a
        href="/"
        className="text-purple-light block hover:text-purple-dark text-[30px] cursor-pointer"
      >
        🏇🏼✦🏎️
      </a>

      <div className="flex gap-6 sm:gap-10 items-center text-xs sm:text-[14px]">
        <div
          className="text-purple-light hover:text-purple-dark cursor-pointer"
          onClick={() => scroll('about')}
        >
          about
        </div>
        <div
          className="text-purple-light hover:text-purple-dark cursor-pointer"
          onClick={() => scroll('projects')}
        >
          projects
        </div>
        <div
          className="text-purple-light hover:text-purple-dark cursor-pointer"
          onClick={() => scroll('contact')}
        >
          contact
        </div>
      </div>
    </nav>
  )
}

export default Nav
