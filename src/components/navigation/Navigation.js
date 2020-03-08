
import React, { Component } from 'react';
class Navigation extends Component {
    render() {
        return (
            <nav>
                <div class="nav-wrapper">
                    <a href="#logo" class="brand-logo"><img src="./logo.png" alt="logo"/></a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><button type="button">Sass</button></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation;