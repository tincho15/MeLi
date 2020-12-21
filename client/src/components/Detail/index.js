import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getItemDetail, cleanDetail } from '../../actions';
import './detail.sass';

const Detail = ({item, getItemDetail, cleanDetail}) => {

    const {id} = useParams();

    useEffect(() => {
        getItemDetail(id);
        return function cleanup() {
            cleanDetail();
        }
    }, [id, cleanDetail, getItemDetail])

    return(
        <section className="container" id="detail">
            {
                item ? 
                <div className="itemDetail">
                    <main>
                        <figure>
                            <img src={item.picture} alt={item.title}/>
                        </figure>
                        <div className="mainInfo">
                            <h5 className="otherInfo">{item.condition} - {item.sold_quantity} vendidos</h5>
                            <h1 className="itemTitle">{item.title}</h1>
                            <h2 className="price">{item.price.currency} {item.price.amount}</h2>
                            <button className="btn btnBuy">
                                Comprar
                            </button>
                        </div>
                    </main>
                    <div className="descripcion">
                        <h3>Descripcion del Producto</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
                :
                null
            }
        </section>
    );
}

const mapStateToProps = (state, ownProps) => ({
    item: state.itemSelected.item
})


export default connect(mapStateToProps, {getItemDetail, cleanDetail})(Detail);