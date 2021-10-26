import React, { Component } from 'react'
import Child from './Child'
// import ChildFunctional from './ChildFunctional';

export default class Parrent extends Component {

    product = {
        id:1,
        name:'Hào ',
        src : "https://cdn.tgdd.vn/Files/2020/06/08/1261696/moi-tai-bo-hinh-nen-asus-rog-2020-moi-nhat_800x450.jpg",
        desc:'Đẹp trai',
        sizeFly:[18,19,20,21]
    }
    size = [22,23,24,25]
    
    showInfo = (name) =>{
        alert(name);
    }

    render() {



        return (
            <div>
                <input type="text" />
                {/* <ChildFunctional productItem={this.product}
                /> */}
                <Child productItem={this.product} chimSize={this.size} showAlert={this.showInfo}/>
            </div>
        )
    }
}
