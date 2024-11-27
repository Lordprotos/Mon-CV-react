"use client";

import Link from "next/link";
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.container}>
                    {/* 1ère Colonne: Informations du développeur */}
                    <div className={styles.column}>
                        <h4>John Doe</h4>
                        <p>40 Rue Laure Diebold</p>
                        <p>69009 Lyon, France</p>
                        <p>Télephone: 06 20 30 40 50</p>
                    </div>
                    <div className={styles.socialIcons}>

                        <Link href="https://github.com/johndoe" target="_blank" rel="nofollow">
                        <img src="/github.png" alt= "Favicon Github"></img>
                        </Link>
                        <Link href="https://twitter.com/johndoe" target="_blank" rel="nofollow">
                        <img src="/twitter.png" alt= "Favicon Twitter"></img>
                        </Link>
                        <Link href="https://linkedin.com/in/johndoe" target="_blank" rel="nofollow">
                        <img src="/linkedin.png" alt= "Favicon Linkedin"></img>
                        </Link>
                    </div>
                </div>
                        
                {/* 2ème Colone : Liens vers les différentes pages*/}
                <div className={styles.column}>
                    <h4>Liens utiles</h4>
                    <Link href="/">Acceuil</Link>
                    <Link href="/#about">À propos</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/contact">Me contacter</Link>
                    <Link href="/legals-mentions">Mentions légales</Link>
                </div>

                {/* 3ème Colonne: Dernières réalisations */}
                <div className={styles.column}>
                    <h4>Dernières Réalisations</h4>
                    <Link href="/realisations#project1">Fresh food</Link>
                    <Link href="/realisations#project2">Restaurant Akira</Link>
                    <Link href="/realisations#project3">Espace bien-être</Link>
                </div>

                {/* 4ème Colonne: Derniers articles de blog */}
                <div className={styles.column}>
                    <h4>Derniers Articles</h4>
                    <Link href="/blog#article1">Coder son site en HTML/CSS</Link>
                    <Link href="/blog#article2">Vendre ses produits sur le web</Link>
                    <Link href="/blog#article3">Se positionner sur Google</Link>
                </div>
            </div>

            <div className={styles.copyright}>
                <p>&copy; 2024 John Doe. Tous droit reservés.</p>
            </div>
        </footer>
    )
}

export default Footer