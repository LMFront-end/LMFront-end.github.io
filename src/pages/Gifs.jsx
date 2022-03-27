import React from 'react'
import { Footer } from '../components/Footer/Footer'
import { GifsServices } from '../components/GifsServices/GifsServices'


const Gifs = () => {

    return (
        <div>
            <h1 className="titile__gifs">Gifs Rick And Morty</h1>
            <GifsServices />
            <Footer />
        </div>
    )
}

export {Gifs}