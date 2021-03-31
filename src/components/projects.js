import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i.imgur.com/LxqLaAF.png) center / cover' }}>React</CardTitle>
                    <CardText>
                        Sneakerheads is an app for avid shoe collectors to show off their collections or peruse the collections of others.
                        The user is encouraged to upload a photo and details of their shoe collection to show off to their friends and other collectors.
                    </CardText>
                    <CardActions border>
                        <Button colored href='https://github.com/kingdonut23/Sneaker_Head' target="_blank">GitHub</Button>
                        <Button colored href='http://sneaker-heads.herokuapp.com/' target="_blank">Link</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <iconButton name="share" />
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} >
                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i.imgur.com/LxqLaAF.png) center / cover' }}>React</CardTitle>
                <CardText>
                    Sneakerheads is an app for avid shoe collectors to show off their collections or peruse the collections of others.
                    The user is encouraged to upload a photo and details of their shoe collection to show off to their friends and other collectors.
                </CardText>
                <CardActions border>
                    <Button colored href='https://github.com/kingdonut23/Sneaker_Head' target="_blank">GitHub</Button>
                    <Button colored href='http://sneaker-heads.herokuapp.com/' target="_blank">Link</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                    <iconButton name="share" />
                </CardMenu>
            </Card>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>NodeJS</h1></div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>MongoDB</h1></div>
            )
        }
    }




    render() {
        return (
            <div className="catergory-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React/SQL</Tab>
                    <Tab>SQL/JavaScript/Express</Tab>
                    <Tab>NodeJS/JavaScript</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                <section className='project-grid'>
                    <Grid className='projects-grid'>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
};

export default Projects;