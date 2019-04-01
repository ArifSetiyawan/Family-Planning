import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';

export default class wearerRow extends Component {
    constructor(props) {
        super(props);
        this.onDeletewearer = this.onDeletewearer.bind(this)
        this.state = {
            alert : null
        }
    }

    onDeletewearer() {
        axios.delete('http://localhost:5000/wearer/delete/'+this.props.wearer._id)
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
	                title="Are you sure delete this Pemakai Kontrasepsi?"
                    onConfirm={this.onDeletewearer}
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
        <td>{new Date(this.props.wearer.createdAt).toLocaleString()}</td>
        <td>{this.props.wearer.province[0].province_name}</td>
        <td>{this.props.wearer.contraception[0].contraception_name}</td>
        <td>{this.props.wearer.number_of_users}</td>
        <td>
        <Link to={"wearer/edit/"+this.props.wearer._id}>
            <input type="submit" value="Edit" className="btn btn-primary" style={{marginRight: 5}}/>
        </Link>
        <button onClick={(e) => this.getAlert(e)} className="btn btn-danger">Hapus</button>{this.state.alert}
        </td>
    </tr>
 );
}
}