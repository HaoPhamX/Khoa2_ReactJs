import React from 'react'

export default function ChildFunctional(props) {

    let {src,name,desc} = props.productItem;

    return (
        <div>
            <div class="card text-left">
                <img style={{width:'250px'}} src={src} alt="" />
                <div class="card-body">
                    <h4 class="card-title">{name}</h4>
                    <p class="card-text">{desc}</p>
                </div>
            </div>
        </div>
    )
}
