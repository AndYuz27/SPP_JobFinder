import "../App.css"
const Card = (fn) =>{

    return(
         <div className="card_comp"> 
                    <div className="descr">
                        <h3>{fn.comp.company_name}</h3>
                        <p className="title_prod">Сфера деятельности: <b>{fn.comp.sfera_deyatel}</b> </p>
                        <p className="title_prod">ОГРН: <b>{fn.comp.ogrn}</b> </p>
                        <p>{fn.comp.rathing}/10 </p>
                    </div>
                </div>
    )
}



export default Card