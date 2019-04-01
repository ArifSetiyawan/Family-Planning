import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';

export default class provinceRow extends Component {
    constructor(props) {
        super(props);
        this.onDeleteprovince = this.onDeleteprovince.bind(this)
        this.state = {
            alert : null
        }
    }

    onDeleteprovince() {
        axios.delete('http://localhost:5000/province/delete/'+this.props.province._id)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        
        this.setState({
            alert: true
        });
        window.location.reload();
    }

    getAlert(e){
        this.setState({
            alert: (
                <SweetAlert
                    warning
                    showCancel
                    confirmBtnText="Yes, delete it!"
	                confirmBtnBsStyle="danger"
	                cancelBtnBsStyle="default"
	                title="Are you sure delete this Provinsi?"
                    onConfirm={this.onDeleteprovince}
                    onCancel={() => this.cancelDel()}
                >
                </SweetAlert>
            )
        })
        e.preventDefault();
    };

    cancelDel = () => {
        this.setState({
            alert: null
        });
    }
  render() {
    return (
    <tr>
        <td>{new Date(this.props.province.createdAt).toLocaleString()}</td>
        <td>{this.props.province.province_name}</td>
        <td>
        <Link to={"province/edit/"+this.props.province._id}>
            <input type="submit" value="Edit" className="btn btn-primary" style={{marginRight: 5}}/>
        </Link>
        <button onClick={(e) => this.getAlert(e)} className="btn btn-danger">Hapus</button>{this.state.alert}
        </td>
    </tr>
 );
}
}