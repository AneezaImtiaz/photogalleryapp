import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store'; //Import the store
import MainComponent from './MainComponent' //Import the main file

export default class HomeComponent extends Component {

    render() {

        return (

            <Provider store={store}>
                <MainComponent />
            </Provider>
            
        );
    }
}