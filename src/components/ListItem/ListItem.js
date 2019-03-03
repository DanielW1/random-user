import React, {Component} from 'react'
import classnames from 'classnames';
import "./ListItem.css"


export default class ListItem extends Component{

    render(){
        const {picture:{large:largePicture}, name:{first, last}, email } = this.props.data;
        return <div className={classnames('ListItem')}>
            <img src={largePicture} alt="Obrazek"></img>
            <div>Imię: {first}</div>
            <div>Nazwisko: {last}</div>
            <div>E-mail: {email}</div>
        </div>

    }
}