import Image from "next/image";
import styles from "../styles/realisations.module.css";

export default function Services() {
    return (
        <div className={styles.container}>
            <div className={styles.backgroundImage}></div>
            <div className={styles.titre}>
                <h2>portfolio</h2>
                <p>Voici quelques-unes de mes réalisations.</p>
            </div>
            <div className={styles.portfolioContainer}>
                <div id="project1" className={`card text-center ${styles.card}`}>
                    <div className= "card-header" style={{ position: "relative" ,width: "100%", height: "300px"}}>
                        <Image 
                        src="/portfolio/fresh-food.jpg"
                        width={200}
                        height={100}
                        alt="Fresh food"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderTopLeftRadius: "15px",
                            borderTopRightRadius: "15px",
                        }}
                        />
                    </div>
                    <div className= "card-body">
                        <h5 className= "card-title">Fresh food</h5>
                        <p className= "card-text">Réalisation d'un site avec commande en ligne.</p>
                        <a  href="#" 
                            className= "btn custom-btn"
                            style={{
                                backgroundColor: "white",
                                border: "1px solid rgba(13, 110, 253, 1)", 
                                borderRadius: "3px",
                                color: "rgba(13, 110, 253, 1)",
                            }}>Voir</a>
                    </div>
                    <div className= "card-footer text-body-secondary">Site réalisé avec PHP et MySQL</div>
                </div>

                <div id="project2" className={`card text-center ${styles.card}`}>
                    <div className= "card-header" style={{ position: "relative" ,width: "100%", height: "300px"}}>
                        <Image 
                        src="/portfolio/restaurant-japonais.jpg" 
                        width={200}
                        height={100}
                        alt="Fresh food"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderTopLeftRadius: "15px",
                            borderTopRightRadius: "15px",
                        }}/>
                    </div>
                    <div className= "card-body">
                        <h5 className= "card-title">Restaurant Akira</h5>
                        <p className= "card-text">Réalisation d'un site vitriine.</p>
                        <a  href="#" 
                            className= "btn btn-primary"
                            style={{
                                backgroundColor: "white",
                                border: "1px solid rgba(13, 110, 253, 1)", 
                                borderRadius: "3px",
                                color: "rgba(13, 110, 253, 1)" 
                            }}>Voir</a>
                    </div>
                    <div className= "card-footer text-body-secondary">Site réalisé avec WordPress</div>
                </div>

                <div id="project3" className={`card text-center ${styles.card}`}>
                    <div className= "card-header" style={{ position: "relative" ,width: "100%", height: "300px"}}>
                        <Image 
                        src="/portfolio/espace-bien-etre.jpg" 
                        width={200}
                        height={100}
                        alt="Fresh food"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderTopLeftRadius: "15px",
                            borderTopRightRadius: "15px",
                        }}/>
                    </div>
                    <div className= "card-body">
                        <h5 className= "card-title">Espace bien-être</h5>
                        <p className= "card-text">Réalisation d'un site vitrine pour un praticien de bien-être.</p>
                        <a  href="#" 
                            className= "btn btn-primary"
                            style={{
                                backgroundColor: "white",
                                border: "1px solid rgba(13, 110, 253, 1)", 
                                borderRadius: "3px",
                                color: "rgba(13, 110, 253, 1)" 
                            }}>Voir</a>
                    </div>
                    <div className= "card-footer text-body-secondary">Site réalisé en HTML/CSS</div>
                </div>
            </div>    
        </div>
    );
}