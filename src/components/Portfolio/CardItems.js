import React from 'react';
import ProjectContent from './ProjectContent';


function CardItems(props) {

    return (
        <div class="cards-wrapper">
            {ProjectContent.map((item, key) => {
                return ( 
                    <div id='project' class="card-grid-space">
                        <a key={key} id={item.id} className={item.cName} href={item.url}>
                            <div>
                                <h1 className={item.h1Name}>{item.pName}</h1>
                                <p>{item.paragraph}</p>
                                <div className={item.tagClass}>
                                    <div className={item.divClass}>{item.language}</div>
                                </div>
                            </div>
                        </a>
                    </div>
                );
            })} 
        </div>
    );
}

export default CardItems;