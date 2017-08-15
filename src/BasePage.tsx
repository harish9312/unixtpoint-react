import {NavBar} from './NavBar';
import * as React from 'react';

interface IBasePageProps {}

export class BasePage extends React.Component < IBasePageProps, {} > {

    render() {
        return (
            <div>
                <NavBar/> 
                {this.props.children}
            </div>
        )
    }
}