import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card/Card'
import { InputGroup } from '../components/Filter/category/InputGroup';

const Location = () => {

    let [results, setResults] = React.useState([]);
    let [info, setInfo] = useState([]);
    let { dimension, type, name } = info;
    let [number, setNumber] = useState(1);

    let URL_API = `https://rickandmortyapi.com/api/episode/${number}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(URL_API).then((res) => res.json());
            setInfo(data);
    
            let a = await Promise.all(
            data.characters.map(async (x) => {
                const res = await fetch(x);
                return await res.json();
                })
            );
            setResults(a);
            })();
        }, [URL_API]);

    return (
        <div className="container">
            <div className="row mb-3">
            <h1 className="text-center mb-3">
                Location :
            <span className="text-primary">
                {" "}
            {name === "" ? "Unknown" : name}
            </span>
            </h1>
            
        </div>
        <div className="row">
        <div className="col-lg-3 col-12 mb-4">
            <h4 className="text-center mb-4">Pick Location</h4>
            <InputGroup name="Location" changeID={setNumber} total={126} />
        </div>
        <div className="col-lg-8 col-12">
            <div className="row">
            <Card page="/location/" results={results} />
            </div>
        </div>
        </div>
    </div>
    )
}

export {Location}