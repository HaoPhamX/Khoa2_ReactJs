import React, { Component } from 'react'

export default class SanPham extends Component {


    render() {
        let {hinhAnh,tenSP,giaBan} = this.props.sanPhamProps;

        return (
            <div className="card text-center" >
                <img style={{ width: '100%', height: "300px" }} className="card-img-top img-fluid" src={hinhAnh} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{tenSP}</h4>
                    <p className="card-text">{giaBan.toLocaleString()}</p>
                    <button onClick={() => { this.props.xemChiTietProps(this.props.sanPhamProps)}} className="btn btn-success">Xem Chi Tiet</button>
                </div>
            </div>
        )
    }
}
