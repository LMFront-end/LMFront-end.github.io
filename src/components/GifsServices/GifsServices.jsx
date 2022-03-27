import React from 'react'
import {gifs} from '../../data/gifs';
import {GifsCard} from '../GifsCard/GifsCard';
import styles from '../GifsServices/GifsServices.module.css';

const GifsServices = () => {

    let data = gifs;

    return(

        <section className={styles.hotelList}>

            {data.map((rick) => {

                console.log(rick);

                return (

                <GifsCard
                    key={rick.id}
                    name={rick.username}
                    img={rick.photo}
                />

                );
            })}
            
            </section>
        )
}

export  {GifsServices}