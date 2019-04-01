import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Province from './provinceRow';

export default class provincesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            provinces: [],
            loadingSection: false
        };
    }

    componentDidMount() {
        this.setState({ loadingSection: true });
        axios.get('http://localhost:5000/provinces/')
            .then(response => {
                this.setState({
                    provinces: response.data,
                    loadingSection: false
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    provinceList() {
        return this.state.provinces.map(function(currentProvince, i) {
            return <Province province={currentProvince} key={i} />;
        });
    }

    render() {
        return (
            <div className="table-responsive-md" style={{marginTop: 30}}>
                <h3>Data Provinsi</h3>
                <Link to={'/province'}>
                    <input type="submit" value="New Provinsi" className="btn btn-success"/>
                </Link>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Created At</th>
                            <th>Nama Provinsi</th>
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
                            this.provinceList() 
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}