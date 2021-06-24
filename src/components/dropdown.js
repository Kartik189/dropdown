import React from 'react';
import { useState } from 'react';
import './dropdown.styles.css';
import FontAwesome from 'react-fontawesome';

function DropDown({data}) {

    const [ open , toggleOpen ] = useState(false);
    const [ selectedItemColor , setColor ] = useState('black');

    function toggleList() {
        toggleOpen(open => !open);
    }

    function selectItem (item) {
        toggleList();
        setColor(selectedItemColor => item.colour);
    }

    return(
        <div className="dd-wrapper">
            <button className="dd-header" type="button" onClick={toggleList}>
                <div className="dd-header-title">
                    <div classname="leading-box" style={{ height: '15px' , width: '15px' , backgroundColor: 'black' , display: 'inline-block', marginRight: '16px'}}></div>
                    <span>{selectedItemColor}</span>
                </div>
                {
                    open ? <FontAwesome name="angle-up" size="1x" /> : <FontAwesome name="angle-down" size="1x" />
                }
            </button>
            {
                open && (
                    <div className="dd-list">
                    {   
                        data.map((item) => {
                            return(
                                <button type="button" key={item.id} className="dd-list-item" onClick={() => selectItem(item)}>
                                    <div classname="leading-box" style={{ height: '15px' , width: '15px' , backgroundColor: 'black' , display: 'inline-block', marginRight: '16px', marginLeft: '16px'}}></div>
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

export default DropDown;