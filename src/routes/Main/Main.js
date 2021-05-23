import React from 'react';
import styles from './Main.module.css';
import Events from '../../components/Events/Events.js';


const Main = () => {

    return (
        <div className={styles.fullPage}>
            <Events />
        </div>
    );

}

export default Main;




