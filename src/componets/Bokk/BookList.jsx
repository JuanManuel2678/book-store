import { Bookitems } from "./Bookitems"
import "./books.css"

export const BookList = ({ books }) => {

  return (
    <ul className='book_list'>

      {books && 
       books.map((book, index) => 
       <Bookitems key={index} book={book}/>)
       }

    </ul>
  )
}


