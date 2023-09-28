import React from 'react'
import './shimmer.css'
const Shimmer = () => {
    return (
        <div className="restaurant-list">
          
          {Array(15)
            .fill("")
            .map((e, index) => (
              <div key={index} className="shimmer-card"></div>
            ))}
        </div>
      );
    };

export default Shimmer