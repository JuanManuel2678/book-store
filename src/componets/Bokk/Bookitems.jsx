

export const Bookitems = ({ book: {
    author , 
    country, 
    imageLink, 
    language, 
    link, 
    pages, 
    title, 
    year } }) => {

    return (
        <li className='book_item'>
            <figure className="item_img_container">
                <img src={imageLink} alt="book image" />
            </figure>
            <div className="item_info">

                <h2>{title}</h2>
               
               <h4>Autor : <span> {author}</span></h4>
               <h4>Pais : <span> {country}</span></h4>
               <h4>Año : <span> {year}</span></h4>
            
                <a href={link} target="_blank">Read more</a>
                <div>
                    <h5> Idioma : {language}</h5>
                    <h5>pag : {pages}</h5>
                </div>

            </div>

        </li>
    )
}


