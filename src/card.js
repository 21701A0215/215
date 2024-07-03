import react from 'react'
import'./card.css'
function Card({image,title,description})
 {
    return(
        <div className='card-container'>
            <img className='img'src={image}/>
            <h3>(title)</h3>
            <p>description</p>
            <button>add to cart</button>
        </div>
    )

}

