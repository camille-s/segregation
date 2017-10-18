import React from 'react';
import { select } from 'd3-selection';
import { format } from 'd3-format';
// import { select } from 'd3-selection';
import { legendColor, legendSize } from 'd3-svg-legend';
import '../styles/Legend.css';

export default class Legend extends React.Component {
    componentDidMount() {
        this.colorLegend();
        this.sizeLegend();
    }

    componentDidUpdate() {
        this.colorLegend();
        this.sizeLegend();
    }

    colorLegend() {
        let legend = legendColor()
            .shapeWidth(30)
            .orient('horizontal')
            .labelAlign('start')
            .shapePadding(32)
            .title('Largest racial group')
            .scale(this.props.color);

        select(this.refs.colorSvg)
            .attr('transform', 'translate(30, 0)')
            .select('g')
            .attr('transform', 'translate(20, 10)')
            .call(legend);
    }

    sizeLegend() {
        let legend = legendSize()
            .orient('horizontal')
            .labelAlign('start')
            .shapePadding(40)
            .shape('circle')
            .title('Total tract population')
            .scale(this.props.size)
            .labelFormat(format(',.0f'));

        select(this.refs.sizeSvg)
            .attr('transform', 'translate(80, 0)')
            .select('g')
            .attr('transform', 'translate(20, 10)')
            .call(legend);
    }


    render() {
        return (
            <div className="Legend">
                <svg ref="colorSvg">
                    <g className="legend" />
                </svg>
                <svg ref="sizeSvg">
                    <g className="legend" />
                </svg>
            </div>
        );
    }
}
