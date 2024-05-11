import { Disclosure,  } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logoicon from "../../assets/images/Logo.png"

const navigation = [
  { name: 'HOME', href: '#', current: false },
  { name: 'MENU', href: '/', current: false },
  { name: 'MAKE A RESERVATION', href: '#', current: false },
  { name: 'CONTACT US', href: '#', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-[#121618] " style={{position:"relative"}}>
      {({ open }) => (
        <>
        <div className='absolute bottom-[-10px] z-50 left-10 w-fit flex '>

        <img
                src={logoicon}
                alt="Navbar Icon"
                className="   h-14 w-1h-14" />
                <div className='flex text-xl flex-col justify-between'>
                  <h1 className='text-blue-400'>DEEP <span className='text-white'>NET</span></h1>
                  <h1 className='text-stone-100 text-opacity-40'>SOFT</h1>
                </div>
        
                </div>
          <div className=" flex justify-end max-w-7xl  px-2 sm:px-6 lg:px-8 mx-10">


            <div className="relative flex h-20 items-end justify-between ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-stone-200   focus:outline-none focus:ring-2 ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? ' text-[#F5F5F5]' : 'text-gray-300  hover:text-[#0796EF] rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
             
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
