import React from 'react';
import * as _ from 'underscore';
import { scaleOrdinal, scaleSqrt } from 'd3-scale';
import { Grid, Row, Col } from 'react-bootstrap';
import { extent } from 'd3-array';
import { nest } from 'd3-collection';

import Chart from './components/Chart.jsx';
import Control from './components/Control.jsx';
import Text from './components/Text.jsx';
import './App.css';

const ncdb = require('./data/racial isolation tracts.json');
const totalShares = require('./data/race isolation shares.json');

const brks = _.chain(ncdb)
	.pluck('race')
	.uniq()
	.value();

const color = scaleOrdinal()
	.domain(brks)
	.range([ '#72db5f', '#db5f72', '#5f72db' ]);

const sqrt = scaleSqrt()
	.domain(extent(ncdb, (d) => d.total))
	.rangeRound([3, 10]);


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			year: 1980
		};
	}

	changeYear = (year) => {
		this.setState({
			year: year
		});
	}

	render() {
		let data = _.filter(ncdb, d => d.year === this.state.year);
		console.log(data);
		let share = nest()
			.key((d) => d.race)
			.map(_.filter(totalShares, d => d.year === this.state.year));

	    return (
		    <div className="App">
				<Grid>
					<Row>
						<Col md={4}>
							<Text data={share} year={this.state.year} />
						</Col>
						<Col md={8}>
							<Chart data={data} color={color} rScale={sqrt} />
							<Control onChange={this.changeYear} />
						</Col>
					</Row>

				</Grid>


			</div>
	    );
	}
}

export default App;
