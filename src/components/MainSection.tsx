import { BsArrowRightShort } from "react-icons/bs"
import { Link } from "react-scroll"

export const MainSection = () => (
    <>
        <section className="main-bg" id="main-section">
            <div className="w-full h-full absolute left-0 top-0 z-0 lg:hidden">
                <img src="/assets/images/mobile-background.png" alt="mobile background"/>
            </div>
            <div className="flex flex-col w-full h-full justify-center items-start text-green lg:ml-16 relative z-10">
                <div className="text-5xl lg:text-8xl lg:mt-0 mt-80">
                    <p>Kézi</p>
                    <p className="font-bold">autómosó</p>
                    <p>és <span className="font-bold">kozmetika</span></p>
                </div>
                <div className="mt-2 text-xl">
                    <p>Szolgáltatásainkról minden részletes információt megtalál</p>
                    <p>az alábbi menüpont alatt.</p>
                </div>
                <div>
                    <button className="flex items-center bg-green text-white text-lg font-bold p-3 px-4
                     rounded-full mt-4 hover:bg-white hover:text-green hover:border border-green">
                       <Link
                        to="services-section"
                        offset={-70}
                        duration={500}
                        smooth={true}
                        spy={true}
                       >
                       Szolgáltatások
                       </Link>
                        <BsArrowRightShort className="w-6 h-6 mt-1" />
                    </button>
                </div>
            </div>
        </section>
    </>

)