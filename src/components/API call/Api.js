import React from 'react';
import axios from 'axios';
import ProductCard from "../card/card";


export default class Api extends React.Component {

    state = {
        hookups: []
    }

    componentDidMount() {
        console.log('Testing Axios: componentDidMount')
        axios.get(`http://192.168.4.105:3671/hookups`)
            .then(res => {
                const hookups = res.data;
                this.setState({ hookups });
            })

    }

    render() {
        console.log('Testing Axios: Return')
        return (
            <ul>
                {
                    this.state.hookups
                        .map(hookup =>
                            // <li key={hookup.title}>{hookup.rank}</li>
                            <ProductCard title ={hookup.title} body ={hookup.body}/>
                        )
                }
            </ul>
        )
    }
}
