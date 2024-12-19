import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Ensure this is imported for Leaflet styles

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: require("../assets/image/morgan__logo-dark.png"), // Adjust the path based on your file structure
  iconSize: [15, 15], // Adjust size as needed
  iconAnchor: [15, 30], // Align marker icon correctly
  popupAnchor: [0, -30], // Adjust popup position
});

function Service() {
  const indiaLocations = [
    { name: "Bangalore", position: [12.9716, 77.5946] },
    { name: "New Delhi", position: [28.6139, 77.209] },
    { name: "Tirupur", position: [11.1085, 77.3411] },
    { name: "Kolkata", position: [22.5726, 88.3639] },
    { name: "Ludhiana", position: [30.901, 75.8573] },
    { name: "Ahmedabad", position: [23.0225, 72.5714] },
    { name: "Mumbai", position: [19.076, 72.8777] },
  ];

  const overseasLocations = [
    { name: "Dhaka", position: [23.8103, 90.4125] },
    { name: "Colombo", position: [6.9271, 79.8612] },
    { name: "Jordan", position: [31.9454, 35.9284] },
  ];

  return (
    <div className="bg-black text-white"  id="service">
    <section className="px-6 py-8">
      <div className="container mx-auto">
        <h4 className="text-2xl font-bold text-red-500 uppercase mb-8">After Sales Service</h4>
  
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Text Section */}
          <div className="space-y-8">
            <div>
              <p className="text-gray-300 text-xs mb-4">
                GA Morgan has built a very strong after-sales service network by
                having its service centres in multiple locations, thus assuring to
                provide the best service in the industry.
              </p>
              <hr className="border-gray-500" />
            </div>
  
            <div>
              <p className="text-gray-300 text-xs mb-4">
                Centralized parts warehouse in India helps for quick delivery of
                spare parts and keeps the machines running 24x7. More than 25% of
                machineries already run 16-24 hours a day for higher performance
                and fast ROI.
              </p>
              <hr className="border-gray-500" />
            </div>
  
            <div>
              <p className="text-gray-300 text-xs mb-4">
                GA Morgan introduces a very innovative mobile application
                <span className="font-bold text-s text-white"> “MST” (Morgan Service Track)</span>, where customers
                can register and monitor the status of service calls in real time.
              </p>
              <hr className="border-gray-500" />
            </div>
  
            <div>
              <h6 className="text-lg font-bold text-red-500  uppercase mb-4">
                India Service Points
              </h6>
              <ul className="list-disc text-xs pl-6">
                <li>Bangalore</li>
                <li>New Delhi</li>
                <li>Tirupur</li>
                <li>Kolkata</li>
                <li>Ludhiana</li>
                <li>Ahmedabad</li>
                <li>Mumbai</li>
              </ul>
              <hr className="border-gray-500 mt-4" />
            </div>
  
            <div>
              <h6 className="text-lg font-bold text-red-500 u uppercase mb-4">
                Overseas Service Points
              </h6>
              <ul className="list-disc text-xs pl-6">
                <li>Dhaka</li>
                <li>Colombo</li>
                <li>Jordan</li>
              </ul>
              <hr className="border-gray-500 mt-4" />
            </div>
          </div>
  
          {/* Map Section */}
          <div className="flex justify-center">
            <MapContainer
              center={[20.5937, 78.9629]} // Centered on India
              zoom={5} // Adjust zoom level
              className="w-full h-96 max-w-lg rounded-lg shadow-lg"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
  
              {/* Add markers for India locations */}
              {indiaLocations.map((location, index) => (
                <Marker
                  key={index}
                  position={location.position}
                  icon={customIcon}
                >
                  <Popup>{location.name}</Popup>
                </Marker>
              ))}
  
              {/* Add markers for Overseas locations */}
              {overseasLocations.map((location, index) => (
                <Marker
                  key={index}
                  position={location.position}
                  icon={customIcon}
                >
                  <Popup>{location.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  );
}

export default Service;


// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";

// // Custom marker icon
// const customIcon = new L.Icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
//   iconSize: [25, 25],
// });

// function Service() {
//   const indiaLocations = [
//     { name: "Bangalore", position: [12.9716, 77.5946] },
//     { name: "New Delhi", position: [28.6139, 77.209] },
//     { name: "Tirupur", position: [11.1085, 77.3411] },
//     { name: "Kolkata", position: [22.5726, 88.3639] },
//     { name: "Ludhiana", position: [30.901, 75.8573] },
//     { name: "Ahmedabad", position: [23.0225, 72.5714] },
//     { name: "Mumbai", position: [19.076, 72.8777] },
//   ];

//   const overseasLocations = [
//     { name: "Dhaka", position: [23.8103, 90.4125] },
//     { name: "Colombo", position: [6.9271, 79.8612] },
//     { name: "Jordan", position: [31.9454, 35.9284] },
//   ];

//   return (
//     <div className="bg-black text-white">
//       <section className="px-6 py-8">
//         <div className="container mx-auto">
//           <h4 className="text-2xl font-bold uppercase mb-8">After Sales Service</h4>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Text Section */}
//             <div>
//               <div className="mb-8">
//                 <p className="text-gray-300 text-xs mb-4">
//                   GA Morgan has built a very strong after-sales service network
//                   by having its service centres in multiple locations, thus
//                   assuring to provide the best service in the industry.
//                 </p>
//                 <hr className="border-gray-500" />
//               </div>

//               <div className="mb-8">
//                 <p className="text-gray-300 text-xs mb-4">
//                   Centralized parts warehouse in India helps for quick delivery
//                   of spare parts and keeps the machines running 24x7. More than
//                   25% of machineries already run 16-24 hours a day for higher
//                   performance and fast ROI.
//                 </p>
//                 <hr className="border-gray-500" />
//               </div>

//               <div className="mb-8">
//                 <p className="text-gray-300 text-xs mb-4">
//                   GA Morgan introduces a very innovative mobile application
//                   <span className="font-bold text-s text-white">
//                     “MST” (Morgan Service Track)
//                   </span>
//                   , where customers can register and monitor the status of
//                   service calls in real time.
//                 </p>
//                 <hr className="border-gray-500" />
//               </div>

//               <div className="mb-8">
//                 <h6 className="text-lg font-bold uppercase mb-4">
//                   India Service Points
//                 </h6>
//                 <ul className="list-disc text-xs pl-6">
//                   <li>Bangalore</li>
//                   <li>New Delhi</li>
//                   <li>Tirupur</li>
//                   <li>Kolkata</li>
//                   <li>Ludhiana</li>
//                   <li>Ahmedabad</li>
//                   <li>Mumbai</li>
//                 </ul>
//                 <hr className="border-gray-500 mt-4" />
//               </div>

//               <div>
//                 <h6 className="text-lg font-bold uppercase mb-4">
//                   Overseas Service Points
//                 </h6>
//                 <ul className="list-disc text-xs pl-6">
//                   <li>Dhaka</li>
//                   <li>Colombo</li>
//                   <li>Jordan</li>
//                 </ul>
//                 <hr className="border-gray-500 mt-4" />
//               </div>
//             </div>

//             {/* Map Section */}
//             <div className="flex justify-center">
//               <MapContainer
//                 center={[20.5937, 78.9629]} // Centered on India
//                 zoom={4}
//                 className="w-full h-96 max-w-lg rounded-lg shadow-lg"
//               >
//                 <TileLayer
//                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 />

//                 {/* Add markers for India locations */}
//                 {indiaLocations.map((location, index) => (
//                   <Marker
//                     key={index}
//                     position={location.position}
//                     icon={customIcon}
//                   >
//                     <Popup>{location.name}</Popup>
//                   </Marker>
//                 ))}

//                 {/* Add markers for Overseas locations */}
//                 {overseasLocations.map((location, index) => (
//                   <Marker
//                     key={index}
//                     position={location.position}
//                     icon={customIcon}
//                   >
//                     <Popup>{location.name}</Popup>
//                   </Marker>
//                 ))}
//               </MapContainer>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Service;