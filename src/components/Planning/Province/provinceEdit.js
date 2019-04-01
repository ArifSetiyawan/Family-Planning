import React, {Component} from 'react';
import axios from 'axios';

export default class EditProvinsi extends Component {

    constructor(props) {
        super(props);

        this.onChangeProvinsi = this.onChangeProvinsi.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            province_name: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/province/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    province_name: response.data.province_name
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    onChangeProvinsi(e) {
        this.setState({
            province_name: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            province_name: this.state.province_name
        };
        axios.put('http://localhost:5000/province/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        window.location.reload();
        this.props.history.push('/provinces');
    }

    render() {
        return (
            <div>
                <h3>Update Provinsi</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nama Provinsi: </label>
                        <input  
                            type="text"
                            className="form-control col-md-6"
                            value={this.state.province_name}
                            onChange={this.onChangeProvinsi}
                        />
                    </div>
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Update Provinsi" className="btn btn-primary" />
                        </div>
                </form>
            </div>
        )
    }
}