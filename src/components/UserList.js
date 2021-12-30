import React, { Component } from 'react'
import UserInfo from './UserInfo';


/* export default function UserList(props) {

    function showUser(checked) {
        return props.List.map(user => {
            if (checked && user.active) {
                return <li><UserInfo info={user} /></li>
            }
        })
    }

    return (
        <>
            {showUser(props.checked)}
        </>
    )
}
 */


export default class UserList extends Component {

    showUser() {
        return (this.props.List.map(user => {
            if (this.props.checked && user.active) {
                return <li><UserInfo info={user} /></li>
            } else if (!this.props.checked) {
                return <li><UserInfo info={user} /></li>
            }

        }))
    }


    render() {

        return (
            <>
                {this.showUser()}
            </>
        )
    }
}

//{this.props.userList.map(user => <li><UserInfo info={user} /></li>)}