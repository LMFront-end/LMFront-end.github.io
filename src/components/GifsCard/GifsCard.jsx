import React from 'react'
import styles from '../GifsCard/GifsCard.module.css'

const GifsCard = (props) => {
        return (
            <>
                <div className={styles.hotelCard} key={props.id}>
                <img
                src={props.photo}
                alt={props.username}
                className={styles.hotelCard__img}
                />
                <h3 className={styles.hotelCard__name}>{props.username}</h3>
            </div>
            </>
        )
}

export {GifsCard}