import { HeroContainer } from "../components/Hero/HeroContainer"
import styles from '../styled/HomePage.module.scss';


export const HomePage = () => {
    return(
        <main className={styles.container__page}>
            <HeroContainer title="CoderMarket"/>
        </main>
    )
}