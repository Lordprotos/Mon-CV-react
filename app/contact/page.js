import styles from '../styles/contact.module.css';

export default function Contact () {
    return (
        <div className={styles.container}>
            <div className={styles.contact}>
                <div className={styles.titre}>
                    <h2>me contacter</h2>
                    <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir
                        le formulaire de contact.
                    </p>
                </div>
                <div className={styles.contactContainer}>
                    <div className={styles.formContainer}>
                        <h3>Formulaire de contact</h3>
                        <form action="#" method="post" className={styles.form}>
                            <input type="text" placeholder="Votre nom"></input>
                            <input type="email" placeholder="Votre adresse email"></input>
                            <input type="tel" placeholder="Votre numéro de téléphone"></input>
                            <input type="text" placeholder="Sujet"></input>
                            <textarea name="message" rows='7' placeholder='Votre message' ></textarea>
                            <input type='button' className={styles.button} value='Envoyer'/>
                        </form>
                    </div>
                    <div className={styles.coord}>
                        <h3>Mes coordonnées</h3>
                        <p>📌 40 Rue Laure Diebold, 69009 Lyon, France</p>
                        <p>☎ 06 20 30 40 50</p>
                    </div>
                </div>
            </div>
        </div>
    );
}