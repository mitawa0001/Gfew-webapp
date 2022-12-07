import React from "react";
import "../css/login.css";
import logban from "../image/logban.png";

function login() {
  return (
    <div className="m-0 justify-content-center loginWrapper">
      <div className=" d-flex justify-content-center align-items-center ">
        <div className="login-card rounded-10 mb-0 h-auto w-auto shadow p-0  card">
          <div className=" d-flex justify-content-center row">
            <div className="d-flex flex-wrap">
              <div className="height: 100%; width: 400px;">
                <img class="img-fluid" src={logban} alt="coverImg" />
              </div>
              <div>
                <div class="p-0 col-md-12">
                  <div
                    class="rounded-0 mr-0 p-2 border-0  card main-special">
                    <div class="pb-1 pt-50 bg-white card-header">
                      <div class="card-title">
                        <h3 class="mb-1 login-title text-center">
                          <b>Your Recipes Are Waiting</b>
                        </h3>
                        <p class="login-view-content text-muted text-center">
                          To get personalised recommendation &amp; use all of
                          get Fit Feature, please Connect below
                        </p>
                      </div>
                    </div>
                    <div class="card-body">
                      <form action="/" class="">
                        <div class="mb-3">
                          <input
                            class="loginEmailInput"
                            type="email"
                            placeholder="Email"
                            required=""
                            value=""
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            class="loginPasswordInput"
                            type="password"
                            placeholder="Password"
                            required=""
                            value=""
                          />
                        </div>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                          <div class="forgotPasswordLabel">
                            <a
                              class="text-decoration-none forgott"
                              href="/forgotPassword"
                              
                            >
                              Forgot Password?
                            </a>
                          </div>
                        </div>
                        <div class="d-flex justify-content-center ">
                          <a
                            class="p-0 m-0 d-flex justify-content-center before-login"
                            href="/homepage"
                         
                          >
                            <button
                              type="submit"
                              class="loginButton  btn btn-secondary"
                            >
                              Login
                            </button>
                          </a>
                        </div>
                        <div class="noAccountLabel">
                          <a
                            class="text-decoration-none forgott"
                            href="/signup"
                            
                          >
                            not account?
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
