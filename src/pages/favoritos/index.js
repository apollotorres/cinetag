import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import styles from './Favoritos.module.css';

function Favoritos() {
    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                <Card id='1' titulo='gato miausculoso' capa='https://tse1.explicit.bing.net/th/id/OIP.wosYX6ibhXHZvXn4NbpMwgAAAA?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3' />
            </section>

        </>
    )
}

export default Favoritos;