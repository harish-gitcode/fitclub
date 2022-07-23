import React from 'react';
import './program.css';
import { programsData } from '../data/programsData'
import rightArrow from '../assets/rightArrow.png';
const Program = () => {
    return (
        <div className="Programs" id="programs" style={{ padding: '1.5rem' }}>
            {/* headers */}
            <div className="program-header">
                <span className="stroke-text">Explore our</span>
                <span>Programs</span>
                <span className="stroke-text">to Shape You</span>
            </div>

            <div className="program-categories">
                {programsData.map(program =>
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={rightArrow} alt=""></img>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default Program