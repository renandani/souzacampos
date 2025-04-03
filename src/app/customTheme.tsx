import { CustomFlowbiteTheme } from 'flowbite-react'

export const customTheme: CustomFlowbiteTheme = {
  navbar: {
    root: {
      base: 'bg-transparent fixed w-full top-0 left-0 transition-all z-50',
      inner: {
        base: 'w-full mx-auto flex flex-wrap items-center justify-between px-0 ',
        fluid: {
          on: '',
          off: 'container',
        },
      },
    },
    toggle: {
      base: 'text-primary-500 inline-flex items-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden',
    },
    collapse: {
      base: 'w-full md:block md:w-auto',
      list: 'flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent items-center',
      hidden: {
        on: 'hidden',
        off: '',
      },
    },

    link: {
      base: 'block text-sm font-semibold text-slate-900 tracking-widest after:bg-[#004aad] after:block after:absolute after:h-[1px] after:z-50 after:left-0 after:right-0 after:top-[calc(50% + 15px)] after:w-0 hover:after:w-full relative uppercase',
      active: {
        on: 'after:w-full',
        off: '',
      },
      disabled: {
        on: 'text-gray-400 hover:cursor-not-allowed',
      },
    },
  },
  dropdown: {
    floating: {
      style: {
        auto: 'bg-white flex justify-center py-3 px-5',
      },
      item: {
        base: 'block py-2 pl-3 pr-4 text-zinc-900 text-base rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 font-bold',
      },
    },
    inlineWrapper:
      'flex items-center py-2 pl-3 pr-4 text-zinc-900 text-base rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 font-bold',
  },
}
