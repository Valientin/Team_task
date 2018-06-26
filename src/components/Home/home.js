import React from 'react';

import './home.scss';

import Items from '../../containers/items';
import Comments from '../../containers/comments';
import { title, description } from './strings';

const Home = () => {
    return(
        <div className="root-wrapper">
            <div className="left-block">
                <h1 className="left-block__title">{title}</h1>
                <h4 className="left-block__description">{description}</h4>
            </div>
            <div className="right-block" style={{display: 'inline-block'}}>
                <Items />
                <Comments />
            </div>
        </div>
    )
}

export default Home;