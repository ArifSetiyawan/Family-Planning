import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
              <Link to='/' className="navbar-brand">Family Planning</Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                  <Link to='/' className="nav-item nav-link active">Home <span className="sr-only">(current)</span></Link>
                  <Link to='/provinces' className="nav-item nav-link">Provinsi</Link>
                  <Link to='/contraceptions' className="nav-item nav-link">Kontrasepsi</Link>
                  <Link to='/wearers' className="nav-item nav-link">Pemakai Kontrasepsi</Link>
              </div>
              </div>
              </div>
            </nav>
          )
    }
  }