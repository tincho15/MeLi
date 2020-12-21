import React, { useEffect } from 'react';
import ResultItem from './ResultItem';
import { connect } from 'react-redux';
import { searchItems, cleanList, cleanCategories } from '../../actions';
import "./results.sass"
import { useLocation } from 'react-router-dom';

const Results = ({list, searchItems, cleanList, cleanCategories}) => {

    const { search } = useLocation(),
        searchParams = new URLSearchParams(search),
        param = searchParams.get('search');
        
    useEffect(() => {
        cleanCategories();
        searchItems(param);
        return function cleanup() {
            cleanList();
        }
    }, [param, searchItems, cleanList, cleanCategories])

    return(
        <section className="container" id="results">
            {
                list.length > 0 ?
                list.map(item => <ResultItem item={item} key={item.id} />)
                :
                null
            }
        </section>
    );
}

const mapStateToProps = (state, ownProps) => ({
    list: state.searchResult.items
})
  
export default connect(mapStateToProps, { searchItems, cleanList, cleanCategories })(Results);