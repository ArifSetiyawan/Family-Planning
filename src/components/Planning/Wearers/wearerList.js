import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Wearer from './wearerRow';
export default class wearersList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          wearers: [],
          loadingSection: false
        };
    }

    componentDidMount() {
        this.setState({ loadingSection: true });
        axios.get('http://localhost:5000/wearers/')
            .then(response => {
                this.setState({
                  wearers: response.data,
                  loadingSection: false
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    wearerList() {
        return this.state.wearers.map(function(currentWearer, i) {
            return <Wearer wearer={currentWearer} key={i} />;
        });
    }

    render() {
        return (
            <div className="table-responsive-md" style={{marginTop: 30}}>
                <h3>Data Pemakai Kontrasepsi</h3>
                <Link to={'/wearer'}>
                    <input type="submit" value="New Pemakai Kontrasepsi" className="btn btn-success"/>
                </Link>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Created At</th>
                            <th>Nama Provinsi</th>
                            <th>Nama Kontrasepsi</th>
                            <th>Jumlah Pemakai</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          this.state.loadingSection === true ? 
                            <div class="d-flex justify-content-center">
                                <div class="spinner-border" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div> : 
                          this.wearerList() 
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}