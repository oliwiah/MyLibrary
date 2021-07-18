import React from 'react';
import { Link } from 'react-router-dom';

export const PageNotFound = () => (
    <div className="screen404">
        <p className="heading">OOPS!</p>
        <p className="paragraph">We can't find the page you're looking for!</p>
        <button className="homePageButton" variant="outline-primary">
            <Link className="homepageLink" to="/">
                Visit homepage
            </Link>
        </button>
    </div>
);
