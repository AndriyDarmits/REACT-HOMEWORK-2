import React, { Component } from 'react'
import Avatar from './Avatar'
import Address from './Address'

export default class UserInfo extends Component {
    render() {
        return (
            <>
                <Avatar firstName={this.props.info.firstName} lastName={this.props.info.lastName} />
                <Address address={this.props.info.address} />
            </>

        )
    }
}