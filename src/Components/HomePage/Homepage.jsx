import React from "react";
import {useOutletContext} from "react-router-dom";
import Section  from "../../Components/Section/Section.jsx";
import styles from "./HomePage.module.css";
import { fetchFilters } from "../api/api.jsx";

export default function HomePage({props}){
    const {data} = useOutletContext();
    
    const {topAlbums,newAlbums,songs} = data;

    return (

        <>
            <div className={styles.wrapper}>
               <Section title="Top Albums" data={topAlbums} type="album" />

               <Section title="New Albums" data={newAlbums} type="album" />
               
               <Section title="Songs" data={songs} type="song" filterSource={fetchFilters}/>
                </div>
        
        </>
    );
}

// import React from "react";
// import { useOutletContext } from "react-router-dom";
// import Section from "../../Components/Section/Section.jsx";
// import styles from "./HomePage.module.css";
// import { fetchFilters, fetchTopAlbums,fetchNewAlbums} from "../api/api.jsx";

// export default function HomePage() {
//   const outletContext = useOutletContext();

//   // Add defensive checks
//   if (!outletContext || !outletContext.data) {
//     return <div>Loading...</div>; // or handle error appropriately
//   }

//   const { data } = outletContext;
//   const { newAlbums, topAlbums, songs } = data;

//   // Further defensive checks to ensure these are arrays
//   if (!Array.isArray(newAlbums) || !Array.isArray(topAlbums) || !Array.isArray(songs)) {
//     return <div>Error: Data is not iterable</div>;
//   }

//   return (
//     <>
//       <div className={styles.wrapper}>
//         <Section title="Top Albums" data={topAlbums} type="albums" filterSource={fetchTopAlbums} />
//         <Section title="New Albums" data={newAlbums} type="album" filterSource={fetchNewAlbums}/>
//         <Section title="Songs" data={songs} type="song" filterSource={fetchFilters} />
//       </div>
//     </>
//   );
// }
