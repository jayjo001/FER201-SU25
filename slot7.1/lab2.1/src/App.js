import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'; 

function App() {
  return (
    <>
      {/* NAVBAR */}
<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Pizza House</a>
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarScroll" 
      aria-controls="navbarScroll" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul 
        className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" 
        style={{"--bs-scroll-height": "100px"}}
      >
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input 
          className="form-control me-2" 
          type="search" 
          placeholder="Search" 
          aria-label="Search" 
        />
        <button className="btn btn-danger" type="submit">🔍</button>
      </form>
    </div>
  </div>
</nav>


      {/* CAROUSEL */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="lab2.4.jpg" className="d-block w-100" alt="Pizza" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Neapolitan Pizza</h3>
              <p>If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* MENU */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <h2 className="mb-4">Our Menu</h2>
          <div className="row">
            {/* Pizza Card 1 */}
            <div className="col-md-3 mb-4">
              <div className="card position-relative">
                <div className="position-absolute top-0 start-0 bg-warning text-black px-2">SALE</div>
                <img src="lab2.jpg" className="card-img-top" alt="Pizza" />
                <div className="card-body">
                  <h5 className="card-title">Margherita Pizza</h5>
                  <p className="card-text">
                    <del>$40.00</del> <span className="text-danger">$24.00</span>
                  </p>
                  <a href="#" className="btn btn-dark">Buy</a>
                </div>
              </div>
            </div>

            {/* Pizza Card 2 */}
            <div className="col-md-3 mb-4">
              <div className="card">
                <img src="lab2.1.jpg" className="card-img-top" alt="Pizza" />
                <div className="card-body">
                  <h5 className="card-title">Mushroom Pizza</h5>
                  <p className="card-text">$25.00</p>
                  <a href="#" className="btn btn-dark">Buy</a>
                </div>
              </div>
            </div>

            {/* Pizza Card 3 */}
            <div className="col-md-3 mb-4">
              <div className="card position-relative">
                <div className="position-absolute top-0 start-0 bg-warning text-black px-2">NEW</div>
                <img src="lb2.3.jpg" className="card-img-top" alt="Pizza" />
                <div className="card-body">
                  <h5 className="card-title">Hawaiian Pizza</h5>
                  <p className="card-text">$30.00</p>
                  <a href="#" className="btn btn-dark">Buy</a>
                </div>
              </div>
            </div>

            {/* Pizza Card 4 */}
            <div className="col-md-3 mb-4">
              <div className="card position-relative">
                <div className="position-absolute top-0 start-0 bg-warning text-black px-2">SALE</div>
                <img src="lab2.2.jpg" className="card-img-top" alt="Pizza" />
                <div className="card-body">
                  <h5 className="card-title">Pesto Pizza</h5>
                  <p className="card-text"><del>$50.00</del> <span className="text-danger">$16.00</span></p>
                  <a href="#" className="btn btn-dark">Buy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOK YOUR TABLE */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <h2 className="mb-4">Book Your Table</h2>
          <form>
            <div className="row mb-3">
              <div className="col-md-4 mb-2">
                <input type="text" className="form-control" placeholder="Your Name *" />
              </div>
              <div className="col-md-4 mb-2">
                <input type="email" className="form-control" placeholder="Your Email *" />
              </div>
              <div className="col-md-4 mb-2">
                <select className="form-select">
                  <option>Select a Service</option>
                  <option>Dine In</option>
                  <option>Take Away</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="5" placeholder="Please write your comment"></textarea>
            </div>
            <button type="submit" className="btn btn-warning">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
