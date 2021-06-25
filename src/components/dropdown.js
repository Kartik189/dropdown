import React from 'react';
import { useState } from 'react';
import './dropdown.styles.css';
import arrowUp from '../assets/arrowUp.svg';
import arrowDown from '../assets/arrowDown.svg';
import black from '../assets/colours/black.webp';
import onClickOutside from 'react-onclickoutside';

function DropDown({data}) {

    const [ open , toggleOpen ] = useState(false);
    const [ selectedItemColor , setColor ] = useState('black');
    const [ selectedImage , setImage ] = useState(black);

    DropDown.handleClickOutside = () => toggleOpen(false);

    function toggleList() {
        toggleOpen(open => !open);
    }

    function selectItem (item) {
        toggleList();
        setColor(selectedItemColor => item.colour);
        setImage(selectedImage => item.url);
    }

    return(
        <div className="dd-wrapper">
            <button className="dd-header" type="button" onClick={toggleList}>
                <div className="dd-header-title">
                    <img src={selectedImage} alt="color-variants" className="color-image"/>
                    <span>{selectedItemColor}</span>
                </div>
                {
                    open ? <img className="toggle-button" src={arrowUp} alt="toggle-button" /> : <img className="toggle-button" src={arrowDown} alt="toggle-button" />
                }
            </button>
            {
                open && (
                    <div className="dd-list">
                    {   
                        data.map((item) => {
                            return(
                                <button type="button" key={item.id} className="dd-list-item" onClick={() => selectItem(item)}>
                                    <img src={item.url} alt="color-variants" className="color-image"/>
                                    <span>{item.colour}</span>
                                </button>
                                )
                            }
                        )
                    }
                    </div>
                )
            }
        </div>
    )
}

const clickOutsideConfig = {
    handleClickOutside : () => DropDown.handleClickOutside,
};

export default onClickOutside(DropDown,clickOutsideConfig);