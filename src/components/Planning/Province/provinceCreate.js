import React, {Component} from 'react';
import axios from 'axios';

export default class provinceCreate extends Component {

    constructor(props) {
        super(props);

        this.onChangeProvinceName = this.onChangeProvinceName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            province_name: ''
        }
    }

    onChangeProvinceName(e) {
        this.setState({
            province_name: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const newProvince = {
            province_name: this.state.province_name
        }
        
        axios.post('http://localhost:5000/province', newProvince)
            .then(res => console.log(res.data));

        this.setState({
            province_name: ''
        })
        window.location.reload();
        this.props.history.push('/provinces');
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>New Provinsi</h3>
                <form onSubmit={this.onSubmit}>
                    <div style={{marginTop: 20}} className="form-group">
                        <label>Nama Provinsi: </label>
                        <input  
                            type="text"
                            className="form-control col-md-5"
                            value={this.state.province_name}
                            onChange={this.onChangeProvinceName}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Provinsi" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}