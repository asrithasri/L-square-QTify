import React from "react";
import {useOutletContext} from "react-router-dom";
import Section  from "../../Components/Section/Section.jsx";
import styles from "./HomePage.module.css";
import { fetchFilters } from "../api/api.jsx";

export default function HomePage(){
    const {data} = useOutletContext();
    const {newAlbums,topAlbums,songs} = data;

    return (
        <>
            <div className={styles.wrapper}>
               <Section title="TopAlbums" data={topAlbums} type="albums" />
               <Section title="New Albums" data={newAlbums} type="album" />
               <Section title="Songs" data={songs} type="song" filterSource={fetchFilters}/>
                </div>
        
        </>
    );
}