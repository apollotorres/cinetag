import './player.css'

export  const Player = () =>

{
    return(

<div className="playerVideo">

    
  <iframe className='video'
  width="560" height="315" src="https://www.youtube.com/embed/W9RLPJaLfCs?si=wlkcapKlCk-eerFG" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen></iframe>
</div>
       )

}