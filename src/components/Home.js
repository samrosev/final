import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [cats, setCats] = useState([]);
  const [text, setText] = useState("");
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const res = await fetch("https://api.thecatapi.com/v1/breeds");
        const data = await res.json();
        setCats(data);
      } catch (error) {
        console.error(error);
      }
    };

    setSearched(false);
    fetchCatData();
  }, []);

  const searchForCat = async () => {
    try {
      const res = await fetch(
        `https://api.thecatapi.com/v1/breeds/search?q=${text}`
      );
      const data = await res.json();
      setCats(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    searchForCat();
    setSearched(true);
  };

  return (
    <>
      {!cats ? (
        <h1 className="flex items-center justify-center text-white text-center px-5 text-3xl h-screen font-bold uppercase">
          Loading...
        </h1>
      ) : (
        <>
          <section className="p-8 max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="flex items-center justify-center text-center px-5 text-3xl font-bold lg:text-5xl text-white">
                Whiskers and Brews
              </h1>
              <p className="my-8 text-white">
                This application is powered by{" "}
                <a
                  href="https://thecatapi.com"
                  className="text-indigo-600 underline active:text-orange-400"
                >
                  The Cat Api
                </a>
              </p>

              <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto"
                autoComplete="off"
              >
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search for a cat / breed"
                  className="py-2 px-4 rounded shadow w-full bg-slate-400 text-white placeholder-white"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </form>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20">
              {!searched ? (
                cats.map((cat) => (
                  <Link
                    to={`/${cat.name}`}
                    key={cat.id}
                    className="bg-slate-700 p-4 rounded hover:bg-slate-600 transition-all duration-200"
                  >
                    <article>
                      <img
                        src={cat.image.url}
                        alt={cat.name}
                        loading="lazy"
                        className="rounded md:h-72 w-full object-cover"
                      />
                      <h3 className="text-white text-lg font-bold mt-4">
                        {cat.name}
                      </h3>
                      <p className="text-slate-400">Bred For: {cat.bred_for}</p>
                    </article>
                  </Link>
                ))
              ) : (
                <>
                  {cats.map((cat) => (
                    <Link
                      to={`/${cat.name}`}
                      key={cat.id}
                      className="bg-slate-700 p-4 rounded hover:bg-slate-600 transition-all duration-200"
                    >
                      <article>
                        <img
                          src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
                          alt={cat.name}
                          className="rounded md:h-72 w-full object-cover"
                        />
                        <h3 className="text-white text-lg font-bold mt-4">
                          {cat.name}
                        </h3>
                        <p className="text-slate-400">
                          Bred For: {cat.bred_for}
                        </p>
                      </article>
                    </Link>
                  ))}
                </>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
}
