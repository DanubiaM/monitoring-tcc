import styles from './HeadCard.module.css'

function HeadCard({icone, titulo, valor}){
    console.log(valor)
    return (
        
        <div className={styles.card}>
            
            <div className={styles.card_icon}>
                {icone}
            </div>
            <div className={styles.card_body}>               
                    <p>{titulo}</p>
                    <div className={styles.card_value}> 
                        <p>{valor}</p> <span>ton</span>
                    </div>        
            </div>
        </div>


    )
}

export default HeadCard