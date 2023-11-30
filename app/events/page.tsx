import { Divider } from "@/components/Divider"
import Image from "next/image"
import Link from "next/link"

export default function Events() {
  return (
    <>
      <ImageCover />
      <Heading />
      <Divider />
      <OurEvents />
    </>
  )
}

const ImageCover = () => (
  <>
    {/* Image cover */}
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={{
        minHeight: "10vh"
      }}>
      <div className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: "url('/home/main.jpg')" // "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
        }}>
        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
      </div>
    </div>
  </>
)

const Heading = () => (
  <>
    {/* Title */}
    <div className="container relative mx-auto pt-16 pb-8">
      <div className="items-center flex flex-wrap">
        <div className="w-full lg:w-1/2 px-4 ml-auto mr-auto text-center">
          <div>
            <h1 className="font-md text-2xl text-gray-700 py-4">
              Events
            </h1>
            <h1 className="font-semibold text-4xl">
              Our Events
            </h1>
            <p className="mt-4 text-lg text-gray-400 py-4">
              Throughout the year, we organize a few events that you will find below :
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
)

const OurEvents = () => (
  <>
    {/* Event */}
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div>
          <Image className="rounded-2xl" src="/events/scrubs_night/scrubs_night_flyer_cover_2023.JPG" alt="Flyer Scrubs Night 2023" width={0} height={0} sizes="100vw" />
        </div>

        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                Scrubs Night
              </h2>
              <p className="text-gray-500">
                This is an evening where you will join many students from fields such as nurses, doctors, ... And you will be able to work and collaborate with them in a simulated environment.
              </p>
            </div>

            <ul role="list" className="space-y-2 sm:space-y-4">
              <li className="flex space-x-3">
                <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                  <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span className="text-sm sm:text-base text-gray-500">
                  <span className="font-bold">Teamwork</span>
                </span>
              </li>

              <li className="flex space-x-3">
                <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                  <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span className="text-sm sm:text-base text-gray-500">
                  <span className="font-bold">Communication</span>
                </span>
              </li>
            </ul>

            <div className="flex justify-start">
              <Link href="/scrubs_night">
                <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  Learn more
                </button>
              </Link>
              {/* <a className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium cursor-pointer">
                Learn more
                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </a> */}
            </div>

          </div>
        </div>
      </div>
    </div>
  </>
)