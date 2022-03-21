import React from "react";
import emailIcon from "../component/image/user.svg";
import passwordIcon from "../component/image/password.svg";

export default function SigninForm() {
  return (
    <>
      <div class="container">
        <div className="shadow-lg p-5 mb-5 bg-white rounded sign-in-container">
          <div className="login_div">LOGIN</div>
          <form>
            <div class="col-auto">
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text p-3">
                    <img src={emailIcon} alt="user" />
                  </div>
                </div>
                <input
                  img
                  type="email"
                  class="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="form-group row">
              <label
                for="inputPassword3"
                class="col-sm-2 col-form-label"
              ></label>
              <div class="col-md-12 mb-0">
                <div class="col-auto">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text p-3">
                        <img src={passwordIcon} alt="user" />
                      </div>
                    </div>
                    <input
                      type="password"
                      class="form-control"
                      id="inputpassword3"
                      placeholder="password"
                    ></input>
                  </div>
                </div>
                <div class="forgot-password p-3">
                  <a href="/#" class="link-primary text-decoration:none">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-primary mb-2 btn-block m5-2 mr-5"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
