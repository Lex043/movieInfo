import React from 'react';

const RandomMovie = (): string => {
   const movies: string[] = [
       "A Time to Kill",
       "Anaconda",
       "Angels in the Outfield",
       "Awakenings",
       "A League of Their Own",
       "Amistad",
       "A Bronx Tale",
       "Marvin's Room",
       "Tucker and Dale vs Evil",
       "The Man from Earth",
       "Fast and Furious"
   ]

    return movies[Math.floor(Math.random() * movies.length)]
};

export default RandomMovie;