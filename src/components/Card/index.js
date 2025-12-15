import { StarRating } from 'components/StarRting';
import styles from './Card.module.scss';
import iconeFavoritar from './favoritar.png';

function Card({ id, titulo, capa, desc,qualidade }) {
    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa} />
        
        <div className={styles.infos}>
            <h2 className='titulo'>{titulo}</h2>
            
        </div>

            
            <img src={iconeFavoritar}
                alt="Favoritar filme"
                className={styles.favoritar} />
        </div>


            
    )
    
}

export default Card;