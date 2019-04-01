import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render(){
        return (
            <div class="container" style={{marginTop: 150}} >
                <h3 class="display-4">Welcome to Family Planning</h3>
                <p class="lead">Family planning services are defined as "educational, comprehensive medical or social activities which enable individuals, including minors, to determine freely the number and spacing of their children and to select the means by which this may be achieved".</p>
            </div>
          )
    }
  }