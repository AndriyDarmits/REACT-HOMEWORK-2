import React, { Component } from 'react'
import UserList from "./UserList"

export default class CheckBox extends Component {


    constructor(props) {
        super(props);
        this.checkActiveStatus = this.checkActiveStatus.bind(this)
        this.showOrHide = this.showOrHide.bind(this)
        this.state = {
            active: false,
            labelText: "All users",
            hideorshow: {
                listStyle: '',
                dotsState: 'Hide dots'

            }

        }

    }

    checkActiveStatus(event) {
        if (event.target.checked) {
            this.setState({
                active: true,
                labelText: 'Only active users'
            })
            console.log("Active")
        } else {
            this.setState({
                active: false,
                labelText: 'All users'
            }); console.log("Inactive")
        }
    }

    showOrHide() {
        if (this.state.listStyle === "") {
            this.setState(
                {
                    listStyle: "none",
                    hideorshow: {
                        dotsState: "Show dots"
                    }

                }
            )
        } else {
            this.setState(
                {
                    listStyle: "",
                    hideorshow: {
                        dotsState: "Hide dots"
                    }
                }
            )
        }
    }


    render() {
        return (
            <div>
                <div className="checkbox">
                    <button className="dotsToggle" onClick={this.showOrHide} >{this.state.hideorshow.dotsState}</button>
                    <div className="input" >
                        <label htmlFor="check3">{this.state.labelText}</label>
                        <input type="checkbox" id="check3" onChange={this.checkActiveStatus} />
                    </div>

                </div>
                <ul className="list" style={{ listStyle: this.state.listStyle }} ><UserList checked={this.state.active} List={this.props.userList} /></ul>

            </div>
        )
    }
}



