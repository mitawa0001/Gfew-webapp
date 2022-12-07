import React from "react";
import "../css/profile.css";
import profileimg from "../image/profile-img.svg";
import Height from "../image/height.svg";
import Power from "../image/power.png";
import Best from "../image/best.svg";
function profile() {
  return (
    <div className="homepageWrapper">
      <div className="d-flex">
        <div className="col-12 col-sm-9 banner-one ">
          <div className="d-flex">
            <div className="d-flex">
              <img src={profileimg} alt="profile img"></img>
            </div>
            <div className="d-flex flex-column w-100 ps-5">
              <div className="d-flex">
                <div className="d-flex justify-content-between w-100 mx-3">
                  <div className="d-flex flex-column flex-wrap">
                    <h2 className="my-0"> Ananya Patel</h2>
                    <p className="my-0 available-2">Available</p>
                  </div>
                  <div className="">Coin Icon 1000 Coins Earned</div>
                </div>
              </div>
              <div className="d-flex pt-1 row">
                <ul className="ps-3 col-6">
                  <img src={Height} alt="height img"></img>
                  <span className="common-color-text">22/08/1989</span>
                </ul>
                <ul className="ps-3 col-6">
                  <img src={Height} alt="height img"></img>
                  <span className="common-color-text">22/08/1989</span>
                </ul>
                <ul className="ps-3 col-6">
                  <img src={Height} alt="height img"></img>
                  <span className="common-color-text">22/08/1989</span>
                </ul>
                <ul className="ps-3 col-6">
                  <img src={Height} alt="height img"></img>
                  <span className="common-color-text">22/08/1989</span>
                </ul>
              </div>
            </div>
          </div>
          <div>
            About : I am a type 2 diabetic looking to connect with coaches and
            other people in this wonderful community that are commited to win
            againist the disease, and live the life to full potential
          </div>
        </div>
        <div className="col-12 col-sm-3 banner-two">
          <div className="d-flex">
            <img className="badgesIcon" src={Best} alt="best seller"></img>
            <img className="badgesIcon" src={Best} alt="best seller"></img>
            <img className="badgesIcon" src={Best} alt="best seller"></img>
          </div>

          <div className="d-flex">
            <img className="badgesIcon" src={Best} alt="best seller"></img>
            <img className="badgesIcon" src={Best} alt="best seller"></img>
            <img className="badgesIcon" src={Best} alt="best seller"></img>
          </div>
        </div>
      </div>

      <div className="d-flex justify-space-between">
        <div className="single-child">
          <div className="for-img-bg">
            <img src={Power} alt="power-img" height="20px" width="20px"></img>
          </div>
          <div className="ms-4">
            <p className="my-0 available-2 current">Current Feels</p>
            <p className="my-0 strong">Strong</p>
          </div>
        </div>
        <div className="single-child">
          <div className="for-img-bg">
            <img src={Power} alt="power-img" height="20px" width="20px"></img>
          </div>
          <div className="ms-4">
            <p className="my-0 available-2 current">Current Feels</p>
            <p className="my-0 strong">Strong</p>
          </div>
        </div>
        <div className="single-child">
          <div className="for-img-bg">
            <img src={Power} alt="power-img" height="20px" width="20px"></img>
          </div>
          <div className="ms-4">
            <p className="my-0 available-2 current">Current Feels</p>
            <p className="my-0 strong">Strong</p>
          </div>
        </div>
        <div className="single-child">
          <div className="for-img-bg">
            <img src={Power} alt="power-img" height="20px" width="20px"></img>
          </div>
          <div className="ms-4">
            <p className="my-0 available-2 current">Current Feels</p>
            <p className="my-0 strong">Strong</p>
          </div>
        </div>
      </div>
      {/* first card row */}
      <div className="d-flex state-data">
        <div className="activity col-6 me-3">
          <div className="d-flex justify-space-between goels">
            <h2 className="current-head">Current Goals</h2>
            <div className="current-edit available-2">Edit</div>
          </div>
        </div>
        <div className="activity col-6">
          <div className="d-flex justify-space-between goels">
            <h2 className="current-head">Current Goals</h2>
            <div className="current-edit available-2">Edit</div>
          </div>
        </div>
      </div>
      {/* second card row */}
      <div className="d-flex state-data mt-4">
        <div className="activity col-6 me-3">
          <div className="d-flex justify-space-between goels">
            <h2 className="current-head">Current Goals</h2>
            <div className="current-edit available-2">Edit</div>
          </div>
        </div>
        <div className="activity col-6">
          <div className="d-flex justify-space-between goels">
            <h2 className="current-head">Current Goals</h2>
            <div className="current-edit available-2">Edit</div>
          </div>
        </div>
      </div>
      {/* third card row */}
      <div className="d-flex state-data mt-4">
        <div className="activity col-6 me-3">
          <div className="d-flex justify-space-between goels">
            <h2 className="current-head">Current Goals</h2>
            <div className="current-edit available-2">Edit</div>
          </div>
        </div>
        <div className="activity col-6">
          <div className="d-flex justify-space-between goels">
            <h2 className="current-head">Current Goals</h2>
            <div className="current-edit available-2">Edit</div>
          </div>
        </div>
      </div>
      {/* third card row */}
      <div className="d-flex state-data my-4">
        <div className="activity col-6 me-3">
          <div className="d-flex justify-space-between goels">
            <h2 className="current-head">Number of Polls Created</h2>
            <div className="current-edit available-2">Edit</div>
          </div>
          <ul >
            <li>Is this a real life? Is this a fantasy?</li>
            <li>Is this a real life? Is this a fantasy?</li>
            <li>Is this a real life? Is this a fantasy?</li>
            <li>Is this a real life? Is this a fantasy?</li>

          </ul>
        </div>
       
      </div>
    </div>
  );
}

export default profile;
