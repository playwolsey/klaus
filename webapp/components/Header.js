import React, { Component } from 'react'

class Header extends Component {
    constructor() {
        super()

        this.state = {
            isToggleOn: true
        }

        this.toggleBar = () => {
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }))
        }
    }

    render() {
        return (
            <header id='header' className='m-header'>
                <a className={`m-toggle ${this.state.isToggleOn ? 'on' : 'off'}`} href='javascript:void(0)' onClick={this.toggleBar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </header>
        )
    }
}

export default Header
