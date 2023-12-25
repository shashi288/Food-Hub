import logo from "../../assets/logo.png"
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
export default Header;