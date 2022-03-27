import React from 'react'
import { curiosities } from '../../data/curiosities';
import {CuriositiesCard } from '../CuriositiesCard/CuriositiesCard';
import styles from '../CurisitiesServices/CuriositiesServices.module.css'

const CuriositiesServices = () => {

    let data = curiosities;

    return(

    <section className={styles.hotelList}>
        {data.map((curiosity) => {
            
            return (
            <CuriositiesCard
                key={curiosity.slug}
                name={curiosity.name}
                img={curiosity.photo}
                description={curiosity.description}
                
            />
            );
        })}
        </section>
    )
}

export {CuriositiesServices}