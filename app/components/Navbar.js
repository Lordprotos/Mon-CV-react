import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(null);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleLinkClick = (index) => {
        setActiveLink(index);
        closeMenu();
    };

    return (
        <nav className={styles.navbar}>
            <input type="checkbox" id="nav-check"/>
            <div className={styles.navHeader}>
                <div className={styles.navTitle}>
                    <Link href="/"><img src="/favicon.png" alt="logo" ></img></Link>
                </div>
            </div>
            <div className={styles.navBtn} onClick={toggleMenu}>
                <label htmlFor="nav-check">
                <span></span>
                <span></span>
                <span></span>
                </label>
            </div>
            
            <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ''}`}>
                <li>
                    <Link className={`${styles.navLink} ${activeLink === 0 ? styles.active : ''}`}
                    onClick={() => handleLinkClick(0)}
                    href="/">Accueil</Link>
                </li>
                
                <li>
                    <Link className={`${styles.navLink} ${activeLink === 1 ? styles.active : ''}`}
                    onClick={() => handleLinkClick(1)}
                    href="/services" >Services</Link>
                    </li>
                <li>
                    <Link className={`${styles.navLink} ${activeLink === 2 ? styles.active : ''}`}
                    onClick={() => handleLinkClick(2)}
                    href="/realisations" >Réalisations</Link>
                </li>
                <li>
                    <Link className={`${styles.navLink} ${activeLink === 3 ? styles.active : ''}`}
                    onClick={() => handleLinkClick(3)}
                    href="/blog" >Blog</Link>
                </li>
                <li>
                    <Link className={`${styles.navLink} ${activeLink === 4 ? styles.active : ''}`}
                    onClick={() => handleLinkClick(4)}
                    href="/contact" >Me Contacter</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
