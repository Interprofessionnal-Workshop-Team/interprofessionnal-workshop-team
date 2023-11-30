import Link from "next/link"
import { EMAIL } from "@/constants"

export default function GetInvolved() {
  return (
    <>
      <ImageCover />
      <Heading />
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
              Get Involved
            </h1>
            <h1 className="font-semibold text-4xl">
              Join Our Team!
            </h1>
            <p className="mt-4 text-lg text-gray-400 py-4">
              Interested in getting involved? We are always looking for enthusiastic students to join our taskforces! Contact us on
              {" "}
              <Link href={`mailto:${EMAIL}`} className="hover:underline font-bold">
                {EMAIL}
              </Link>
              {" "}
              to ask about becoming a member!

              If you want to stay informed about our activities and events, check out our social media and sign up for the
              {" "}
              <Link href={`mailto:${EMAIL}`} className="hover:underline font-bold">
                newsletter
              </Link>
              {" "}(coming soon).
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
)
