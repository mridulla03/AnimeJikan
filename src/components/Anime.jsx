import { useEffect, useState } from "react";
import "../components/style.css";
import { animeWeb } from "../service/animeWeb";
import AnimeDisplay from "./AnimeDisplay";
import AnimeInfo from "./AnimeInfo";
import AddToList from "./AddToList";
import RemoveFromList from "./RemoveFromList";

function Anime() {
  const [anime, setAnime] = useState();
  const [params, setParams] = useState();
  const [animeInfo, setAnimeInfo] = useState();
  const [myAnimeList, setMyAnimeList] = useState([]);
  const addTo = (anime) => {
    const index = myAnimeList.findIndex((myanime) => {
      return myanime.mal_id === anime.mal_id;
    });
    if (index < 0) {
      const newArray = [...myAnimeList, anime];
      setMyAnimeList(newArray);
    }
  };
  const removeFrom = (anime) => {
    const newArray = myAnimeList.filter((myanime) => {
      return myanime.mal_id !== anime.mal_id;
    });
    setMyAnimeList(newArray);
  };
  useEffect(() => {
    animeWeb(params).then((res) => {
      const data = res;
      console.log("Anime....", data);
      setAnime(data);
    });
  }, [params]);
  return (
    <>
      <div className="header">
        <h1>My Anime List</h1>
        <div className="header_search">
          <input
            type="search"
            placeholder="Search you anime here"
            onChange={(e) => {
              setParams(e.target.value);
              console.log(e.target.value);
            }}
          />
         {/* <button  onClick={(e) => {
              setParams(e.target.value);
              console.log(e.target.value);
            }}>Search</button> */}
        </div>
      </div>
      <div className="container">
        <div className="animeInfo">
          {/* <AnimeInfo /> */}
          {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
        </div>
        <div className="animeRow">
          <h2 className="text-heading">Anime</h2>
          <div className="row">
            <AnimeDisplay
              data={anime}
              setAnimeInfo={setAnimeInfo}
              handleList={(anime) => addTo(anime)}
              animeComponent={AddToList}
            />
          </div>
          <br /><br />
          <h2 className="text-heading">My Anime List</h2>
          <div className="row">
            <AnimeDisplay
              data={myAnimeList}
              setAnimeInfo={setAnimeInfo}
              handleList={(anime) => removeFrom(anime)}
              animeComponent={RemoveFromList}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Anime;
