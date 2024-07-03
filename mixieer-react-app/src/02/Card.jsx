import profilePic from "./assets/profilePic.jpeg";

function Card() {
    
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">mixieer react APP</h2>
            <p className="card-text">best APP</p>
        </div>
    );
}

export default Card;  