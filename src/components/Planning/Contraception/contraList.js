import React, {Component} from 'react';
import axios from 'axios';
import Contraception from './contraRow';

export default class contraceptionsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contraceptions: [],
            loadingSection: false
        }
    }

    componentDidMount() {
        this.setState({ loadingSection: true });
        axios.get('http://localhost:5000/contraceptions/')
            .then(response => {
                this.setState({
                    contraceptions: response.data,
                    loadingSection: false
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    contraceptionList() {
        return this.state.contraceptions.map(function(currentContra, i) {
            return <Contraception contraception={currentContra} key={i} />;
        });
    }

    render() {
        return (
            <div className="table-responsive-md" style={{marginTop: 30}}>
                <h3>Data Kontrasepsi</h3>
                <a href={'/contraception'}>
                    <input type="submit" value="New Kontrasepsi" className="btn btn-success"/>
                </a>
                <table className="table table-striped hover" style={{ marginTop: 10 }}>
                    <thead>
                        <tr>
                            <th>Created At</th>
                            <th>Nama Kontrasepsi</th>
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
                            this.contraceptionList() 
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}