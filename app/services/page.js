import Image from "next/image";
import styles from "../styles/service.module.css";

export default function Services() {
    return (
        <div className={styles.container}>
            <div className={styles.backgroundImage}></div>
                <div className={styles.services}>
                    <div className={styles.titre}>                        
                        <h1>mon offre de services</h1>
                        <p>Voici les prestations sur laquelles je peux intervenir.</p>
                    </div>
                    <div className={styles.servicesContainer}>
                        <div className={styles.column}>
                            <Image src='/ecran-de-television.png' width={50} height={50} alt='écran de télévsion'></Image>
                            <h3>ux design</h3>
                            <p>L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir
                                une expérience de navigation optimale à l'internaute.</p>
                        </div>
                        <div className={styles.column}>
                            <Image src='/code.png' width={50} height={50} alt='fichier HTML'></Image>
                            <h3>développement web</h3>
                            <p>Le développement de sites web repose sur l'utilisation des langages
                                HTML, CSS, JavaScript et PHP</p>
                        </div>
                        <div className={styles.column}>
                            <Image src='/dollar.png' width={50} height={50} alt='loupe avec un dollar'></Image>
                            <h3>référencement</h3>
                            <p>Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre des techniques
                                en oeuvre pour <i>améliorer sa position</i> dans les moteurs de recherche</p>
                        </div>
                    </div>
                </div>    
        </div>
    );
}