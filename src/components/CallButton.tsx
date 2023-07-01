import { BsTelephoneFill } from "react-icons/bs"

export const CallButton = () => (
    <>
        <a className="bg-white p-2 px-4 rounded-full
        flex items-center text-green font-medium hover:bg-green hover:text-white cursor-pointer"
            href="tel:+36303438867">
            <BsTelephoneFill className="w-4 h-4 mr-2" />
            +36 30 343 8867
        </a>
    </>
)