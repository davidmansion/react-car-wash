import { BsCarFrontFill } from "react-icons/bs"
import { Fragment } from "react"
import { ServiceCardData } from "../assets/ServiceCardData"

export const ServicesSection = () => {

    return (
        <section className="mt-16 lg:px-16 services-section">
            <h2 className="text-green mb-6 lg:text-5xl text-3xl font-bold uppercase">
                Szolgáltatások
            </h2>
            <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex justify-center">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">

                    {ServiceCardData.map((serviceCard, index) => (
                        <Fragment key={index}>
                            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow drop-shadow-lg flex flex-col">
                                <div>
                                    <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900">{serviceCard.title}</h5>
                                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-700">{serviceCard.price}</h5>
                                </div>
                                <ul className="text-lg font-semibold tracking-tight text-gray-500 list-disc ml-5">
                                    {serviceCard.services.map((service, index) => (
                                        <Fragment key={index}>
                                            <li>{service}</li>
                                        </Fragment>
                                    ))}
                                </ul>
                                <div className="mt-4"></div>
                                <div className="mt-auto">
                                    <p className="text-gray-500 font-semibold">Várható időtartam: {serviceCard.duration}</p>
                                </div>
                                <div>
                                    {serviceCard.icons.map((icon, index) => (
                                        <Fragment key={index}>
                                            {icon}
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                        </Fragment>
                    ))}

                </div>
            </div>
        </section>
    )
}