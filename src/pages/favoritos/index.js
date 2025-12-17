import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import styles from './Favoritos.module.css';
import CardGG from 'components/Card/cardgigante';








export const Favorito = ({nome, capa, desc, favoritar}) => 
    
{

                 console.log(nome, capa, desc)

    if (favoritar === true) {

        return <CardGG  nome={nome} capa={capa} desc={desc} />


    }


}


function Favoritos() 

{
    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
               
            <Favorito
            favoritar={true}
            nome='ainda'
            desc='desc'
            capa='https://th.bing.com/th/id/OIP.IUlPlMBqidCJDCO_PZEOWAHaD0?w=326&h=179&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1'
            
            ></Favorito>

            </section>

        </>
    )
}

export default Favoritos;
