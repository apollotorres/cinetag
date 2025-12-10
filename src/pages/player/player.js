import './player.css'

export  const Player = () =>

{
    return(

<div className="playerVideo">

    <h1>player</h1>
    <iframe width="560" height="315" 
    src="https://www.youtube.com/embed/Jh9Ua1UtYGY?si=IkimIGH-EOIZTtfB" 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen></iframe>
</div>
       )

}