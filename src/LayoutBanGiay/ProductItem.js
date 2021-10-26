import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let { image, name, price } = this.props.dataProductItem;
        return (
            <div style={{ width: '350px' }} className="card text-left" >
                <img className="card-img-top img-fluid" src={image} alt="" />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{price}</p>
                    <button className="w3-button w3-black">View detail <i style={{color:'white'}} class="fa fa-shopping-cart"></i></button>
                </div>
            </div>
        )
    }
}
