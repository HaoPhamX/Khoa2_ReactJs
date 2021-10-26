import React, { Component } from 'react'

export default class Child extends Component {

    renderSize  = () =>{
        let {sizeFly} = this.props.productItem;
        return sizeFly.map((number,index)=>{
            return <button key={index}>{number}</button>
        })
    }

    render() {
        let { src, name, desc} = this.props.productItem;
        let {chimSize} = this.props;
        return (
            <div>

                <div class="card text-left">
                    <img className="img-fluid w-50" src={src} alt="" />
                    <div class="card-body">
                        <h4 class="card-title">{name}</h4>
                        <p class="card-text">{desc}</p>
                        {this.renderSize()}
                        {chimSize.map((number,index)=>{
                            return <button className="btn btn-success" key={index} >{number}</button>
                        })}
                        <button onClick ={()=>{this.props.showAlert(desc)}}>Detail</button>
                    </div>
                </div>
            </div>
        )
    }
}
