import React from 'react';

import './item.scss';
import {Delete} from './strings';

const Item = (props) => {

    return(
        <div className={props.active ? 'items-block__item active' : 'items-block__item'}>
            <div className="items-block__title">
                <span>{props.name}</span>
                <span className="items-block__count">{props.comments.length}</span>
            </div>
            <button className="items-block__delete">{Delete}</button>
        </div>
    )
}


export default Item;