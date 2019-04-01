import React, {Component} from 'react';
import axios from 'axios';

export default class EditWearer extends Component {

    constructor(props) {
        super(props);

        this.onChangeWearer = this.onChangeWearer.bind(this);
        this.onChangeProvince = this.onChangeProvince.bind(this);
        this.onChangeContracep = this.onChangeContracep.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            province:'',
            contraception:'',
            number_of_users: '',
            contraceptions: [],
            provinces:[]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/wearer/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    province: response.data.province,
                    contraception: response.data.contraception,
                    number_of_users: response.data.number_of_users

                })
            })
            .catch(function(error) {
                console.log(error)
            })

        //Contraceptions
        axios.get('http://localhost:5000/contraceptions/')
            .then(response => {
                this.setState({contraceptions: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
        //Provinces    
        axios.get('http://localhost:5000/provinces/')
            .then(response => {
                this.setState({provinces: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    contraceptionList() {
        return this.state.contraceptions.map(function(contra, i) {
            return <option value={contra._id} key={i}>{contra._id} - {contra.contraception_name}</option>
        });
    }

    provinceList() {
        return this.state.provinces.map(function(prov, i) {
            return <option value={prov._id} key={i}>{prov._id} - {prov.province_name}</option>
        });
    }

    onChangeProvince(e) {
        this.setState({
            province: e.target.value
        });
    }
    onChangeContracep(e) {
        this.setState({
            contraception:e.target.value
        });
    }
    onChangeWearer(e) {
        this.setState({
            number_of_users: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            province: this.state.province,
            contraception: this.state.contraception,
            number_of_users: this.state.number_of_users
        };
        axios.put('http://localhost:5000/wearer/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        window.location.reload();
        this.props.history.push('/wearers');
    }

    render() {
        return (
            <div>
                <h3>Update Provinsi</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Id Province: </label>
                        <select 
                            class="form-control col-sm-5" 
                            value={this.state.province}
                            onChange={this.onChangeProvince}
                        >
                        {
                            this.provinceList()
                        }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Id Kontrasepsi: </label>
                        <select 
                            class="form-control col-md-4" 
                            value={this.state.contraception}
                            onChange={this.onChangeContracep}
                        >
                        {
                            this.contraceptionList()
                        }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Jumlah Pemakai: </label>
                        <input  
                            type="text"
                            className="form-control col-md-4"
                            value={this.state.number_of_users}
                            onChange={this.onChangeWearer}
                        />
                    </div>
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Update Pemakai Kontrasepsi" className="btn btn-primary" />
                        </div>
                </form>
            </div>
        )
    }
}