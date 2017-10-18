import React from 'react';
import { format } from 'd3-format';
import '../styles/Text.css';

export default class Text extends React.Component {
	render() {
		let white = this.props.data.get('white');
		let black = this.props.data.get('black');
		let hispanic = this.props.data.get('hispanic');

		return (
			<div className="Text">
				<h1>Changing neighborhood segregation in Greater New Haven</h1>
				<div>While Greater New Haven remains highly segregated, with a diverse city, somewhat mixed inner ring suburbs, and largely white, affluent outer ring suburbs, the region has actually become less segregated over the past few decades.</div>
				<h2>In {this.props.year},</h2>
				<ul>
					<li>
						{ format('.0%')(white[0].share) } of white residents...
					</li>
					<li>
						{ format('.0%')(black[0].share) } of black residents...
					</li>
					<li>
						{ format('.0%')(hispanic[0].share) } of Latino residents...
					</li>
				</ul>
				<h3>lived in a census tract where more than 75% of the population was the same race as them.</h3>
			</div>
		);
	}
}
