import React from 'react'
import styles from './styles.module.css';

const CuriositiesCard = (props) => {
    return (
        <>
            <div className={styles.hotelCard} key={props.slug}>
            <img
            src={props.img}
            alt={props.name}
            className={styles.hotelCard__img}
            />
                <h3 className={styles.hotelCard__name}>{props.name}</h3>
                <p className={styles.hotelCard__description}>{props.description}</p>

        <button className={styles.hotelCard__btn}>MORE</button>
        </div>
        </>
    )
}

export  {CuriositiesCard}