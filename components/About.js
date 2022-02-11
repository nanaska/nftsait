import styles from "./About.module.css"

function About() {
    return (
        <><div className={styles.pricing__section} id="secondsection">
            <div className={styles.pricing__wrapper}>

                
                <div className={styles.pricing__container}>

                    <div className={styles.pricing__container__card2}>
                        <div className={styles.pricing__container__cardInfo}>
                            <h3>О нас</h3>
                            <h4>Мы такая то команда мы фцааакп фффффцаы  фцввыфа фцвыфафау фцвыфва</h4>
                        </div>
                    </div>
                    <div className={styles.space}></div>
                    <div className={styles.pricing__container__card}>
                        <div className={styles.pricing__container__cardInfo}>

                            <h3>Цитатка</h3>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About