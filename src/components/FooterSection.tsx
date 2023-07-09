import { BsFacebook } from "react-icons/bs"
import { Link } from "react-scroll"

export const FooterSection = () => (
    <>
        <footer className="mt-16">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <span className="self-center text-6xl font-semibold whitespace-nowrap text-green cursor-pointer">
                            <Link
                                to="main-section"
                                offset={-70}
                                duration={500}
                                smooth={true}
                                spy={true}
                            >
                                Maros-Wax
                            </Link>
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div></div>
                        <div></div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold uppercase text-green">Nyitvatartás</h2>
                            <ul className="text-gray-600 font-medium">
                                <li className="mb-4">
                                    Hétfő-Péntek: 8:00-16:00
                                </li>
                                <li className="mb-4">
                                    Szombat: Egyeztetett időpontban
                                </li>
                                <li>
                                    Vasárnap: Zárva
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023 Maros-Wax. Minden jog fenntartva.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a href="https://www.facebook.com/profile.php?id=100057525306406" target="_blank" rel="noreferrer"
                            className="text-gray-500 hover:text-gray-900">
                            <BsFacebook className="w-6 h-6" />
                            <span className="sr-only">Facebook</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </>
)