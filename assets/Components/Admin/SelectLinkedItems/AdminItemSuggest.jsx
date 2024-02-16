import React from 'react';

export const AdminItemSuggest = ({item, q, onSelect, selected}) => {

    const title = item.title.toUpperCase().split(q.toUpperCase()).join('<strong>'+q.toUpperCase()+'</strong>');

    const handleClick = e => {
        e.preventDefault();
        onSelect(item);
    }

    return (
        <a className={'admin-suggest-item' + (selected ? ' selected': '')} href="#" onClick={handleClick} role="option" aria-selected={selected}>
            <div className="admin-suggest-img" style={{backgroundImage: `url(${item.picturePath})`}}>
            </div>
            <div className="admin-suggest-text">
                <div dangerouslySetInnerHTML={{__html: title}}></div>
                <div>{item.ref}</div>
            </div>
        </a>
    )
}


