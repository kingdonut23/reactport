import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, DataTable, TableHeader } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className="projects-body">
                    <Card shadow={3} style={{ minWidth: '450', margin: 'auto', marginBottom: "20px" }} >
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i.imgur.com/LxqLaAF.png) center / cover' }}></CardTitle>
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
                    <div className="projects-table">
                        <DataTable style={{ justifyContent: 'space-between', width: '50%', margin: 'auto' }}
                            shadow={3}
                            rows={[
                                { tech: 'Express' },
                                { tech: 'Node JS' },
                                { tech: 'React JS' },
                                { tech: 'Material UI' },
                                { tech: 'React-Bootstrap' },
                                { tech: "MYSQL" }
                            ]}
                        >
                            <TableHeader style={{ textAlign: "center" }} name="tech">Technologies</TableHeader>
                        </DataTable>
                    </div>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-body">
                    <Cell col="4">
                        <Card shadow={3} style={{ minWidth: '450', margin: 'auto', marginBottom: "20px" }} >
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i.imgur.com/LxqLaAF.png) center / cover' }}></CardTitle>
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
                        <DataTable style={{ justifyContent: 'space-between', width: '50%', margin: 'auto', }}
                            shadow={3}
                            rows={[
                                { tech: 'Express' },
                                { tech: 'Node JS' },
                                { tech: 'React JS' },
                                { tech: 'Material UI' },
                                { tech: 'React-Bootstrap' },
                                { tech: "MYSQL" }
                            ]}
                        >
                            <TableHeader style={{ textAlign: "center" }} name="tech">Technologies</TableHeader>
                        </DataTable>
                    </Cell>
                    <Cell col="4">
                        <Card shadow={3} style={{ minWidth: '450', margin: 'auto', marginBottom: "20px" }} >
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i.imgur.com/mHMn2eB.png) center / cover' }}></CardTitle>
                            <CardText>
                                BurgerApp was a homework assignment with the SMU Bootcamp that was meant to use Express and MYSQL to create and app to keep track of the burgers eaten. It's intention was to be a fun, funny lighthearted assignment
                    </CardText>
                            <CardActions border>
                                <Button colored href='https://github.com/kingdonut23/Sneaker_Head' target="_blank">GitHub</Button>
                                <Button colored href='https://afternoon-ocean-20957.herokuapp.com/' target="_blank">Link</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <iconButton name="share" />
                            </CardMenu>
                        </Card>
                        <DataTable style={{ justifyContent: 'space-between', width: '50%', margin: 'auto' }}
                            shadow={3}
                            rows={[
                                { tech: 'Express' },
                                { tech: 'Node JS' },
                                { tech: 'React-Bootstrap' },
                                { tech: "MYSQL" }
                            ]}
                        >
                            <TableHeader style={{ textAlign: "center" }} name="tech">Technologies</TableHeader>
                        </DataTable>
                    </Cell>
                </div >
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <Cell col="4">
                        <Card shadow={3} style={{ minWidth: '450', margin: 'auto', marginBottom: "20px" }} >
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i.imgur.com/mHMn2eB.png) center / cover' }}></CardTitle>
                            <CardText>
                                BurgerApp was a homework assignment with the SMU Bootcamp that was meant to use Express and MYSQL to create and app to keep track of the burgers eaten. It's intention was to be a fun, funny lighthearted assignment
                    </CardText>
                            <CardActions border>
                                <Button colored href='https://github.com/kingdonut23/Sneaker_Head' target="_blank">GitHub</Button>
                                <Button colored href='https://afternoon-ocean-20957.herokuapp.com/' target="_blank">Link</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <iconButton name="share" />
                            </CardMenu>
                        </Card>
                        <DataTable style={{ justifyContent: 'space-between', width: '50%', margin: 'auto' }}
                            shadow={3}
                            rows={[
                                { tech: 'Express' },
                                { tech: 'Node JS' },
                                { tech: 'React-Bootstrap' },
                                { tech: "MYSQL" }
                            ]}
                        >
                            <TableHeader style={{ textAlign: "center" }} name="tech">Technologies</TableHeader>
                        </DataTable>
                    </Cell>
                </div>
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