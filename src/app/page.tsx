"use client";

import { useEffect } from "react";
import x from "./filmes.json";

export interface Filme {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  Response: string
  Images: string[]
}

export default function Home() {
  const filmes = Object.values(x) as Filme[];

  return (
    <main className="flex min-h-screen flex-col itens-center justify-between h-svh">
      <div className="flex text-center flex-2 bg-red-500 text-white h-11 w-screen">
        Filmes
      </div>
      <div className="flex flex-1 bg-blue-500">
        <div className="grid grid-cols-2 gap-2">
          {filmes.map((filme) => (
            <div>
              <img src={filme.Images[0]} />
            <div key={filme.imdbID} className="border rounded-lg">
              {filme.Title}
              {filme.Plot}
            </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
