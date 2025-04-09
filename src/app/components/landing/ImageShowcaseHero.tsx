// components/landing/ImageGrid.tsx
import Image from "next/image";

export default function ImageGrid() {
  const images = [
    {
      src: "/assets/imgs/bg-5.jpg",
      alt: "Modern clinic exterior",
      caption: "State-of-the-art Facilities",
    },
    {
      src: "/assets/imgs/bg-2.jpg",
      alt: "Doctor consulting with patient",
      caption: "Personalized Care",
    },
    {
      src: "/assets/imgs/bg-3.jpg",
      alt: "Advanced medical equipment",
      caption: "Cutting-edge Technology",
    },
    {
      src: "/assets/imgs/bg-4.jpg",
      alt: "Healthcare team meeting",
      caption: "Expert Medical Teams",
    },
  ];

  return (
    <div className="container mx-auto h-full py-4 px-4 sm:px-6 lg:px-8">
      <div className="grid h-full grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative h-24 overflow-hidden rounded-lg shadow-md sm:h-full"
          >
            <Image
              src={image.src}
              alt={image.alt}
              height={100}
              width={1000}
              style={{ objectFit: "cover" }}
              className="transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 left-0 right-0 p-2 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-sm font-medium sm:text-base">
                {image.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
