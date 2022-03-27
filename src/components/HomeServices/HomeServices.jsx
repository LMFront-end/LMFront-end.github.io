import React from 'react'

const HomeServices = () => {
    return (
    <div>
    <main>
        <section className="contenedor" id="servicio">
            <h2 className="subtitulo">
            Tribute Rick's phrases
            </h2>
            <div className="contenedor-servicio">
                <img className="imagen_servicio" src="https://img.icons8.com/plasticine/344/rick-sanchez.png" alt="" />
                <div className="checklist-servicio">
                    <div className="service">
                        <h3 className="n-service"><span className="number">1</span>No one exists on purpose</h3>
                        <p className="n-service_paragraph">
                        "No one exists on purpose. No one belongs anywhere. We're all going to die. Come watch TV."
                        </p>
                        <h3 className="n-service"><span className="number">2</span>chemical reaction</h3>
                        <p className="n-service_paragraph">
                        Listen, Morty, I hate to tell you this but that thing people call 'love' is just a chemical reaction that forces animals to reproduce.
                        </p>
                        <h3 className="n-service"><span className="number">3</span>the truth!</h3>
                        <p className="n-service_paragraph">
                        "Sometimes science is much more art than science, Morty. A lot of people don't understand that."
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="gallery">
            <div className="contenedor">
                <h2 className="subtitulo">Iconic Pictures</h2>
                <div className="contenedor-galeria">

                    <img src="https://vistapointe.net/images/rick-and-morty-2.jpg" alt="" className="img-galeria" />
                    <img src="https://i.blogs.es/b6d70c/rick-y-morty/840_560.jpeg" alt="" className="img-galeria" />
                    <img src="https://imagenes.elpais.com/resizer/AlhBHQkeH69WeBPD6qbjQNR2fTA=/980x980/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/MUZ3WHYIHCKK3EK5Q6DFGFQE3A.jpg" alt="" className="img-galeria" />
                    <img src="https://rfcb.ch/img/other/41/when-will-rick-morty-season-6-premiere.jpg" alt="" className="img-galeria" />
                    <img src="https://www.nacionrex.com/__export/1515006483969/sites/debate/img/2018/01/03/dan_harmon_rick_and_morty_creador_de_la_serie_mejores_episodios_para_celebrar_su_cumpleanos.jpg_423682103.jpg" alt="" className="img-galeria" />
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-morty-season-5-finale-1631266872.jpg" alt="" className="img-galeria" />
                    <img src="https://img.europapress.es/fotoweb/fotonoticia_20210814150634_1200.jpg" alt="" className="img-galeria" />
                    <img src="https://i0.wp.com/fueradeseries.com/wp-content/uploads/2021/06/rick-y-morty-estreno-temporada-5.jpg?fit=1500%2C999&ssl=1" alt="" className="img-galeria" />
                    <img src="https://vader.news/__export/1592454315077/sites/gadgets/img/2020/06/18/rick-morty.jpg_1942733085.jpg" alt="" className="img-galeria" />
                </div>
            </div>
        </section>

        <section className="contenedor" id="expertos">
            <h2 className="subtitulo">
            How are you doing, watching TV, fiddling with your cell phone?
            </h2>
            <section className="experts">
                <div className="cont-expert">
                    <img src="https://img.icons8.com/plasticine/344/jerry-smith.png" alt="" />
                    <h3 className="n-expert">
                        Jerry Smith
                    </h3>
                </div>
                <div className="cont-expert">
                    <img src="https://img.icons8.com/plasticine/344/summer-smith.png" alt="" />
                    <h3 className="n-expert">
                        Summer Smith
                    </h3>
                </div>
                <div className="cont-expert">
                    <img src="https://img.icons8.com/plasticine/344/beth-smith.png" alt="" />
                    <h3 className="n-expert">
                        Beth Smith
                    </h3>
                </div>
                <div className="cont-expert">
                    <img src="https://img.icons8.com/plasticine/344/morty-smith.png" alt="" />
                    <h3 className="n-expert">
                        Morty Smith
                    </h3>
                </div>
            </section>
        </section>
    </main>
</div>
)
}

export {HomeServices}