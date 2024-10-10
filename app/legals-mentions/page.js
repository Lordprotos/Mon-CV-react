"use client";

import styles from '../styles/mentionslegals.module.css'

export default function MentionsLegales () {
    return (
        <div className={styles.container}>
            <div className={styles.titre}>
                <h2>mentions légales</h2>
            </div>
            <div className={styles.mentionsContainer}>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button 
                        className="accordion-button" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#collapseOne" 
                        aria-expanded="true" 
                        aria-controls="collapseOne">Éditeur du site
                        </button>
                        </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h2>John Doe</h2>
                            <p>📌 40 Rue Laure Diebold</p>
                            <p>69009 Lyon, France</p>
                            <p>☎ <a href='#'>06 20 30 40 50</a></p>
                            <p>📧 <a href='#'>john.doe@gmail.com</a></p>
                        </div>
                    </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseTwo" 
                        aria-expanded="false" 
                        aria-controls="collapseTwo">Hébergeur
                        </button>
                        </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <h2>Always Data</h2>
                        <p>91 rue du Faubourg Saint Honoré</p>
                        <p>75008 Paris</p>
                        <p>🌍 <a href='https://www.alwaysdata.com/fr/' target='blank'>www.alwaysdata.com</a></p>
                        </div>
                    </div>
                    </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseThree" 
                            aria-expanded="false" 
                            aria-controls="collapseThree">Crédits
                            </button>
                            </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <h2>Crédits</h2>
                            <p>Site développé par John Doe, étudiant du CEF.</p>
                            <p>Les images libres de droit sont issues du site <a href='https://pixabay.com/fr/' target='blank'>Pixybay</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}