import React, {Component} from 'react';

import axios from 'axios';

// TODO Extract to API hub file
const dbAddr = 'http://localhost:4000/projects';

export default class EditProject extends Component{
    constructor(props){
        super(props);

        this.state = {
            project_title: '',
            project_description: '',
            project_repo: '',
            project_technology: ''
        }
    }

    componentDidMount(){
        // TODO Extract into API hub file
        axios.get(dbAddr+'/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    project_title: response.data.project_title,
                    project_description: response.data.project_description,
                    project_repo: response.data.project_repo,
                    project_technology: response.data.project_technology
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    onChangeProjectDescription = (e) => {
        this.setState({
            project_description: e.target.value
        });
    }

    onChangeProjectTitle = (e) => {
        this.setState({
            project_title: e.target.value
        });
    }

    onChangeProjectRepo = (e) => {
        this.setState({
            project_repo: e.target.value
        });
    }

    onChangeProjectTechnology = (e) =>{
        this.setState({
            project_technology: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const obj = {
            project_title: this.state.project_title,
            project_description: this.state.project_description,
            project_repo: this.state.project_repo,
            project_technology: this.state.project_technology
        };
        console.log(obj);
        axios.post(dbAddr+'/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data))
        .catch(err => {
            console.log(err);
        })

        this.props.history.push('/');
    }

    render(){
        return (
            <div>
                <h3>Update Project</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Title:</label>
                        <input type='text' className='form-control' 
                        value={this.state.project_title}
                        onChange={this.onChangeProjectTitle}/>
                    </div>
                    <div className='form-group'>
                        <label>Description:</label>
                        <input type='text' className='form-control' 
                        value={this.state.project_description}
                        onChange={this.onChangeProjectDescription}/>
                    </div>
                    <div className='form-group'>
                        <label>Repository:</label>
                        <input type='text' className='form-control' 
                        value={this.state.project_repo}
                        onChange={this.onChangeProjectRepo}/>
                    </div>
                    <div className="form-group"> 
                        <label>Technology: </label>
                        {/* TODO: Replace with checkbox */}
                        <select className="form-control" value={this.state.project_technology} 
                        onChange={this.onChangeProjectTechnology}>
                            <option value="java">Java</option>
                            <option value="javascript">JavaScript</option>
                            <option value="rust">Rust</option>
                            <option value="nodejs">NodeJS</option>
                            <option value="php">PHP</option>
                            <option value="laravel">Laravel</option>
                            <option value="c">C</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}