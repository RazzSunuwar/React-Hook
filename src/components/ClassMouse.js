import React, { Component } from 'react';

class ClassMouse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            x: 0,
            y: 0
        }
    }

    logoMousePosition = e => {
        this.setState({ x: e.clientX, y: e.clientY })
    }
    
    componentWillMount(){
        window.addEventListener('mousemove', this.logoMousePosition)
    }

    componentWillUnmount(){
        window.removeEventListener('mousemove', this.logoMousePosition)
    }
    render() {
        return (
            <div>
                X - {this.state.x} Y - {this.state.y}
            </div>
        );
    };
};

export default ClassMouse;
