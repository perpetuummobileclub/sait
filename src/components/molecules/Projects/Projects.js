import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import * as contentful from 'contentful'
import Project from '../Project/Project';


class Projects extends Component {
    state = {
        websites: [],
        searchString: ''
    }

    constructor() {
        super()
        this.getWebsites()
    }




    render() {
        return (
            <div>
                Some description
            </div>
        )
    }
}
export default Projects;