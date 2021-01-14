import React, { Component } from 'react'

export class Profil extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.prenom}</h1>
                <h2>{this.props.nom}</h2>
                <p>{this.props.children ? this.props.children : `pas de description` }</p>
            </div>
        )
    }
}

export default Profil
