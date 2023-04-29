import {useState, useEffect} from 'react'

import { getComps } from "../api"
import Card from './Card'





export default function Compaines(){

    const [comps, setProds] = useState([]);
    useEffect(() => {
        const setNewCards = async () => {
            let res = await getComps();
            console.log(res);
            setProds(res);
        };
        setNewCards();
    }, []);
    return(
        <div>
            <div className='jjhh'>Вот что найдено</div>
            <div>
            {comps.map((el, index) => {return <Card key={index} comp={el}/>})}

            </div>
        </div>
    )
}