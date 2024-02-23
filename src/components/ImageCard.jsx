import { useMemo } from "react";

const ImageCard = ({path, title, createdAt}) => {
  const timestamp = useMemo(() =>{
    const date = `${new Date(createdAt.seconds*1000)}`.split(" ")
    return `${date[1]} ${date[2]} ${date[3]}`
  },[])
    return (
        <div className="lg:w-1/3 sm:w-1/2 p-4 ">
            <div className="flex relative ">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                src={path}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-70">
                <h2 className="tracking-widest text-sm title-font font-bold text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {title}
                </h1>
                <p className="leading-relaxed">
                  {timestamp}
                </p>
              </div>
            </div>
          </div>
    );
};

export default ImageCard;