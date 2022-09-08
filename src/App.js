import { useState } from "react";

//api
import { fetchAPI } from "./api/api";

//components
import Movies from "./components/Movies";


export default function App() {
  
  const [searchInput, setSearchInput] = useState({title: '', year: '', type: ''});
  const [searchData, setSearchData] = useState([])

  const searchInputChanger = event => {
    setSearchInput({...searchInput, [event.target.name]: event.target.value})
    console.log(searchInput)
  }

  const fetchDataHandler = async() => {
    searchInput.title ? setSearchData(await fetchAPI(searchInput)) : alert('please Fill Title Box');
    setSearchInput({title: '', year: '', type: ''})
  }

  return (
    <div className='bg-slate-900 text-white h-screen'>
      <div className='flex flex-col'>
        <div  className='flex justify-center items-center'>
          <h1 className='p-4 my-8 bg-slate-800 rounded-2xl shadow-lg font-extrabold italic sm:text-2xl md:text-4xl lg:text-6xl'>Search Movies Here... =)</h1>
        </div>
        <div className='flex sm:flex-col lg:flex-row justify-center items-center'>
          <input className='sm:w-11/12 md:w-2/5 lg:w-2/12 bg-slate-800 m-0.5 p-1.5 rounded-lg text-center focus:bg-slate-700' placeholder='Title... (required)' type="text" name="title" value={searchInput.title} onChange={searchInputChanger} />
          <input className='sm:w-11/12 md:w-2/5 lg:w-2/12 bg-slate-800 m-0.5 p-1.5 rounded-lg text-center focus:bg-slate-700' placeholder='Year... (optional)' type="number" name="year" value={searchInput.year} onChange={searchInputChanger} />
          <select className='sm:w-11/12 md:w-2/5 lg:w-2/12 bg-slate-800 m-0.5 p-1.5 rounded-lg text-center focus:bg-slate-700' name="type" value={searchInput.type} onChange={searchInputChanger} >
            <option value="none" defaultValue hidden>Select Type</option>
            <option value="movie">movie</option>
            <option value="series">series</option>
            <option value="episode">episode</option>
          </select>
        </div>
        <div className='flex justify-center items-center'>
          <button className='my-6 py-2 px-4 bg-blue-600 w-fit text-xl font-bold rounded-md transition-all hover:scale-105 hover:text' onClick={fetchDataHandler} >Search</button>
        </div>
      </div>


      {searchData.length ? <Movies moviesData={searchData} /> : <h1 className='text-center mt-32'>Results Loaded After Searching ...</h1>}

      <h1 className='p-2 w-full bottom-0 bg-slate-500 text-center'>copy right by Alireza</h1>

    </div>
  );
}