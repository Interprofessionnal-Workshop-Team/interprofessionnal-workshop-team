import { SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="text-center">

        {/* Divider */}
        <div className="py-4 max-w-sm m-auto">
          <hr className='border-gray-200 border-1 dark:border-white' />
        </div>

        {/* Socials */}
        <div className="mt-3 space-x-2">
          {/* Email */}
          {/* <a className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 22" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4 14.8L9 8.8M20 14.8L15 8.8M3 4.8L10.225 9.61658C10.8665 10.0443 11.1872 10.2582 11.5339 10.3412C11.8403 10.4147 12.1597 10.4147 12.4661 10.3412C12.8128 10.2582 13.1335 10.0443 13.775 9.61658L21 4.8M6.2 15H17.8C18.9201 15 19.4802 15 19.908 14.782C20.2843 14.5903 20.5903 14.2843 20.782 13.908C21 13.4802 21 12.9201 21 11.8V4.2C21 3.0799 21 2.51984 20.782 2.09202C20.5903 1.71569 20.2843 1.40973 19.908 1.21799C19.4802 1 18.9201 1 17.8 1H6.2C5.0799 1 4.51984 1 4.09202 1.21799C3.71569 1.40973 3.40973 1.71569 3.21799 2.09202C3 2.51984 3 3.07989 3 4.2V11.8C3 12.9201 3 13.4802 3.21799 13.908C3.40973 14.2843 3.71569 14.5903 4.09202 14.782C4.51984 15 5.07989 15 6.2 15Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a> */}
          {/* Instagram */}
          <a className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" href="#">
            <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="24" height="22" fill="currentColor">
              <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
            </svg>
          </a>
          {/* Youtube */}
          <a className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" href="#">
            <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22"
              fill="currentColor">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M20.8293 3.65663C21.7911 3.78193 22.7103 4.71724 22.8272 5.69265C23.2413 9.26736 23.2413 12.7338 22.8272 16.3074C22.7103 17.2828 21.7911 18.2192 20.8293 18.3434C14.9649 19.0721 9.03427 19.0721 3.17155 18.3434C2.20895 18.2189 1.28979 17.2828 1.17284 16.3074C0.758792 12.7335 0.758792 9.26736 1.17284 5.69265C1.28979 4.71724 2.20895 3.78166 3.17155 3.65663C9.03427 2.92793 14.9647 2.92793 20.8293 3.65663ZM10.1436 7.28788V14.7133L15.7126 11.0007L10.1436 7.28788Z" />
            </svg>
          </a>
          {/* {
              SOCIALS.links.map((link) => (
                <Link href={link.url} key={link.name} className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800">
                  <Image src={link.svg_path} alt={link.name} width={22} height={22} />
                </Link>
              ))
            } */}
        </div>

        {/* <div>
          <a className="flex-none text-xl font-semibold text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" aria-label="Brand">IWT</a>
        </div> */}
        <div className="mt-3">
          <p className="text-gray-500">Interprofessionnal Workshop Team</p>
          <p className="text-gray-500">© 2023. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer