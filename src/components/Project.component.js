import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class Project extends Component{
    render(){
        return(
            <div>
                {/* image */}
                <h4>{this.props.project.title}</h4>
                {/* TODO: Extract backend address to single file */}
                <img className="img-thumbnail" src={`http://localhost:4000/projects/image/${this.props.project._id}`}
                    alt={'Image of ' + this.props.project.title}></img>
                <p>{this.props.project.description}</p>
                <a href={ "" + this.props.project.repo} target='_blank' rel="noopener noreferrer">Repository</a>
                <h6>Technology: {this.props.project.technology}</h6>
                <Link className="btn btn-primary" to={"/edit/"+this.props.project._id}>Edit</Link>
            </div>
        )
    }
}

export default Project;