import React, {Component} from 'react';
import axios from 'axios';

import Project from './Project.component';

export default class ProjectList extends Component{
    constructor(props){
        super(props);
        this.state = {projects: []};
    }

    // TODO Extract API call to external file
    componentDidMount(){
        axios.get('http://localhost:4000/projects')
            .then(response => {
                this.setState({projects: response.data})
            })
            .catch(err => {
                console.log(err);
            })
    }

    projectList(){
        return this.state.projects.map((project) => {
                return <Project key={project._id} project={project}></Project>;
        })
    }

    render(){
        return (
            <div className="project-list">
                <h3>Projects</h3>
                {this.projectList()}
            </div>
        )
    }
}