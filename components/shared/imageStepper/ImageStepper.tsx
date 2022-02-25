import { useState } from "react";
import { Asset } from "contentful";
import Image from "next/image";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

type Props = {
    images: Asset[];
};

export const ImageStepper: React.FC<Props> = ({ images }) => {
    const [currentImage, setCurrentImage] = useState<number>(0);

    const renderImages = images.map((e, index) => {
        const { description, file } = e.fields;
        return (
            <Image
                key={index}
                src={`https:${file.url}`}
                alt={description}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
                placeholder="empty"
            />
        );
    });

    const handleStepper = (increment: number) =>
        setCurrentImage((currentImage) => currentImage + increment);

    return (
        <div className="relative">
            <div className="relative w-full h-96 bg-white shadow-md rounded-md">
                {renderImages[currentImage]}
            </div>
            <div className="absolute flex gap-2 right-2 bottom-2">
                <button
                    onClick={() => handleStepper(-1)}
                    disabled={currentImage == 0}
                    className="text-3xl disabled:text-slate-500 text-slate-900"
                >
                    <IoIosArrowDropleftCircle />
                </button>
                <button
                    onClick={() => handleStepper(1)}
                    disabled={currentImage == renderImages.length - 1}
                    className="text-3xl disabled:text-slate-500 text-slate-900"
                >
                    <IoIosArrowDroprightCircle />
                </button>
            </div>
        </div>
    );
};
