import React from 'react';
import { useHistory } from 'react-router-dom';
import FreeShippingIcon from '../../assets/ic_shipping.png'

const ResultItem = ({item}) => {

    const {id, title, picture, price, free_shipping, location} = item;
    let history = useHistory();

    const redirectToDetail = (id) => {
        history.push(`/items/${id}`);
    }

    return(
        <article className="listItem" onClick={() => redirectToDetail(id)}>
            <figure>
                <img src={picture} alt={title}/>
            </figure>
            <div className="summary">
                <div className="price">
                    <h3>{price.currency} {price.amount} </h3>
                    {free_shipping ? <img src={FreeShippingIcon} alt="Free shipping available" className="freeShippingIcon"/> : null} 
                </div>
                <div className="location">
                    <p>
                        {location}
                    </p>
                </div>
                <h2 className="title">
                    {title}
                </h2>
            </div>
            
            <hr/>
        </article>
    )
}

export default ResultItem;