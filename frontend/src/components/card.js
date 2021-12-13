import React, {Component} from 'react';
import {connect} from "react-redux";
import {navigate} from "../redux/actions";

class Card extends Component {

    componentDidMount() {
        document.title = this.props.name
    }

    navigate(event) {
        if (event.target.tagName === 'A'
            && event.target.hostname === window.location.hostname) {
            event.preventDefault();
            this.props.dispatch(navigate(event.target));
        }
    }

    render() {
        const {name, html} = this.props;
        return (
            <div>
                <head>
                    <title>{"Hi"}</title>
                </head>
                <h1>{"It is deployed web application"}</h1>
                <body>
                <p>{"There are a lot different tools and ways to deploy an application. This application was deployed with the use of docker. containers"}</p>
                <img src="https://miro.medium.com/max/1400/1*JK4VDnsrF6YnAb2nyhMsdQ.png"></img>
                <p> <a href="https://thenewstack.io/how-to-deploy-a-container-with-docker/">Here</a> you can read more about deploying application with docker containers. </p>
                <p> <a href="https://github.com/Kamila-Khamidullina/Project">Here</a> is the git repo with the source code. </p>
                </body>
                <div
                    dangerouslySetInnerHTML={{__html: html}}
                    onClick={event => this.navigate(event)}
                />
            </div>
        );
    }

}

export default connect()(Card);
