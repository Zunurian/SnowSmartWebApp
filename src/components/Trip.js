import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../images/Trip 1.jpeg";
import Trip2 from "../images/Trip 2.jpeg";
import Trip3 from "../images/Trip 3.jpeg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip to Dubai"
          text="Make organizing your next big getaway quick and 
    easy with a Dubai vacation package. 
    Whether it's the food scene, history or something else
     entirely that brings you to this destination,
      our packages will help you discover the best
       of it. Why not organize your trip to Dubai.
       "
        />

        <TripData
          image={Trip2}
          heading="Trip to Qatar"
          text="Answer the call of adventure with a tailor-made vacation 
    package to Qatar. Wherever your travels take you and whatever 
    you have planned, prepare to discover a destination with so 
    much to offer. The best and easiest way to organize your trip
     to Qatar is to begin with its most renowned cities.
    
       "
        />

        <TripData
          image={Trip3}
          heading="Trip to China"
          text="China is a global 
    powerhouse. With an ancient civilization and strong cultural
     traditions, it has emerged from years of isolation and now 
     occupies a central role in international affairs. China is 
     blessed with rich natural resources including pristine 
     mountains and lakes .
      "
        />
      </div>
    </div>
  );
}

export default Trip;
