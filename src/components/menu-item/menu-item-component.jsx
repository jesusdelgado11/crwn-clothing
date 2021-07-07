import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

/*
    history and match are comming from props and linkUrl is coming from directory list
*/
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div 
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div className='background-image'           
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />        
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
); 

/*
   withRouter will give us access to url props 
   like history { title, imageUrl, size, history }
*/

export default withRouter(MenuItem);