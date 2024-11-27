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
                        <iframe
                            style={{ border:'0', width:'100%', height:'300px'}} 
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.253931508044!2d4.796403975472897!3d45.77866571240317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1729524606954!5m2!1sfr!2sfr">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}