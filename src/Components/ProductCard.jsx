import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-md flex flex-col h-full">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-2 flex-grow">{product.description}</p>
      <p className="text-lg font-bold mb-2">${product.price.toFixed(2)}</p>
      <Link 
        href={`/products/${product.id}`}
        className="text-blue-500 hover:underline mt-auto"
      >
        View Details
      </Link>
    </div>
  );
}