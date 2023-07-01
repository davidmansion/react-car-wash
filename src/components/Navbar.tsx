import { Disclosure } from "@headlessui/react"
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import { Link } from "react-scroll"
import { CallButton } from "./CallButton"

export const Navbar = () => {

    const navigation = [
        { name: 'Főoldal', href: 'main-section', current: true },
        { name: 'Szolgáltatások', href: 'services-section', current: false },
        { name: 'Kapcsolat', href: 'contact-section', current: false },
    ]


    return (
        <Disclosure as="nav" className="bg-none fixed w-full backdrop-blur-md z-40">
            {({ open }) => (
                <>
                    <div className="mx-auto lg:px-8 pr-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 right-0 flex items-end lg:hidden">
                                <Disclosure.Button
                                    className="inline-flex items-end justify-end rounded-md p-2 text-gray-400 hover:bg-gray-700
                                 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Menü megnyitása</span>
                                    {open ? (
                                        <AiOutlineClose className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <FaBars className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="text-4xl lg:text-6xl lg:ml-8 font-bold text-green cursor-pointer">
                                <Link
                                    to="main-section"
                                    offset={-70}
                                    duration={500}
                                    smooth={true}
                                    spy={true}
                                >
                                    Maros-Wax
                                </Link>
                            </div>
                            <div className="flex flex-1 items-end justify-end sm:items-stretch">
                                <div className="hidden sm:ml-6 lg:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                offset={-70}
                                                duration={500}
                                                smooth={true}
                                                spy={true}
                                                className="rounded-md px-3 py-2 text-md font-medium cursor-pointer"
                                                activeClass="active"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                        <CallButton />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <Disclosure.Panel className="lg:hidden mr-8 backdrop-blur-md rounded-md mt-2">
                        <div className="space-y-1 px-2 pb-3 pt-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    offset={-70}
                                    duration={500}
                                    smooth={true}
                                    spy={true}
                                    className="rounded-md px-3 py-2 text-md font-medium cursor-pointer"
                                    activeClass="active"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="flex justify-center">
                                <CallButton />
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}