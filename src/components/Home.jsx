// import React from "react";
import Header from "./Header";
// import "./app.css";

const Home = () => {
  return (
    <>
      <div className="Dash-main">
        <Header />

        <div className="dash-header mt-5 text-center ">
          <p className="fs-1 fw-light">Profession Park Ticket App</p>
          <p className="fs-5 fw-light">You can track and Manage your flow</p>
        </div>

        <div className="dash-sub-main d-flex align-items-center justify-content-center gap-5">
          <div className="card">
            <a href="/login">
              <img
                src="https://pushalert.co/blog/wp-content/uploads/2017/07/multi-user-accounts.png"
                className="card-img-top"
                alt="..."
              />
            </a>
            <div className="card-body">
              <p className="card-title text-center">User Management</p>
            </div>
          </div>

          <div className="card">
            <img
              src="https://toggl.com/blog/wp-content/uploads/2018/09/project-task-list.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-title text-center">Ticket Management</p>
            </div>
          </div>

          <div className="card card-3">
            <img
              src="http://agilewarrior.files.wordpress.com/2013/06/burndown-3-details.png?w=1400"
              className="card-img-top"
              alt="reports"
            />
            <div className="card-body">
              <p className="card-title text-center">Reports and Logs</p>
            </div>
          </div>
        </div>
        {/* Home dashboard with redirects to other pages */}
        {/* <div className="dash-main">
          <div className="card" style="width: 18rem;">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
