import React from "react";
import { Container } from "react-bootstrap";
import "../css/alert.css";

function tank() {
  return (
    <>
      <Container>
        <div className="my-3 tank-head">TANK LEVEL METER</div>
        <div className="tank-box">
          <div className="sub-tank">
            <div className="border-box-tank">
                <span className="level">FULL</span>
            </div>
          </div>

          <div className="tank-details">
            <div className="">
              <span className="">Dry Line</span>
              <span className="dot"></span>
            </div>
            <div className="">
              Water Available in Line <span className="dot green"></span>
            </div>
            
          </div>
        </div>
      </Container>
      <script>
        
         
      </script>
    </>
    
  );
}

export default tank;
