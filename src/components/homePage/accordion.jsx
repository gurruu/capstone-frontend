// import React, { useState } from "react";
// import "./accordion.css";

// const Accordion = ({ items }) => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const onTitleClick = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   const renderedItems = items.map((item, index) => {
//     const isActive = index === activeIndex ? "active" : "";

//     return (
//       <div key={item.title} className="accordion-item">
//         <div
//           className={`accordion-title ${isActive}`}
//           onClick={() => onTitleClick(index)}
//         >
//           {item.title}
//         </div>
//         <div className={`accordion-content ${isActive}`}>{item.content}</div>
//       </div>
//     );
//   });

//   return <div className="accordion">{renderedItems}</div>;
// };

// export default Accordion;

// import React, { useState } from 'react';
// import './accordion.css'; // You can define your CSS styles for the accordion component

// const Accordion = ({ items }) => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const onTitleClick = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   const renderedItems = items.map((item, index) => {
//     const isActive = index === activeIndex ? 'active' : '';

//     return (
//       <div key={item.title} className="accordion-item">
//         <div
//           className={`accordion-title ${isActive}`}
//           onClick={() => onTitleClick(index)}
//         >
//           {item.title}
//         </div>
//         <div className={`accordion-content ${isActive}`}>
//           {item.content}
//         </div>
//       </div>
//     );
//   });

//   return <div className="accordion">{renderedItems}</div>;
// };

// export default Accordion;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./accordion.css"; 

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex ? "active" : "";

    return (
      <div key={item.title} className="accordion-item">
        <div
          className={`accordion-title ${isActive}`}
          onClick={() => onTitleClick(index)}
        >
          {item.title}
          <FontAwesomeIcon icon={activeIndex === index ? faTimes : faPlus} />
        </div>
        <div className={`accordion-content ${isActive}`}>{item.content}</div>
      </div>
    );
  });

  return <div className="accordion">{renderedItems}</div>;
};

export default Accordion;
