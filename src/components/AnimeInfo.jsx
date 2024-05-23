function AnimeInfo(props){
    const{title,images:{jpg:{image_url}},rank,score,popularity,source,rating,members,status,duration}=props.animeInfo
    return(
        <>
        <div className="animeContent">
        <h2>{title}</h2>
        <img src={image_url} alt="" />
        <div >
        <h4>#Rank: {rank}</h4>
        <h4>#Score: {score}</h4>
        <h4>#Popularity: {popularity}</h4><hr /><br />
        <h5>#Source: {source}</h5>
        <h5>#Rating: {rating}</h5>
        <h5>#Members: {members}</h5>
        <h5>#Status: {status}</h5>
        <h5>#Duration: {duration}</h5>
        </div>
        </div>
        
      
        </>
    )
}
export default AnimeInfo