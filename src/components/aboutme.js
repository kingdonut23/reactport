import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class About extends Component {
    render() {
        return (
            <div className='contact-body'>
                <Grid className="contact-grid">
                    <Cell col={6} tablet={8} phone={4}>

                        <h2>About Me!</h2>
                        <p style={{ width: "75%", margin: 'auto', paddingTop: '1em', marginBottom: "10px" }}>Hello, I'm Jeffery Davis. You might be thinking, hey? Did you play basketball? Cause you'd be wrong, I'm a tiny man.
                        I've spent the past few years on a soul searching adventure. I was a stand up comic, a IT Specalist, a Help Desk Representative, I even flipped burgers. I'm now moving into the Development space.
                        What brought me to the field was a growing interest in developing my skill set and a love of more money.
                            </p>
                        <p style={{ width: "75%", margin: 'auto', paddingTop: '1em' }}>
                            It all started with the IT Specalist position, where I ended up learning some SQL. Small queries and running stored procedures grew into LARGE QUERIES and WRITING STORED PROCEDURES!!!
                            I fell in love, and that led me to the SMU Bootcamp. Where after a long and EXAHUSTING experience I came out the other side; excited and ready for the future.
                        </p>
                    </Cell>
                </Grid>
            </div >
        )
    }
};

export default About;