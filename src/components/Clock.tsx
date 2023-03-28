export default function Clock() {
  return (
    <div className="container-fluid text-dark">
      <div className="row align-items-center vh-100">
        <div className="col-md-6 col-sm-8 col-12 mx-auto">
          <h1 className="text-center fw-semibold p-3">25 + 5 Clock</h1>

          <div className="card bg-secondary shadow-lg rounded-5">
            <div className="card-body">
              <div className="row align-items-center text-center pt-4 pb-1">
                <div id="break-label" className="col fs-4">Break Length</div>
                <div id="session-label" className="col fs-4">Session Length</div>
              </div>

              <div className="row align-items-center text-center">
                <div className="col">
                  <div className="row align-items-center justify-content-center">
                    <button id="break-decrement" className="col btn border-0 ">
                      <i className="bi bi-chevron-down fs-3"></i>
                    </button>
                    <div id="break-length" className="col fs-3">5</div>
                    <button id="break-increment" className="col btn border-0">
                      <i className="bi bi-chevron-up fs-3"></i>
                    </button>
                  </div>
                </div>
                <div className="col">
                  <div className="row align-items-center justify-content-center">
                    <button id="session-decrement" className="col btn border-0">
                      <i className="bi bi-chevron-down fs-3"></i>
                    </button>
                    <div id="session-length" className="col fs-3">25</div>
                    <button id="session-increment" className="col btn border-0">
                      <i className="bi bi-chevron-up fs-3"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="row align-items-center py-4 px-3">
                <div className="col-8 mx-auto">
                  <div className="card bg-primary rounded-5 shadow text-dark">
                    <div className="card-body text-center">
                      <div id="timer-label" className="card-text fs-3 fw-bold">Session</div>
                      <div id="time-left" className="card-title fs-1 fw-bolder">25:00</div>
                      <div className="row align-items-center">
                        <button id="start_stop" className="col btn border-0" type="button">
                          <i className="bi bi-play fs-1 "></i>
                        </button>
                        {/* <button className="col btn border-0" type="button">
                          <i className="bi bi-pause fs-1"></i>
                        </button> */}
                        <button className="col btn border-0" type="button">
                          <i className="bi bi-arrow-repeat fs-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <nav className="navbar mt-3">
            <div className="container-fluid justify-content-center">
              <span className="navbar-brand fs-6 text-primary fw-bold">
                by cwjki
              </span>
              <a
                className="navbar-brand"
                href="https://github.com/cwjki"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github text-primary"></i>
              </a>
              <a
                className="navbar-brand"
                href="https://www.linkedin.com/in/juan-carlos-casteleiro/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin text-primary"></i>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
