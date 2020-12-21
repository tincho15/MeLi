import React, { useState }from 'react';
import { useHistory } from "react-router-dom";
import Categories from '../Categories';
import logo from "../../assets/Logo_ML.png";
import searchIcon from "../../assets/ic_Search.png";
import './searchbar.sass';

const Searchbar = ({ searchItems }) => {
    const [value, setValue] = useState("");
    let history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        history.push(`/items?search=${value}`)
    }

    return(
        <>
            <header>
                <div className="container">
                    <figure>
                        <img src={logo} alt="Logo de MercadoLibre"/>
                    </figure>
                    <form onSubmit={(e) => submitHandler(e)}>
                        <input 
                            type="text"
                            placeholder="Nunca dejes de buscar"
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <button>
                            <img src={searchIcon} alt="Logo de Busqueda"/> 
                        </button>
                    </form>
                </div>
            </header>
            <div className="container">
                <Categories/>
            </div>
        </>
    );
}



export default Searchbar;