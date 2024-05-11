import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#161616] w-full">
  <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-around">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2024 42 Bar & Grill.Developed by Deepnetsoft Solutions.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 px-10 justify-around">
      <li>
      <p>Terms & Conditions</p>

      </li>
      <li>
      <p>Privacy Policy</p>
      </li>
    
    </ul>
  </div>
</footer>

  )
}
