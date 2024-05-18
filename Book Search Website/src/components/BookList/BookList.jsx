import React from 'react'
import { useGlobalContext } from '../../context'
import './BookList.css'
import Loading from '../Loader/Loader'
import coverImg from "../../images/cover_not_found.jpg"
import Book from '../BookList/Book'

const BookList = () => {

  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: (singleBook.id).replace("/works/",""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  if(loading) return <Loading/>;

  return (
    <div className='booklist'>

      <div className="container">

        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>

        <div className="booklist-content grid">

          {
            booksWithCovers.slice(9, 30).map((item, index) => {
              return(
                <Book key={index} {...item}/>
              )
            })
          }

        </div>

      </div>
      
    </div>
  )
}

export default BookList
