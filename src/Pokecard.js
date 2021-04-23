import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThreeForApi = (number) => (`00${ number }`.slice(-3));

class Pokecard extends Component {
	render() {
		const props = this.props;
		let imgSrc = `${ POKE_API }${padToThreeForApi(props.id)}.png`;
		return (
			<div className="Pokecard">
				<h1 className="Pokecard-title">{ props.name }</h1>
				<div className="Pokecard-image">
					<img src={ imgSrc } alt={ props.name } />
				</div>
				<div className="Pokecard-data">Type: { props.type }</div>
				<div className="Pokecard-data">EXP: { props.experience }</div>
			</div>
		);
	}
}

export default Pokecard;