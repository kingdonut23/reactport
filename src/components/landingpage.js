import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';
import selfie from './images/selfie.jpg'

class Landing extends Component {
    render() {
        return (
            <div style={{ width: "100%", margin: "auto" }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={selfie} className="selfie" alt="My Face"></img>
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr />

                            <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | SQL | Express | MongoDB</p>

                            <div className="social-media">
                                <a href="https://www.linkedin.com/in/jeffery-davis-03b046146/" rel = "noopener noreferrer" target="_blank">
                                <i class="fab fa-linkedin"></i>
                                </a>

                                <a href="https://github.com/kingdonut23" rel = "noopener noreferrer" target="_blank">
                                <i class="fab fa-github-square"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
};

export default Landing;