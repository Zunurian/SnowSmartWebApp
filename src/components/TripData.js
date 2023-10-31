import "./TripStyles.css";
import Trip1 from "../images/Trip 1.jpeg";
function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img alt="image" src={props.image} />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default TripData;
