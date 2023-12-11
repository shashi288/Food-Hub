import React from "react"
import  ReactDOM  from "react-dom/client"
import logo from "./assets/logo.png"
const AppLayout = ()=>{
    return(
        <div id="app">
            <Header/>
            <Body/>
        </div>
    );
}

const Header =()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img alt="logo" className="logo" src={logo}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Search</li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    );
}

const Body = ()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const RestaurantCard = ()=>{
    return(
        <div className="res-card">
            <div className="res-img-container">
                <img className="res-img" src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9555.jpg"/>
            </div>
            <div className="res-details">
                <h3>Snacks Town</h3>
                <h3>&#10026; 4.3 • 15 mins</h3>
                <h3>Burger,French Fries</h3>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)