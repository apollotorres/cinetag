import styles from './CardGG.module.scss';
import iconeFavoritar from './favoritar.png';


function CardGG({ id, nome, capa, desc,qualidade }) {
    return (

        <div className='filme'>

        <div className={styles.container}>

    <img src={capa} alt={nome} className={styles.capa} />


        
        <div className={styles.infos}>

                <h2 className={styles.titulo}>{nome}</h2>

                <div className={styles.toinvisivel}>
                    <p className='desc'>{desc}</p>
                    <button classename ='saberMais'>Ver Mais</button>
                </div>

        </div>


        </div>

 
        </div>


            
    )
    
}

export default CardGG;

