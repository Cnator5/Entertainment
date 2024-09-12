// components/Testimonials.js
import Image from 'next/image';

const testimonials = [
  {
    name: 'John Doe',
    role: 'Homeowner',
    content: 'The Starlink installation was quick and easy. Now I have high-speed internet in my rural area!',
    avatar: 'https://picsum.photos/200/200?random=6',
  },
  {
    name: 'Jane Smith',
    role: 'Business Owner',
    content: 'DSTV has been a game-changer for my restaurant. Customers love watching sports events here.',
    avatar: 'https://picsum.photos/200/200?random=7',
  },
  {
    name: 'Pierre Dubois',
    role: 'Expat',
    content: 'Canal+ keeps me connected to home. The French content is excellent and the streaming is smooth.',
    avatar: 'https://picsum.photos/200/200?random=8',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}