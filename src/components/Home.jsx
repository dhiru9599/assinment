import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "./Loader";
import Error from "./Error";
import Card from "./Card";

const Home = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCardData = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const data = await res.json();
      setItems((prev) => [...prev, ...data]);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <div className="bg-purple-200">
      <p className="text-4xl text-center text-purple-700 mt-3 lg:mt-7 lg:mb-7 font-bold w-[100vw]">
        Products
      </p>
      <div className="flex flex-wrap justify-evenly w-[95vw] lg:w-[75vw] mx-auto gap-4">
        {items.map((product, idx) => {
          return <Card key={idx} data={product} />;
        })}
      </div>
      {loading && (
        <div className="flex">
          <Loader />
        </div>
      )}
      {error && <Error message={error} />}
    </div>
  );
};

export default Home;
