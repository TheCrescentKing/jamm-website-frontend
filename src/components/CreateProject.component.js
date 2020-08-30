import React, {Component} from 'react';

export default class CreateProject extends Component{
    constructor(props){
        super(props);

        this.state = {
            project_title: '',
            project_description: '',
            project_repo: '',
            project_technology: ''
        }
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

        // Temporary logging because the backend is not implemented yet.
        console.log(`Form submitted:
        Project Title ${this.state.project_title}
        Project Description ${this.state.project_description}
        Project Repo ${this.state.project_repo}
        Project Technology ${this.state.project_technology}`);

        // Reset the form by resetting state of the object
        this.setState({
            project_title: '',
            project_description: '',
            project_repo: '',
            project_technology: ''
        })
    }

    render(){
        return (
            <div>
                <h3>Add New Project</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.project_title}
                                onChange={this.onChangeProjectTitle}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.project_description}
                                onChange={this.onChangeProjectDescription}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Repository: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.project_repo}
                                onChange={this.onChangeProjectRepo}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Technology: </label>
                        {/* TODO: Replace with checkbox */}
                        <select className="form-control" value={this.state.project_technology} onChange={this.onChangeProjectTechnology}>
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
                        <input type="submit" value="Create Project" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}