import logo from '../assets/images/logo.png'
import { FaSearch } from 'react-icons/fa'
import { links, topLinks } from '../data'

const Hero = () => {
  return (
    <section
      id="hero"
      className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-none"
    >
      <div className="hero-phrases container mx-auto">
        <h1 className="hero-title text-gray-100 text-7xl">
          Elegant Custom {<br />}Railings to Transform {<br />} Your Space
        </h1>
        <p className="hero-text text-gray-100 text-lg">
          Bring to any deck, porch, or balcony with aluminum railing and fencing
          {<br />}
          retain their clean look with minimal maintenance, giving your outdoor
          living area{<br />} a timeless style and a modern vibe.
        </p>
      </div>

      <div className="hero-buttons container mx-auto mt-10">
        <button
          type="button"
          className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-900 text-white hover:bg-gray-600 hover:text-white py-3 px-8"
        >
          See Products
        </button>
        <button
          type="button"
          className="text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-stone-400  hover:bg-gray-600 hover:text-white py-3 px-8 ml-8"
        >
          Visualize Your Railings
        </button>
      </div>
    </section>
  )
}

export default Hero
