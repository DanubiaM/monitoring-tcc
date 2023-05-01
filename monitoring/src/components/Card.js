import styles from './Card.module.css'

function Card({ titulo, valor,SI }) {

    return (

        <div className={styles.card}>
            <p>{titulo}</p>
            <div className={styles.card_value}>
                <p>{valor}</p> <span>{SI}</span>
            </div>
            
        </div >


    )
}

export default Card