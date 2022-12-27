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
          <div className="ul-level">
                <div className="ul-level-indi for-full-color">Full</div>
                <div className="ul-level-indi for-space">Half</div>
                <div className="ul-level-indi">Low</div>
                <div className="ul-level-indi for-res-color">Reserve</div>
        </div>
            <div className="border-box-tank-3">
              
              <span className="level-4">RESERVE</span>
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
      <script></script>
    </>
  );
}

export default tank;
