function AnimeDisplay({ data, setAnimeInfo, animeComponent,handleList }) {
  const AddToList = animeComponent;

  return (
    <>
      {!data
        ? ""
        : data.map((item,index) => (
            <div key={index} className="card" onClick={() => setAnimeInfo(item)}>
              <img src={item.images.jpg.large_image_url} alt="" />
              <div className="cardHeading">
                <h3>{item.title}</h3>
              </div>
              <div className="overlay">
                <h4>{item.title_japanese}</h4>
                <h5>SYNOPSIS</h5>
                <div className="synopsis">
                  <p>{item.synopsis}</p>
                </div>
                <div onClick={()=>handleList(item)}>
                  <AddToList />
                </div>
              </div>
            </div>
          ))}
    </>
  );
}
export default AnimeDisplay;
