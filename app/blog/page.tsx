import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

interface PostData {
  id: string;
  fileName: string;
  content: string;
}

function BlogPage() {
  const posts = getAllPosts();

  return (
    <ul>
      {posts.map(({ fileName }) => {
        const id = fileName.replace(/\.md$/, "");
        return (
          <li key={id}>
            <Link href={`/blog/${id}`}>{id}</Link>
          </li>
        );
      })}
    </ul>
  );
}

import React from "react";

const CardGrid = () => {
  const cards = [
    {
      title: "PLANNING THE UNPREDICTABLE",
      subtitle: "Sònia Colomo Sala // Eloi Miquel Arcarons",
      imageUrl: "./fillerim.jpg",
    },
    {
      title: "AUSTRIA UNCOVERED",
      subtitle: "Discovering Lebensgefühl in Austria",
      imageUrl: "URL_TO_IMAGE2",
    },
    {
      title: "MOMENT OF COMMITMENT",
      subtitle: "Anna von Boetticher // Alex Dawson",
      imageUrl: "URL_TO_IMAGE3",
    },
    {
      title: "STRONGER WITH TIME",
      subtitle: "The story of the watchmaker",
      imageUrl: "URL_TO_IMAGE4",
    },
    {
      title: "LIGHT LINES",
      subtitle: "The art of minimalism",
      imageUrl: "URL_TO_IMAGE5",
    },
  ];

  return (
    <div className="container mx-auto p-4 my-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative card bg-base-100 shadow-xl overflow-hidden"
          >
            <figure>
              <img
                src={"./fillerim.jpg"}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="absolute bottom-0 text-center left-0 w-full bg-black bg-opacity-70 text-white p-4">
              <h2 className="text-lg uppercase font-light text-gray-300">
                {card.title}
              </h2>
              <p className="text-sm font-sans italic">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
