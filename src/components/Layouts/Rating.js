import React from 'react'
import { FaStar } from 'react-icons/fa'
export default function Rating(props) {
 
    const rating = props.rating
    return (
        <div className="uk-rating row">
        {rating > 0 ?
        <>
        <div className='pr-2 col-6'>( { rating.toPrecision(2) })</div>
        <div  >
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input type="radio" name="rating"
                value={rating.toPrecision(2)} hidden />
              <FaStar className='star'
              style = {{cursor: ' context-menu '}}
                color={ratingValue <= ( rating.toPrecision(2)) ? "F90" : "rgb(161, 158, 158)"} size={18} />
            </label>
          )
        })} 
        </div>
        </>
        :
        <>     {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input type="radio" name="rating"
                // value={rating.toPrecision(2)} 
                hidden />
              <FaStar className='star'
              style = {{cursor: 'context-menu'}}
                color={ "rgb(161, 158, 158)"} size={18} />
            </label>
          )
        })} 
        </>
        }
      
      </div>
    )
}
