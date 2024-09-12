import Image from 'next/image';

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <div key={num} className="relative w-full h-64">
          <Image
            src={`https://picsum.photos/800/600?random=${num}`}
            alt={`Random landscape ${num}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;