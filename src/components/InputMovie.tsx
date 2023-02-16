import { useState, useEffect } from "react";
import randomMovie from "../utils/randomMovie";
import Movies from "./Movies";
import Spinner from "./Spinner";

const InputMovie = () => {
  const [text, setText] = useState<string>("");
  const [data, setData] = useState(randomMovie());
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setData(text);
    setText("");
  };

  const MOVIE_KEY = import.meta.env.VITE_MOVIE_KEY;

  const url = `https://www.omdbapi.com/?s=${data}&apikey=${MOVIE_KEY}`;

  useEffect(() => {
    const abortCont = new AbortController();
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(url, { signal: abortCont.signal });
        const movieData = await response.json();
        setResults(movieData["Search"]);
        console.log(results);
        if (!movieData.ok) {
          throw new Error(movieData.Error);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          if (err.name === "AbortError") {
            console.log("successfully aborted");
          }
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    return () => abortCont.abort();
  }, [data]);

  return (
    <section className="mt-6 mx-auto w-4/5 lg:w-3/6">
      <form
        onSubmit={handleSubmit}
        action="submit"
        className="flex w-full gap-2 justify-center"
      >
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
          value={text}
          type="text"
          className="border-green-600 border-[1px] rounded-md p-2 outline-none md:flex-1"
        />
        <button className="bg-green-600 hover:bg-green-800 text-white p-2 rounded-md">
          Search
        </button>
      </form>

      {loading ? <Spinner /> : results && <Movies results={results} />}

      {error && <div className="font-bold text-center">{error}</div>}
    </section>
  );
};

export default InputMovie;
