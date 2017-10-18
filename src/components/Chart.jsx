import React from 'react';
import { ORFrame } from 'semiotic';
import { format } from 'd3-format';

import Legend from './Legend';

import '../styles/Chart.css';

const margin = { top: 20, right: 80, bottom: 20, left: 80 };

export default class Chart extends React.Component {
	render() {

		const axis = {
			ticks: 4,
			tickFormat: d => format('.0%')(d)
		};

		const sqrtFn = (x) => Math.floor(this.props.rScale(x.total));

		return (
			<div className="Chart">
				<h2>Size of largest racial group per census tract</h2>
				<h5>Greater New Haven, 1980–2010</h5>
				<ORFrame
					size={[ 800, 400 ]}
					data={this.props.data}
					projection={'vertical'}
					type={{ type: 'swarm', r: sqrtFn, strength: 1 }}
					oLabel={true}
					oAccessor={'brk'}
					rAccessor={'share'}
					margin={margin}
					style={ d => ({
						fill: this.props.color(d.race),
						fillOpacity: 0.8,
						strokeOpacity: 1.0
					}) }
					axis={axis}
					rExtent={[ 0.3, 1.05 ]}
					hoverAnnotation={true}
					pieceHoverAnnotation={true}
				/>
				<Legend color={this.props.color} size = {this.props.rScale} />
			</div>
		);
	}
}
