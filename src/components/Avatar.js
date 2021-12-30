import React, { Component } from 'react'

export default class Avatar extends Component {
    render() {
        return (
            <>
                <span className='avatar' style={{ marginRight: '10px' }}>{this.props.firstName}</span><span>{this.props.lastName}</span>

            </>
        )
    }
}


