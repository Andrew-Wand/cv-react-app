import {Component} from 'react';

class Header extends Component {
    constructor() {
        super();
    }

    render () {
        return (
            <nav>
                <div className='header-container'>
                    <h1>Resume Generator App</h1>
                </div>
            </nav>
        )
    }
}

export default Header