import React from 'react';
import {connect} from 'react-redux';
import './categories.sass';

const Categories = ({categories, item}) =>{
    return(
        <ul className="categories">
            {
                item ? 
                item.categories.map((cat, i) => {
                    if(i < item.categories.length - 1){
                        return <li key={cat}>{`${cat} > `}</li>
                    }else{
                        return (
                            <li key={cat}>
                                <strong>{` ${cat} `}</strong>
                            </li>
                        )
                    }
                })
                :
                categories.map((cat, i) => {
                    if(i < categories.length - 1){
                        return <li key={cat}>{`${cat} > `}</li>
                    }else{
                        return (
                            <li key={cat}>
                                <strong>{` ${cat} `}</strong>
                            </li>
                        )
                    }
                })
            }
        </ul>
    )
}

const mapStateToProps = (state, ownProps) => ({
    categories: state.searchResult.categories,
    item: state.itemSelected.item
});

export default connect(mapStateToProps, null)(Categories)