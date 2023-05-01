import HeadCard from "./HeadCard";
import { FaBullseye,FaBoxes, FaChartLine, FaStopwatch } from "react-icons/fa";
import styles from './Header.module.css'

function Header({valorJson}) {
    return (
        <div className={styles.header}>
            <HeadCard
                titulo={"Meta"}
                icone={<FaBullseye size={50} color='#fff' />}
                valor={valorJson.meta}
                color={"blue"}
                SI={"ton"}

            />
            <HeadCard
                titulo={"Produzido"}
                icone={<FaBoxes size={50} color='#fff' />}
                valor={valorJson.produzido}
                color={"red"}
                SI={"ton"}
            />
            <HeadCard
                titulo={"Eficiencia"}
                icone={<FaChartLine size={50} color='#fff' />}
                valor={valorJson.eficiencia}
                color={"green"}
                SI={"%"}

            />
            <HeadCard
                titulo={"Rendimento Operacional"}
                icone={<FaStopwatch size={50} color='#fff' />}
                valor={valorJson.rendimento_operacional}
                color={"cyan"}
                SI={"horas"}

            />
        </div>
    );

}


export default Header;