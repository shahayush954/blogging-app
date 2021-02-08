import React, { Component } from 'react';
import PersonalHeader from "./PersonalHeader";


class HomePage extends Component {
    render() {
        return (
            <div className="home-container">
                <PersonalHeader />
            </div>
        );
    }
}

export default HomePage;