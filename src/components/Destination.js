import Travel from "../images/travel 1.jpg";
import Transport from "../images/travel 2.jpg";
import Burj from "../images/Dubai 1.jpeg";
import Dubai from "../images/Dubai 2.jpeg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, withn a time frame</p>

      <DestinationData
        className="first-des"
        heading="Havana,Cuba City"
        text="Cuba, officially the Republic of Cuba, 
    is an island country comprising the island 
    of Cuba, as well as Isla de la Juventud and 
    several minor archipelagos, 4,195 islands and cays surrounding
    main island belong to the country. Cuba is located where the northern Caribbean Sea
     Gulf of Mexico, and Atlantic Ocean meet.
     It is a multiethnic country whose people,
      culture and customs derive from diverse origins
       including the Taíno Ciboney peoples, 
     the long period of Spanish"
        img1={Travel}
        img2={Transport}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Dubai, Burj Khalifah"
        text="Dubai is a city and emirate in the United Arab 
    Emirates known for luxury shopping, ultramodern 
    architecture and a lively nightlife scene. Burj
     Khalifa, an 830m-tall tower, 
     dominates the skyscraper-filled skyline. At its
      foot lies Dubai Fountain, with jets and lights 
      choreographed to music. On artificial islands 
      just offshore is Atlantis, The Palm, 
    a resort with water and marine-animal parks."
        img1={Burj}
        img2={Dubai}
      />
    </div>
  );
};

export default Destination;
