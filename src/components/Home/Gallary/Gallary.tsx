// react imports


// third party imports




export const Gallary = () => {
    return (
        <div className="bg-gray-200 mx-auto px-5 md:py-2 py-8 lg:px-16 lg:py-12">
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-1/2 p-1 md:p-2 hover:-translate-y-5 duration-700">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="/photos/home/gallary/24.jpg" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2 hover:-translate-y-5 duration-700">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="/photos/home/gallary/25.jpg" />
                    </div>
                    <div className="w-full p-1 md:p-2 hover:translate-y-5 duration-700">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="/photos/home/gallary/20.jpg" />
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap duration-700">
                    <div className="w-full p-1 md:p-2 grid grid-cols-3 gap-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center row-span-2 hover:-translate-y-5 duration-700"
                            src="/photos/home/gallary/27.jpg" />
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center hover:-translate-y-5 duration-700"
                            src="/photos/home/gallary/26.jpg" />
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center hover:-translate-y-5 duration-700"
                            src="/photos/home/gallary/08.jpg" />
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center hover:grayscale duration-700"
                            src="/photos/home/gallary/18.jpg" />
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center hover:translate-x-5 duration-700"
                            src="/photos/home/gallary/07.jpg" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2 hover:translate-y-5 duration-700">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="/photos/home/gallary/21.jpg" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2 hover:translate-y-5 duration-700">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="/photos/home/gallary/19.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
