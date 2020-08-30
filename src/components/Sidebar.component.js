import React, {Component} from 'react';

import profilePicture from '..//images/Meditating_Upon_Arran.jpg';

export default class ProjectList extends Component{
    render(){
        return (
            <div className="Sidebar bg-light">
                <img
                    src= {profilePicture}
                    className= "img-thumbnail"
                    alt="John meditating on the mountain of Arran."
                />
            </div>
        )
    }
}