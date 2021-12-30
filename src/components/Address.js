import React, { Component } from 'react'

export default class Address extends Component {
    render() {
        return (
            <>
                {Object.values(this.props.address).map(el => {
                    return <p>{el}</p>
                })}
            </>
        )
    }
}

