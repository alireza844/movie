import React from 'react';

const Movies = ({moviesData}) => {
    return (
        <div className='flex justify-center items-center sm:gap-10 md:gap-10 lg:gap-20 flex-wrap bg-slate-900 text-white py-20'>
            {
                moviesData.map(movie => (
                    <div key={movie.imdbID} className='w-72 p-2 rounded-md shadow-2xl transition-all hover:scale-110 bg-slate-800' >
                        <div className='w-full'>
                            <img className='w-72 h-96 rounded-md transition-all hover:scale-105 shadow' src={movie.Poster} alt={movie.Title} />
                        </div>
                        <div className='mt-2'>
                            <h1 className='text-center mb-2 font-extrabold text-xl'>{movie.Title}</h1>
                            <div className='flex justify-between items-center p-1 opacity-60'>
                                <p>{movie.Year}</p>
                                <p>{movie.imdbID}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Movies;

// https://rapidapi.com/goodmoviesaps/api/movie-details1