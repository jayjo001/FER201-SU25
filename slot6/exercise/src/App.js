import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🌟 Bootstrap Cards Demo</h2>

      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="oto.jpg" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">Card Title 1</h5>
              <p className="card-text">This is a description for card 1.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="oto.jpg" className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <h5 className="card-title">Card Title 2</h5>
              <p className="card-text">This is a description for card 2.</p>
              <a href="#" className="btn btn-success">Learn More</a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="oto.jpg" className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">Card Title 3</h5>
              <p className="card-text">This is a description for card 3.</p>
              <a href="#" className="btn btn-warning">Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;