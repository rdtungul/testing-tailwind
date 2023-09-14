import logo from '../assets/images/logo.png'
import { FaSearch } from 'react-icons/fa'
import { links, topLinks } from '../data'

const Navbar = () => {
  return (
    <>
      <nav className="">
        <ul className="flex flex-row-reverse pr-20 font-small p-4 mt-4 bg-gray-50 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 ">
          {topLinks.map((link) => {
            const { id, url, text } = link
            return (
              <li key={id}>
                <a
                  className="block py-2 pl-3 mx-2 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500"
                  aria-current="page"
                  href={url}
                >
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-none">
          <a href="https://flowbite.com/" className="flex items-center">
            <img src={logo} className="h-15 mr-3" alt="Logo" />
          </a>
          <div className="flex md:order-2">
            <span className="flex items-center">
              {' '}
              <button
                type="button"
                className="text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-8 py-3 text-center mr-3 md:mr-0 dark:bg-stone-400 hover:bg-gray-600 hover:text-white font-bold"
              >
                Where to Buy
              </button>
              <FaSearch
                className="text-white ml-5"
                style={{ fontSize: '30px' }}
              />
            </span>

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
              {links.map((link) => {
                const { id, url, text } = link
                return (
                  <li key={id}>
                    <a
                      className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500"
                      aria-current="page"
                      href={url}
                    >
                      {text}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
