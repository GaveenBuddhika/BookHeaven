import React, { useState } from "react";
import "../Styles/Card.css";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();

  return (
    <>
      {book.map((item, index) => {
        console.log(item)
        const thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        const title = item.volumeInfo.title;
        const author =
          item.volumeInfo.authors;

        if (thumbnail && title) {
          return (
            <div
              className="card"
            >
              <img src={thumbnail} alt={title} />
              <div className="bottom">
                <h3 className="title">{title}</h3>
                {author && <p className="author">-{author[0]}-</p>}
              </div>
            </div>
          );
        }
        return null;
      })}

     
    </>
  );
};

export default Card;