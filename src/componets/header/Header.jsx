import { Nabvar } from "./Nabvar"
import './header.css'

export const Header = ({data, setBooks }) => {
    

  return (
    <header className="header_container">
       <div className='header'>
          <h1 className='title'>Libreria</h1>
       </div>
       <Nabvar data={data} setBooks={setBooks}/>
    </header>
  )
}


