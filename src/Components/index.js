import Head from 'next/head';
import ImageGallery from '../components/ImageGallery';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Image Gallery Example</title>
        <meta name="description" content="An example of using Next.js Image component with picsum.photos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl font-bold mb-8 text-center">Image Gallery</h1>
        <ImageGallery />
      </main>
    </div>
  );
}