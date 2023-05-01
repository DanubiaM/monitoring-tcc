import styles from './HeadCard.module.css'

function HeadCard({icone, titulo, valor, SI,color}){
  
    return (
        
        <div className={`${styles.card} ${styles[color]}`}>
            
            <div className={`${styles.card_icon} ${styles[color]}`}>
                {icone}
            </div>
            <div className={styles.card_body}>               
                    <p>{titulo}</p>
                    <div className={styles.card_value}> 
                        <p>{valor}</p> <span>{SI}</span>
                    </div>        
            </div>
        </div>


    )
}

export default HeadCard