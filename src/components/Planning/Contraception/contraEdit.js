import React, {Component} from 'react';
import axios from 'axios';

export default class EditContracep extends Component {

    constructor(props) {
        super(props);

        this.onChangeContracep = this.onChangeContracep.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            contraception_name: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/contraception/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    contraception_name: response.data.contraception_name
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    onChangeContracep(e) {
        this.setState({
            contraception_name: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            contraception_name: this.state.contraception_name
        };
        axios.put('http://localhost:5000/contraception/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        window.location.reload();
        this.props.history.push('/contraceptions');
    }

    render() {
        return (
            <div>
                <h3>Update Kontrasepsi</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nama Kontrasepsi: </label>
                        <input  
                            type="text"
                            className="form-control col-md-6"
                            value={this.state.contraception_name}
                            onChange={this.onChangeContracep}
                        />
                    </div>
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Update Kontrasepsi" className="btn btn-primary" />
                        </div>
                </form>
            </div>
        )
    }
}