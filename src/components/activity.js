// import React from "react";
// import { Container } from "react-bootstrap";
// import "../css/alert.css";

// function activity() {
//   state = {
//     listitems: ["List Item 1", "List Item 2", "List Item 3"]
//   };
//   return (
//     <>
//       <Container>
//         <h5 className="h5 activity-head">ACTIVITY FEED</h5>
//         <ul class="list-group">
//           {this.state.listitems.map((listitem) => (
//             <li className="list-group-item list-group-item-primary" />
//           ))}
//           {/* <li class="list-group-item active" aria-current="true">
//             <span className="active-common-head">Motor OFF due to no water in line</span>
//             <p className="active-common-time">12 Dec 2022, 2:03 PM</p>
//           </li>
//           <li class="list-group-item " aria-current="true">
//             <span className="active-common-head">Motor OFF due to no water in line</span>
//             <p className="active-common-time">12 Dec 2022, 2:03 PM</p>
//           </li>
//           <li class="list-group-item " aria-current="true">
//             <span className="active-common-head">Motor OFF due to no water in line</span>
//             <p className="active-common-time">12 Dec 2022, 2:03 PM</p>
//           </li>
//           <li class="list-group-item " aria-current="true">
//             <span className="active-common-head">Motor OFF due to no water in line</span>
//             <p className="active-common-time">12 Dec 2022, 2:03 PM</p>
//           </li>
//           <li class="list-group-item" aria-current="true">
//             <span className="active-common-head">Motor OFF due to no water in line</span>
//             <p className="active-common-time">12 Dec 2022, 2:03 PM</p>
//           </li> */}
//         </ul>
//       </Container>
//     </>
//   );
// }

// export default activity;

import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Activity extends Component {
  state = {
    listitems: [
      {
        id: 0,
        context: "Automatically switch off the motor once time is up",
        contextdesc: "12 Dec 2022, 2:03 PM",
        modifier: "list-group-item active-common-head list-group-item.active active ",
        modifier1: "list-group-item active-common-head list-group-item.active active ",
      },
      {
        id: 1,
        context: "Tank is Full",
        contextdesc: "12 Dec 2022, 2:03 PM",
        modifier: "list-group-item active-common-head",
      },
      {
        id: 2,
        context: "Motor OFF due to automatic cutoff",
        contextdesc: "12 Dec 2022, 2:03 PM",
        modifier: "list-group-item active-common-head",
      },
      {
        id: 3,
        context: "Tank is Full",
        contextdesc: "12 Dec 2022, 2:03 PM",
        modifier: "list-group-item active-common-head",
      },
      {
        id: 4,
        context: "Motor OFF due to no water in line",
        contextdesc: "12 Dec 2022, 2:03 PM",
        modifier: "list-group-item active-common-head",
       
      },
    ],
  };

  render() {
    return (
      <Container>
      <h5 className="h5 activity-head">ACTIVITY FEED</h5>
        <React.Fragment>
          <ul className="list-group">
            {this.state.listitems.map((listitem) => (
              <li key={listitem.id} className={listitem.modifier}>
                {listitem.context}
                <div className="active-common-time">{listitem.contextdesc} </div>
                
              </li>
            ))}
          </ul>
        </React.Fragment>
      </Container>
    );
  }
}

export default Activity;
