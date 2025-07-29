
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovie=()=>{//fetch data from api and update store

      const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.omdbapi.com/?s=star+wars&apikey=a4534cb3"
      );
      const data = await response.json();
      // Do something with data
      console.log(data.Search);
    //   console.log(data);
      dispatch(addNowPlayingMovies(data.Search));
    };
    fetchData();
  }, []);

}
export default useNowPlayingMovie