import Image from 'next/image';
import styles from '../styles/blog.module.css';

export default function Blog () {
    return (
        <div className={styles.container}>
            <div className={styles.backgroundImage}></div>
            <div className={styles.titre}>
                <h2>blog</h2>
                <p>Retrouver ici quelques articles sur le développement web.</p>
            </div>
            <div className={styles.blogContainer}>
            <div id="article1" className={`card custom-card-radius ${styles.card}`} style={{ borderRadius: '12px' }}>
                    <div className= "card-header" style={{ position: "relative" ,width: "100%", height: "300px"}}>
                        <Image 
                        src="/blog/coder.jpg"
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
                            borderTopLeftRadius: "12px",
                            borderTopRightRadius: "12px",
                        }}
                        />
                    </div>
                    <div className= "card-body">
                        <h2 className= "card-title" style={{ fontSize: '230%' }}>Coder son site en HTML/CSS</h2>
                        <p className= "card-text" style={{ fontSize: '120%' }}>
                            some quick example text to build on the card title and make up
                            the bulk of the crad's content.
                        </p>
                        <a  href="#" 
                            className= "btn custom-btn"
                            style={{
                                backgroundColor: "#0d6efd ",
                                border: "1px solid rgba(13, 110, 223, 1)", 
                                borderRadius: "3px",
                                color: "#EEE",
                                cursor: "pointer",
                            }}>Lire la suite</a>
                    </div>
                    <div className= "card-footer text-body-secondary">
                        Publiée le <time dateTime='2022-07-31'>31 juillet 2022</time>
                    </div>
                </div>
                <div id="article2" className={`card custom-card-radius ${styles.card}`}>
                    <div className= "card-header" style={{ position: "relative" ,width: "100%", height: "300px"}}>
                        <Image 
                        src="/blog/croissance.jpg"
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
                            borderTopLeftRadius: "12px",
                            borderTopRightRadius: "12px",
                        }}
                        />
                    </div>
                    <div className= "card-body">
                        <h2 className= "card-title" style={{ fontSize: '230%' }}>Vendre ses produits sur le web</h2>
                        <p className= "card-text" style={{ fontSize: '120%' }}>
                            some quick example text to build on the card title and make up
                            the bulk of the crad's content.
                        </p>
                        <a  href="#" 
                            className= "btn custom-btn"
                            style={{
                                backgroundColor: "#0d6efd ",
                                border: "1px solid rgba(13, 110, 223, 1)", 
                                borderRadius: "3px",
                                color: "#EEE"  
                            }}>Lire la suite</a>
                    </div>
                    <div className= "card-footer text-body-secondary">
                        Publiée le <time dateTime='2022-07-30'>30 juillet 2022</time>
                    </div>
                </div>
                <div id="article3" className={`card custom-card-radius ${styles.card}`}>
                    <div className= "card-header" style={{ position: "relative" ,width: "100%", height: "300px"}}>
                        <Image 
                        src="/blog/google.jpg"
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
                            borderTopLeftRadius: "12px",
                            borderTopRightRadius: "12px",
                        }}
                        />
                    </div>
                    <div className= "card-body">
                        <h2 className= "card-title" style={{ fontSize: '230%' }}>Se positionner sur Google</h2>
                        <p className= "card-text" style={{ fontSize: '120%' }}>
                            some quick example text to build on the card title and make up
                            the bulk of the crad's content.
                        </p>
                        <a  href="#" 
                            className= "btn custom-btn"
                            style={{
                                backgroundColor: "#0d6efd ",
                                border: "1px solid rgba(13, 110, 223, 1)", 
                                borderRadius: "3px",
                                color: "#EEE"  
                            }}>Lire la suite</a>
                    </div>
                    <div className= "card-footer text-body-secondary">
                        Publiée le <time dateTime='2022-07-12'>12 juillet 2022</time>
                    </div>
                </div>
                <div className={`card custom-card-radius ${styles.card}`}>
                    <div className= "card-header" style={{ position: "relative" ,width: "100%", height: "300px"}}>
                        <Image 
                        src="/blog/screens.jpg"
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
                            borderTopLeftRadius: "12px",
                            borderTopRightRadius: "12px",
                        }}
                        />
                    </div>
                    <div className= "card-body">
                        <h2 className= "card-title" style={{ fontSize: '230%' }}>Coder en responsive design</h2>
                        <p className= "card-text" style={{ fontSize: '120%' }}>
                            some quick example text to build on the card title and make up
                            the bulk of the crad's content.
                        </p>
                        <a  href="#" 
                            className= "btn custom-btn"
                            style={{
                                backgroundColor: "#0d6efd ",
                                border: "1px solid rgba(13, 110, 223, 1)", 
                                borderRadius: "3px",
                                color: "#EEE"  
                            }}>Lire la suite</a>
                    </div>
                    <div className= "card-footer text-body-secondary">
                        Publiée le <time dateTime='2022-07-31'>31 juillet 2022</time>
                    </div>
                </div>
                <div className={`card custom-card-radius ${styles.card}`}>
                    <div className= "card-header" style={{ position: "relative" ,width: "100%", height: "300px"}}>
                        <Image 
                        src="/blog/seo.jpg"
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
                            borderTopLeftRadius: "12px",
                            borderTopRightRadius: "12px",
                        }}
                        />
                    </div>
                    <div className= "card-body">
                        <h2 className= "card-title" style={{ fontSize: '230%' }}>Techniques de référencement</h2>
                        <p className= "card-text" style={{ fontSize: '120%' }}>
                            some quick example text to build on the card title and make up
                            the bulk of the crad's content.
                        </p>
                        <a  href="#" 
                            className= "btn custom-btn"
                            style={{
                                backgroundColor: "#0d6efd ",
                                border: "1px solid rgba(13, 110, 223, 1)", 
                                borderRadius: "3px",
                                color: "#EEE" 
                            }}>Lire la suite</a>
                    </div>
                    <div className= "card-footer text-body-secondary">
                        Publiée le <time dateTime='2022-07-30'>30 juillet 2022</time>
                    </div>
                </div>
                <div className={`card custom-card-radius ${styles.card}`}>
                    <div className= "card-header" style={{ position: "relative" ,width: "100%", height: "300px"}}>
                        <Image 
                        src="/blog/technos.png"
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
                            borderTopLeftRadius: "12px",
                            borderTopRightRadius: "12px",
                        }}
                        />
                    </div>
                    <div className= "card-body">
                        <h2 className= "card-title" style={{ fontSize: '230%' }}>Apprendre à coder</h2>
                        <p className= "card-text" style={{ fontSize: '120%' }}>
                            some quick example text to build on the card title and make up
                            the bulk of the crad's content.
                        </p>
                        <a  href="#" 
                            className= "btn custom-btn"
                            style={{
                                backgroundColor: "#0d6efd ",
                                border: "1px solid rgba(13, 110, 223, 1)", 
                                borderRadius: "3px",
                                color: "#EEE" 
                            }}>Lire la suite</a>
                    </div>
                    <div className= "card-footer text-body-secondary">
                        Publiée le <time dateTime='2022-07-12'>12 juillet 2022</time>
                    </div>
                </div>
            </div>
        </div>
    );
}