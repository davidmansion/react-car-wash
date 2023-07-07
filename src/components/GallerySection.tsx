import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

export const GallerySection = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [imageIndex, setImageIndex] = useState<number>(0)

    const handleImageClick = (imageId: number) => {
        setIsOpen(true)
        setImageIndex(imageId - 1)
    }

    type ImageProps = {
        id: number
        src: string
        large?: boolean
    }

    const images: ImageProps[] = [
        {
            id: 1,
            src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
        },
        {
            id: 2,
            src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
        },
        {
            id: 3,
            src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
            large: true
        },
        {
            id: 4,
            src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
            large: true
        },
        {
            id: 5,
            src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
        },
        {
            id: 6,
            src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
        }
    ]

    return (
        <>
            <Lightbox
                open={isOpen}
                index={imageIndex}
                close={() => setIsOpen(false)}
                slides={images}
                plugins={[Fullscreen, Zoom, Counter]}
            />

            <div className="container mx-auto py-2 lg:px-32 lg:pt-24">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex lg:w-1/2 flex-wrap justify-center">
                        {images.slice(0, images.length / 2).map((image, index) => (
                            <div
                                key={index}
                                className={`p-1 md:p-2 drop-shadow-md cursor-pointer ${image.large ? 'w-full' : 'lg:w-1/2'}`}
                                onClick={() => handleImageClick(image.id)}
                            >
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={image.src}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex lg:w-1/2 flex-wrap justify-center">
                        {images.slice(images.length / 2).map((image, index) => (
                            <div
                                key={index}
                                className={`p-1 md:p-2 drop-shadow-md cursor-pointer ${image.large ? 'w-full' : 'lg:w-1/2'}`}
                                onClick={() => handleImageClick(image.id)}
                            >
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={image.src}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}