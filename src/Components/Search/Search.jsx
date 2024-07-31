

import React from "react";
import styles from "./Search.module.css"
import {ReactComponent as SearchIcon} from "../../Assets/Search_icon.svg"

function Search(){
    const onSubmit = (e) => {
        e.preventDefault();
    
      }
    return (
        <form className={styles.container} onSubmit={onSubmit}>
        <input name="search" className={styles.searchbar} placeholder="Search a song of your choice" required />
        <button type="submit" className={styles.searchbutton}>
            <SearchIcon />
        </button>
    </form>
    )
}

export default Search;


