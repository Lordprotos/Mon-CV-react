import Link from "next/link";
import Image from "next/image";
import styles from "./styles/page.module.css";

export const metadata = {
  title: "Mon CV",
  description: "Voici le CV de John Doe crée avec React.js",
};

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Image de fond avec overlay */}
      <div className={styles.backgroundImage}>
        <div className={styles.overlay}>
          <h1>Bienvenue sur le site de John Doe</h1>
          <h2>développeur Web et Designer</h2>
          <Link href="#about">
            <button className={styles.learnMoreButton}>En savoir plus</button>
          </Link>
        </div>
      </div>

      {/* Section A propos*/}
      <section id="about" className={styles.aboutSection}>
        
        <div className={styles.aboutContent}>
          <h3 className={styles.aboutTitre}>À propos</h3>
          <div className={styles.aboutText}>
            <p><strong>
            Passionné par l'informatique et les nouvelles technologies, j'ai suivie une 
            formation d'intégrateur-développeur web au CEF. Au cours de cette fotmation, j'ai pu 
            acquérir des bases solides pour travailler dans le domaine du développement web.</strong></p>

            <p><strong>
            Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale
            pour consolider ma formation de développeur web full stack.</strong></p>
              
            <p><strong>
            J'accorde une attention particulère à la qualité du code que j'écris et je respecte
            les bonnes pratiques du web.</strong></p>  
          </div>              
        </div>

        <div className={styles.aboutProgress}>
          
          <h3 className={styles.aboutTitre} >Compétences</h3>

          <Image 
          src="/john-doe-about.jpg" 
          alt="Photo de John Doe" 
          width={200} 
          height={200}  
          className={styles.photoProfil}/>

          <div className="progressBarContainer">
            <div className="progress" style={{ marginBottom: "15px", height: "30px", fontSize: "18px" }}>
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: "90%", color: "black" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >HTML5</div>
            </div>

            <div className="progress" style={{ marginBottom: "15px", height: "30px", fontSize: "18px" }}>
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "80%", color: "black" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >CSS3</div>
            </div>

            <div className="progress" style={{ marginBottom: "15px", height: "30px", fontSize: "18px" }}>
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{ width: "70%", color: "black" }}
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              >JavaScript</div>
            </div>

            <div className="progress" style={{ marginBottom: "15px", height: "30px", fontSize: "18px" }}>
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "60%", color: "black" }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              >PHP</div>
            </div>

            <div className="progress" style={{ marginBottom: "15px" , height: "30px", fontSize: "18px" }}>
              <div
                className="progress-bar bg-custom"
                role="progressbar"
                style={{ width: "50%", color: "black" }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              >React</div>
            </div>
          </div>
        </div> 
      </section>
    </div>
    
  );
}
