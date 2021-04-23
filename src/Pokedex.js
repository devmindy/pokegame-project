import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
	render() {
		let comment;
		const props = this.props;
		if (props.isWinner) {
			comment = <h1 className="Pokedex-winner">Winning Set</h1>;
		} else {
			comment = <h1 className="Pokedex-loser">Losing Set</h1>;
		}
		return (
			<div className="Pokedex">
				{ comment }
				<h4>Total Experience: { props.experience }</h4>
				<div className="Pokedex-cards">
					{ props.pokemon.map((p) => (
						<Pokecard id={ p.id } name={ p.name } type={ p.type } experience={ p.base_experience } />
					)) }
				</div>
			</div>
		);
	}
}

export default Pokedex;
