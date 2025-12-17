import { Link } from 'react-router-dom';
import styles from './CardGG.module.scss';
import iconeFavoritar from './favoritar.png';
import { Botao } from 'components/botaofav/botao';
import { Favorito } from 'pages/favoritos';





function CardGG({ id, nome, capa, desc,qualidade }) {
    return (

        <div className='filme'>

        <div className={styles.container}>
        <Link to={'/Player'}>

    <img src={capa} alt={nome} className={styles.capa} />

   </Link>

        
        <div className={styles.infos}>

                <h2 className={styles.titulo}>{nome}</h2>

                <div className={styles.toinvisivel}>
                    <p className='desc'>{desc}</p>
                  <button>
                             sla oq 

                 </button> 

                                    </div>
        </div>




        </div>


 
        </div>

         
    )
    
}

export default CardGG;


