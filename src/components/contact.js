import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import selfie from '/images/selfie.jpg';

class Contact extends Component {
    render() {
        return (
            <div className='contact-body'>
                <Grid className="contact-grid">
                    <Cell col={6} tablet={8} phone={4}>

                        <h2>Jeffery Davis</h2>
                        <img
                            src={selfie}
                            style={{ height: '250px', borderRadius: "50%" }}
                        />
                        <p style={{ width: "75%", margin: 'auto', paddingTop: '1em', marginBottom: "10px" }}>I'm a strong worker, looking for opportunites to collaborate and better not only myself but those I work with.
                        Solving problems and getting the job done are what I expect of myself and those I work with.
                        </p>
                        <p style={{ width: "75%", margin: 'auto', paddingTop: '1em' }}>
                            I'm looking, not to work temporarily, but to better your company and those within it.
                        </p>
                    </Cell>
                    <Cell col={6} tablet={8} phone={4}>
                        <h2>Contact Me!</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: "30px", font: "Arvo" }}>
                                        <i className="fa fa-phone" />
                                        (972) 741-5409
                                        </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: "30px", font: "Arvo" }}>
                                        <i className="fa fa-envelope" />
                                        jef.davis@live.com
                                        </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
};

export default Contact;