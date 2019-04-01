import React, {Component} from 'react'
import axios from 'axios'
export default class contraCreate extends Component {

    constructor(props) {
        super(props);

        this.onChangeContraceptionName = this.onChangeContraceptionName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            contraception_name: ''
        }
    }

    onChangeContraceptionName(e) {
        this.setState({
            contraception_name: e.target.value
        });
    }

    
    onSubmit(e) {
        e.preventDefault();
        const newContraception = {
            contraception_name: this.state.contraception_name
        }

        axios.post('http://localhost:5000/contraception', newContraception)
            .then(res => console.log(res.data));
        this.setState({
            contraceptionName: ''
        })
        window.location.reload();
        this.props.history.push('/contraceptions');
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>New Kontrasepsi</h3>
                <form onSubmit={this.onSubmit}>
                    <div style={{marginTop: 20}} className="form-group">
                        <label>Nama Kontrasepsi: </label>
                        <input  
                            type="text"
                            className="form-control col-md-6"
                            value={this.state.contraception_name}
                            onChange={this.onChangeContraceptionName}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Create Kontrasepsi</button>
                    </div>
                </form>
            </div>
        )
    }
}