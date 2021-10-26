import React, { Component } from 'react'
import ProductList from './LayoutBanGiay/ProductList'
import dataShoes from './Data/dataShoes.json'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div class="col-2">
            <div className="nav flex-column nav-pills justify-content-center" id="v-pills-tab">
              <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#home" role="tab" >Home</a>
              <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#profile" role="tab" >Profile</a>
            </div>
          </div>
          <div className="productList col-10">
            <div class="tab-content" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="home" role="tabpanel">
                <ProductList arrProduct={dataShoes} />
              </div>
              <div class="tab-pane fade" id="profile" role="tabpanel" >
                <ProductList arrProduct={dataShoes} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
