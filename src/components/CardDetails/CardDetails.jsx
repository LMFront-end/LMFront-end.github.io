import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom'

const CardDetails = () => {

    let { id } = useParams();

    let [fetchedData, updateFetchedData] = useState([]);
    let { name, location, origin, gender, image, status, species } = fetchedData;

    // url api
    let URL_API = `https://rickandmortyapi.com/api/character/${id}`;


    useEffect(() => {

        const fetchApi = async() => {

            let data = await fetch(URL_API)
            .then((responde) => responde.json());
                updateFetchedData(data)
        }

        fetchApi();

    }, [URL_API]);

    return (
            <div className="container d-flex justify-content-center mb-5">
                <div className="d-flex flex-column gap-3">
                    <h1 className="text-center">{name}</h1>

                <img className="img-fluid" src={image} alt="" />
                {(() => {

                    if (status === "Dead") {
                    return <div className="badge bg-danger fs-5">{status}</div>;

                    } else if (status === "Alive") {
                    return <div className=" badge bg-success fs-5">{status}</div>;

                    } else {
                    return <div className="badge bg-secondary fs-5">{status}</div>;
                    }
                })()}

                <div className="content">
                <div className="">
                    <span className="fw-bold">Gender : </span>
                        {gender}
                </div>
                <div className="">
                    <span className="fw-bold">Location: </span>
                        {location?.name}
                </div>
                <div className="">
                    <span className="fw-bold">Origin: </span>
                    {origin?.name}
                </div>
                <div className="">
                    <span className="fw-bold">Species: </span>
                    {species}
                </div>
                <Link to={"/fav"} className="btn btn-outline-dark mt-3 ms-10">
                            <i className="fa-solid fa-heart"></i> Add To Fav
                </Link>
            </div>
            </div>
        </div>
    )
}

export  {CardDetails}