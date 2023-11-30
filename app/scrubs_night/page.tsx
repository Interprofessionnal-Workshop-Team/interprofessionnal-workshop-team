import { Divider } from "@/components/Divider"
import { FAQ_SCRUBS_NIGHT, SCRUBS_NIGHT_NOVEMBER_2023 } from "@/constants"
import Image from "next/image"

export default function ScrubsNight() {
    return (
        <>
            <ImageCover />
            <Heading />
            <Divider />
            <Program />
            <Divider />
            <GalleryCarousel />
            <Divider />
            <FAQ />
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
                            Scrubs Night
                        </h1>
                        <p className="mt-4 text-lg text-gray-400 py-4">
                            This is an evening where you will join many students from fields such as nurses, doctors, ... And you will be able to work and collaborate with them in a simulated environment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
)

const Program = () => (
    <>
        {/* Title */}
        <div className="container relative mx-auto pt-16 pb-8">
            <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-1/2 px-4 ml-auto mr-auto text-center">
                    <div>
                        {/* <h1 className="font-md text-2xl text-gray-700 py-4">
                            Get Involved
                        </h1> */}
                        <h1 className="font-semibold text-4xl">
                            Program
                        </h1>
                        <p className="mt-4 text-lg text-gray-400 py-4">
                            The evening will be filled with different activities.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Section */}
        <div className="container relative mx-auto pt-8 pb-8">
            <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-1/2 px-4 ml-auto mr-auto text-center">
                    <div>
                        <h1 className="font-md text-xl text-gray-700 py-2">
                            Part 1
                        </h1>
                        <h1 className="font-semibold text-2xl">
                            Scénario sur mannequin haute- fidélité (1h40)
                        </h1>
                        <p className="mt-4 text-lg text-gray-400 py-4">
                            Ces deux scénarios se déroulent soit dans un contexte de médecine interne, soit en situation d’urgence. Certains étudiants pratique des soins sur le cas présenté, tandis que d’autres observent t complémentent les gestes de leurs collègues via une retransmission vidéo. Ensuite, une discussion aura lieu, avec l’assistance d’experts médicaux, pour approfondir nos compétences.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Section */}
        <div className="container relative mx-auto pt-8 pb-8">
            <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-1/2 px-4 ml-auto mr-auto text-center">
                    <div>
                        <h1 className="font-md text-xl text-gray-700 py-2">
                            Part 2
                        </h1>
                        <h1 className="font-semibold text-2xl">
                            Partage de connaissance (1h00)
                        </h1>
                        <p className="mt-4 text-lg text-gray-400 py-4">
                            Répartis en trois groupes, les infirmiers, les physiothérapeutes et les médecins prépareront chacun des gestes techniques à l’avance qu’ils initient aux deux autres groupes. Répartis en petits groupes, le but de cette partie sera d’enseigner un geste bien connu de la profession aux deux autres sous la supervision d’experts. Des gestes tel que le désencombrement pulmonaire, la pose de cathéter et l’évaluation d’un statut pulmonaire sont échangés.                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Section */}
        <div className="container relative mx-auto pt-8 pb-8">
            <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-1/2 px-4 ml-auto mr-auto text-center">
                    <div>
                        <h1 className="font-md text-xl text-gray-700 py-2">
                            Part 3
                        </h1>
                        <h1 className="font-semibold text-2xl">
                            L'APÉRO
                        </h1>
                        <p className="mt-4 text-lg text-gray-400 py-4">
                            Rien de mieux que de faire connaissance autour d'un verre et des snacks !
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </>
)

// const Gallery = () => (
//     <>
//         <div className="items-center flex flex-wrap py-16">
//             <div className="w-full lg:w-1/2 px-4 ml-auto mr-auto text-center">
//                 <div>
//                     {/* <h1 className="font-md text-2xl text-gray-700 py-4">
//                         Events
//                     </h1> */}
//                     <h1 className="font-semibold text-4xl">
//                         Photos of November 2023
//                     </h1>
//                     {/* <p className="mt-4 text-lg text-gray-400 py-4">
//                         This is an evening where you will join many students from fields such as nurses, doctors, ... And you will be able to work and collaborate with them in a simulated environment.
//                     </p> */}
//                 </div>
//             </div>
//         </div>

//         <div className="flex justify-center pb-32">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-11/12 md:w-5/6 w-7/8">
//                 <div className="space-y-2">
//                     <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
//                     <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80" alt="Image Description" />
//                     <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description" />
//                 </div>
//                 <div className="space-y-2">
//                     <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="Image Description" />
//                     <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Image Description" />
//                 </div>
//                 <div className="space-y-2">
//                     <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
//                     <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt="Image Description" />
//                     <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
//                 </div>
//                 <div className="space-y-2">
//                     <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" alt="Image Description" />
//                     <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3465&q=80" alt="Image Description" />
//                 </div>
//             </div>
//         </div>
//     </>
// )

const GalleryCarousel = () => (
    <>
    {/* Title */}
    <div className="container relative mx-auto pt-16 pb-8">
            <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-1/2 px-4 ml-auto mr-auto text-center">
                    <div>
                        <h1 className="font-md text-2xl text-gray-700 py-4">
                            Gallery
                        </h1>
                        <h1 className="font-semibold text-4xl">
                            Photos of November 2023
                        </h1>
                        <p className="mt-4 text-lg text-gray-400 py-4">
                            A few photos of the 2023 November edition !
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div data-hs-carousel='{
    "loadingclassNamees": "opacity-0",
    "isAutoPlay": true
  }' className="relative mb-16">
            <div className="hs-carousel relative overflow-hidden w-full min-h-[350px] sm:min-h-[550px] bg-white rounded-lg">
                <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">

                    {
                        SCRUBS_NIGHT_NOVEMBER_2023.map((elt) => (
                            <>
                                <div className="hs-carousel-slide flex justify-center p-2">
                                    <img className="rounded-2xl w-auto h-full" src={elt.img_url} alt='img' key={elt.img_url} />
                                </div>
                            </>
                        ))
                    }

                </div>
            </div>

            <button type="button" className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
                <span className="text-2xl" aria-hidden="true">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                </span>
                <span className="sr-only">Previous</span>
            </button>
            <button type="button" className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
                <span className="sr-only">Next</span>
                <span className="text-2xl" aria-hidden="true">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </span>
            </button>

            {/* <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
                <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
                <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
            </div> */}
        </div>

    </>
)

const FAQ = () => (
    <>
        <div className="max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Frequently Asked Questions</h2>
                <p className="mt-1 text-gray-600 dark:text-gray-400">Answers to the most frequently asked questions.</p>
            </div>

            <div className="max-w-2xl mx-auto">
                <div className="hs-accordion-group">

                    {
                        FAQ_SCRUBS_NIGHT.map((elt) => (
                            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-two" key={elt.question}>
                                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                                    {elt.question}
                                    <svg className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    <svg className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                                </button>
                                <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                    <p className="text-gray-800 dark:text-gray-200">
                                        {elt.answer}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
)

// {
//     SCRUBS_NIGHT_NOVEMBER_2023.map((elt) => (
//         <>
//             <div className="hs-carousel-slide flex justify-center p-2">
//                 <img className="rounded-2xl w-auto h-full" src={elt.img_url} alt='img' />
//             </div>
//         </>
//     ))
// }