import React from 'react';
import styles from './Main.module.css';
import Events from '../../components/Events/Events.js';


const Main = () => {

    return (
        <div className={styles.fullPage}>
            <div className={styles.main__1}>1</div>
            <div className={styles.main__2}>2</div>
            <div className={styles.main__3}>3</div>
            <div className={styles.main__4}>4</div>
            <Events />
        </div>
    );

}

export default Main;




    