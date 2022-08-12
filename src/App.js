import { useState,useEffect } from 'react';
import './App.css';
import Todo from './Todo'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

// fdd90612 key for movie api
const API_URL="http://www.omdbapi.com?apikey=fdd90612";
const movie1= {Title: 'Italian Spiderman', Year: '2007', imdbID: 'tt2705436', Type: 'movie', 
Poster: "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"}
function App() {
  const [movies,setMovies]=useState([]);
  const [searchTerm,setSearchTerm]=useState('')
  const searchMovies=async(title)=>{
    const response=await fetch(`${API_URL}&s=${title}`)
   
   // we use async here as it take time to give response
  const data=await response.json() ;
     console.log (data)
    setMovies(data.Search)}
 useEffect(()=>{
  searchMovies('spiderman')

 },[]) //useeffect acts as soon as the page is loaded,it has 2 parameters a cb fn and a empty array
  return (
    <div className='app'>
      <h1>MovieWorld</h1>
      <div className='search'>
        <input
         placeholder='search for movies'
         value={searchTerm}
         onChange={(e)=>setSearchTerm(e.target.value)}/>
         <img
         src={SearchIcon}
         alt="search"
         onClick={()=>{searchMovies(searchTerm)}}/>
         </div>
         {
          movies?.length>0?(
<div className='container'>
  {movies.map((movie)=>(
         <MovieCard movie={movie}/>
         ))}
         </div>
         
          ):(
            <div className='empty'>
              <h2>No Movies</h2>
              </div>
          )
         }
         
      </div>
      
  )
}



export default App;
