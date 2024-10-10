import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { useEffect } from 'react'

const Navbar = () => {
    const handleLinkClick = (event) => {
        const links = document.querySelectorAll(`.${styles.navLink}`);
        links.forEach(link =>{
            link.classList.remove(styles.active);
        });
        event.currentTarget.classList.add(styles.active);
    };

    useEffect (() => {
        const currentPath = window.location.pathname;
        const links = document.querySelectorAll(`.${styles.navLink}`);
        links.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add(styles.active);
            }
        });
    }, []);

    return (
        <div className={styles.navbarContainer}>
            <Link href="/"><img src='/favicon.png' alt='Favicon' /></Link>
            <nav className={`navbar ${styles.customNavbar}`}>
                <div className="container-fluid">
                    <Link className={`${styles.navLink} navbar-brand text-secondary`} href="/" onClick={handleLinkClick}>Accueil</Link>
                    <Link className={`${styles.navLink} navbar-brand text-secondary`} href="/services" onClick={handleLinkClick}>Services</Link>
                    <Link className={`${styles.navLink} navbar-brand text-secondary`} href="/realisations" onClick={handleLinkClick}>Réalisations</Link>
                    <Link className={`${styles.navLink} navbar-brand text-secondary`} href="/blog" onClick={handleLinkClick}>Blog</Link>
                    <Link className={`${styles.navLink} navbar-brand text-secondary`} href="/contact" onClick={handleLinkClick}>Me Contacter</Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;