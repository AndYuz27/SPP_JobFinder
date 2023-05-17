import "../App.css"
const Card = (fn) =>{
const img = fn.comp.image_company
console.log(img)
    return(
         <div className="card_comp"> 
                    <div className="descr">
                    <a href={`/companies/${fn.comp.id}`}><h3>{fn.comp.company_name}</h3></a>
                        <p className="title_prod">Сфера деятельности: <b>{fn.comp.sfera_deyatel}</b> </p>
                        <p className="title_prod">ОГРН: <b>{fn.comp.ogrn}</b> </p>
                        <p>Рейтинг: <b>{fn.comp.rathing}/10 </b></p>

                    </div>
                    <img src={img} style={{width: "250px",  borderRadius: "15px"}}></img>

                </div>
    )
}



export default Card