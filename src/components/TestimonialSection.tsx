import { AiOutlineFieldTime } from "react-icons/ai"
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2"
import { HiMiniArrowsRightLeft } from "react-icons/hi2"
import { BiSprayCan } from "react-icons/bi"

export const TestimonialSection = () => (
    <section className="mt-16 lg:px-16 testimonial-section">
        <h2 className="text-green mb-6 lg:text-5xl text-3xl font-bold uppercase">
            Miért válasszon minket?
        </h2>

        <div className="container my-24 mx-auto md:px-6 grid gap-x-6 md:grid-cols-4 lg:gap-x-12">
            <div className="mb-12 md:mb-0">
                <div className="mb-6 flex justify-center">
                    <AiOutlineFieldTime className="w-32 h-32 text-green opacity-75" />
                </div>
                <h5 className="mb-2 text-lg font-bold">Több, mint 10 év tapasztalat</h5>
                <p className="mb-4 font-semibold">
                    Cégünk 2009 óta, megállás nélkül dolgozik azon, hogy szebbé varázsolja járműveit.
                </p>
            </div>
            <div className="mb-12 md:mb-0">
                <div className="mb-6 flex justify-center">
                    <HiOutlineWrenchScrewdriver className="w-32 h-32 text-green opacity-75" />
                </div>
                <h5 className="mb-2 text-lg font-bold">Modern géppark</h5>
                <p className="mb-4 font-semibold">
                    Gépparkunk folyamatosan fejlődik és megújul, hogy mindig a legmodernebb eszközökkel tudjunk dolgozni.
                </p>
            </div>
            <div className="mb-12 md:mb-0">
                <div className="mb-6 flex justify-center">
                    <HiMiniArrowsRightLeft className="w-32 h-32 text-green opacity-75" />
                </div>
                <h5 className="mb-2 text-lg font-bold">Hozom-viszem szolgáltatás</h5>
                <p className="mb-4 font-semibold">
                    Amennyiben nem tudja megoldani járműve mozgatását, Nagymaroson belül rugalmassan segítünk elhozni és visszavinni házához.
                </p>
            </div>
            <div className="mb-12 md:mb-0">
                <div className="mb-6 flex justify-center">
                    <BiSprayCan className="w-32 h-32 text-green opacity-75" />
                </div>
                <h5 className="mb-2 text-lg font-bold">Kerámia bevonat</h5>
                <p className="mb-4 font-semibold">
                    Elérhető nálunk prémium kerámia bevonat, amely akár évekig védi autója fényezését.
                </p>
            </div>
        </div>
    </section>
);