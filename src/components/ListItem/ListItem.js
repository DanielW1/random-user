import React, {Component} from 'react'
import classnames from 'classnames';
import "./ListItem.css"


export default class ListItem extends Component{

    render(){
        const {picture:{large:largePicture}, name:{first:firstName, last:lastName}, email } = this.props.data;
        return <div className={classnames('ListItem')}>
            <img src={largePicture} alt="Obrazek"></img>
            <div>Imię: {firstName}</div>
            <div>Nazwisko: {lastName}</div>
            <div>E-mail: {email}</div>
        </div>

    }
}