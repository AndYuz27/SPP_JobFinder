import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { getCompany } from "../api.js";
import axios from "axios";
import Card from "./Card.js";


export default function CompanyInfo(){


    const [tour, setTour] = useState([])
    const { id } = useParams();
    // console.log(id)
    useEffect(() => {
        if ( id ) {
            axios.get(`http://127.0.0.1:8080/api/company/${id}`)
                .then(res => {
                    // console.log(res)
                    console.log(res.data.rows)
                    setTour(res.data.rows)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ id ]);


    return(
        <div className="company_info">
                        {tour.map((el) => {return <div key={el.id}>

            <div className="company_info__img">
                <img src={el.image_company} alt={el.company_name}></img>
            </div>
            <div className="company_info__description">
                <p>Название компании: <b> {el.company_name}</b></p>
                <p>{el.company_info}</p>
                <p>{el.contacts__comp}</p>

            </div>
                        </div>})} 
        </div>
    )
}


