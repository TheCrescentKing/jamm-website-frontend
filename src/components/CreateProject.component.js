import React, {Component} from 'react';
import axios from 'axios';

export default class CreateProject extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            description: '',
            repo: '',
            technology: '',
            image: ''
        }
    }

    onChangeProjectDescription = (e) => {
        this.setState({
            description: e.target.value
        });
    }

    onChangeProjectTitle = (e) => {
        this.setState({
            title: e.target.value
        });
    }

    onChangeProjectRepo = (e) => {
        this.setState({
            repo: e.target.value
        });
    }

    onChangeProjectTechnology = (e) =>{
        this.setState({
            technology: e.target.value
        });
        console.log(this.state.technology);
    }

    onChangeProjectImage = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        let data = new FormData();

        data.append('title', this.state.title);
        data.append('description', this.state.description);
        data.append('repo', this.state.repo);
        data.append('technology', this.state.technology);
        data.append('file', this.state.image);

        // const newProject = {
        //     title: this.state.title,
        //     description: this.state.description,
        //     repo: this.state.repo,
        //     technology: this.state.technology,
        //     image: imageName
        // }

        // Post the form through the API
        // TODO Exctract to a separate file
        axios.post('http://localhost:4000/projects/add', data)
            .then(res => console.log(res.data));

        // Reset the form by resetting state of the object
        this.setState({
            title: '',
            description: '',
            repo: '',
            technology: '',
            image: ''
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
                                value={this.state.title}
                                onChange={this.onChangeProjectTitle}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeProjectDescription}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Repository: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.repo}
                                onChange={this.onChangeProjectRepo}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Technology: </label>
                        {/* TODO: Replace with checkbox */}
                        <select className="form-control" value={this.state.technology} onChange={this.onChangeProjectTechnology}>
                            <option value="Java">Java</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="Rust">Rust</option>
                            <option value="NodeJs">NodeJS</option>
                            <option value="PHP">PHP</option>
                            <option value="Laravel">Laravel</option>
                            <option value="C">C</option>
                            <option value="C++">C++</option>
                        </select>
                    </div>
                    <div> 
                        <label value="image">Upload Image</label>
                        <br></br>
                        <input type="file"
                            name="image" onChange={this.onChangeProjectImage} /> 
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="submit" value="Create Project" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}