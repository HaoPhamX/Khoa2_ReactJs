import React, { Component } from 'react'
import SanPham from './SanPham'



export default class DanhSachSanPham extends Component {

    mangSanPham = [
        {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2, Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },
        {
            "maSP": 2,
            "tenSP": "Meizu 16Xs",
            "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
            "heDieuHanh": "Android 9.0 (Pie); Flyme",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 7600000,
            "hinhAnh": "./img/meizuphone.jpg"
        },
        {
            "maSP": 3,
            "tenSP": "Iphone XS Max",
            "manHinh": "OLED, 6.5, 1242 x 2688 Pixels",
            "heDieuHanh": "iOS 12",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 27000000,
            "hinhAnh": "./img/applephone.jpg"
        }
    ]

    state = {
        sanPhamChiTiet: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2, Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        }
    }

    renderSanPham = () => {
        return this.mangSanPham.map((item, index) => {
            return <div className="col-4" key={index}>
                <SanPham sanPhamProps={item} xemChiTietProps={this.xemChiTiet}/>
            </div>
        })
    }

    xemChiTiet = (newSanPham) =>{
        this.setState({
            sanPhamChiTiet:newSanPham
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center display-4">Danh Sách Sản Phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <div className="row">
                    <div className="col-4">
                        <h2 style={{fontWeight:'bold'}}>{this.state.sanPhamChiTiet.tenSP}</h2>
                        <img className="img-fluid" src={this.state.sanPhamChiTiet.hinhAnh} alt="" />
                    </div>
                    <div className="col-8">
                        <h2 style={{fontWeight:'bold'}}>Thông số kỹ thuật</h2>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Màn Hình</th>
                                    <td>{this.state.sanPhamChiTiet.manHinh}</td>
                                </tr>
                                <tr>
                                    <th>Hệ Điều Hành</th>
                                    <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <th>Camera Trước</th>
                                    <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <th>Camera Sau</th>
                                    <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <td>{this.state.sanPhamChiTiet.ram}</td>
                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <td>{this.state.sanPhamChiTiet.rom}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}
