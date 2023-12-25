import { RES_IMG } from "../utils/constants";

const RestaurantCard = (props)=>{
    const{resData}=props;
    const{cloudinaryImageId,name,avgRating,locality,cuisines}=resData?.info
    const{slaString}=resData.info?.sla
    return(
        <div className="res-card">
            <div className="res-img-container">
                <img className="res-img" src={RES_IMG+cloudinaryImageId}/>
            </div>
            <div className="res-details">
                <h3>{name}</h3>
                <h3>&#10026; {avgRating} • {slaString}</h3>
                <p>{cuisines.join(", ")}</p>
                <p>📍{locality}</p>
            </div>
        </div>
    )
}
export default RestaurantCard;