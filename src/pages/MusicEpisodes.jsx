import React from 'react'

const MusicEpisodes = () => {
    return (
        <>
        <main>

            <div className="banner__container">
            <h1 className="banner__title">Hello <span id="line--through" data-text="world">world</span> Aliens<span>.</span></h1>

    
            <p className="banner__paragraph">
                I hate this place Morty, I can't stand the bureaucracy. I don't like being told where to go or what to do, it's an outrage.
            </p>

        </div>
        </main>

        <section className="section__episodes" id="episodios">
        <h2 className="subtitle__episodes">Episodios</h2>

        <div className="episodes__container">
            
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/2M0kKcVuBsLFH5d12pW215?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

            
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/2M0kKcVuBsLFH5d12pW215?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

            
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/2M0kKcVuBsLFH5d12pW215?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

            
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/2M0kKcVuBsLFH5d12pW215?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
    </section>

        </>
    )
}

export  {MusicEpisodes}