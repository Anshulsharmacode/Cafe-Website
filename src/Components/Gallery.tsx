import { FC } from 'react';
import Image from 'next/image';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1598454449315-ec19aa3e4a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGp1bmdsZSUyMGNhZmV8ZW58MHx8fHwxNjE5MTMwNjkz&ixlib=rb-1.2.1&q=80&w=800',
    alt: 'Jungle Cafe Seating',
    sizes: 'w-full md:w-1/2 lg:w-1/3',
  },
  {
    src: 'https://images.unsplash.com/photo-1534238918966-1ba99a91d54d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fGp1bmdsZSUyMGNhZmV8ZW58MHx8fHwxNjE5MTMwNjkz&ixlib=rb-1.2.1&q=80&w=800',
    alt: 'Cafe Interior with Plants',
    sizes: 'w-full md:w-1/2 lg:w-1/4',
  },
  {
    src: 'https://images.unsplash.com/photo-1525397342181-3b14f9e18e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fGp1bmdsZSUyMGNhZmV8ZW58MHx8fHwxNjE5MTMwNjkz&ixlib=rb-1.2.1&q=80&w=800',
    alt: 'Outdoor Jungle Cafe',
    sizes: 'w-full md:w-1/4 lg:w-1/2',
  },
  {
    src: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fGp1bmdsZSUyMGNhZmV8ZW58MHx8fHwxNjE5MTMwNjkz&ixlib=rb-1.2.1&q=80&w=800',
    alt: 'Cozy Jungle Cafe Corner',
    sizes: 'w-full md:w-1/2 lg:w-1/4',
  },
];

const Gallery: FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-center text-4xl font-extrabold text-yellow-500 mb-10">Jungle Cafe Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg group ${image.sizes}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={800}
              height={800}
              className="transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-white text-lg font-semibold px-4">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
