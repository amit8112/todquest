import "./App.css";

function App() {
  const myStyle = {
    width: "auto",
    height: "50px",
    borderRadius: "10px",
    background: "#fff",
    marginBottom: "10px",
    boxShadow: "5px 5px 10px 1px rgba(209, 21, 21, 0.2)",
  };

  return (
    <>
      <div className="wrapper">
        <div className="container main">
          <div className="row">
            <div className="col-md-6 side-image">
              {/*-----Image------*/}
              <img src="images/white.png" alt="" />
              <div className="text">
                <p>this is login page only</p>
              </div>
            </div>

            <div
              className="col-md-6 right"
              style={{ backgroundColor: "orange" }}
            >
              <div
                className="card bg-white text-black p-4"
                style={{ borderRadius: "1rem" }}
              >
                <div className="input-box">
                  <div classname="top-main container" style={myStyle}>
                    <div classname="col-6" style={{ display: "inline-block" }}>
                      Already Members
                    </div>
                    <div
                      classname="col-6"
                      style={{ display: "inline-block", float: "right" }}
                    >
                      Need Help ?
                    </div>
                  </div>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="typeEmailX"
                      class="form-control form-control-lg"
                      placeholder="Amit "
                    />
                  </div>
                  <div class="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="typeEmailX"
                      class="form-control form-control-lg"
                      placeholder="Example@gmail.com"
                    />
                  </div>
                  <div className="input-field">
                    <input
                      type="submit"
                      className="submit"
                      defaultValue="Sign In"
                    />
                  </div>
                  <div className="signin">
                    <span>
                      Don't Have Account Yet ?{" "}
                      <a href="">Create Account Here</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
