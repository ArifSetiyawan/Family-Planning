import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';

export default class contraRow extends Component {
    constructor(props) {
        super(props);
        this.onDeletecontra = this.onDeletecontra.bind(this)
        this.state = {
            alert : null
        }
    }

    onDeletecontra() {
        axios.delete('http://localhost:5000/contraception/delete/'+this.props.contraception._id)
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
	                title="Are you sure delete this Kontrasepsi?"
                    onConfirm={this.onDeletecontra}
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
        <td>{new Date(this.props.contraception.createdAt).toLocaleString()}</td>
        <td>{this.props.contraception.contraception_name}</td>
        <td>
        <Link to={"contraception/edit/"+this.props.contraception._id}>
            <input type="submit" value="Edit" className="btn btn-primary" style={{marginRight: 5}}/>
        </Link>
            <button onClick={(e) => this.getAlert(e)} className="btn btn-danger">Hapus</button>{this.state.alert}
        </td>
    </tr>
 );
}
}
