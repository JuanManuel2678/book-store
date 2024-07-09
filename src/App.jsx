import React, { useEffect, useState } from 'react'
import { BookList } from './componets/Bokk/BookList'
import { Header } from './componets/header/Header'

export default function App() {
  const [data, setData] = useState([])
  const [books, setBooks] = useState([])

  const getData = async () => {
    const rs = await fetch("books.json")
    const rsJson = await rs.json()

    setData(rsJson)
    setBooks(rsJson)
  }


  useEffect(() => {
    getData()
  }, [])


  return (
    <>
    <Header setBooks={setBooks} data={data}/>
    
    <BookList books={books}/>
    </>
  )
}
