import React from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import '../styles/Control.css';

export default class Control extends React.Component {
	render() {
		return (
			<div className="Control">
				<ButtonToolbar>
					<ToggleButtonGroup type="radio" name="year" defaultValue={1980} onChange={this.props.onChange}>
						<ToggleButton value={1980} bsStyle={'default'}>1980</ToggleButton>
						<ToggleButton value={1990} bsStyle={'default'}>1990</ToggleButton>
						<ToggleButton value={2000} bsStyle={'default'}>2000</ToggleButton>
						<ToggleButton value={2010} bsStyle={'default'}>2010</ToggleButton>
					</ToggleButtonGroup>
				</ButtonToolbar>
			</div>
		)
	}
}
