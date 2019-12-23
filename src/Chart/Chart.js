import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import { withSize } from 'react-sizeme';

import './Chart.css';

class Chart extends Component {
    getOption(){
        return {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: this.props.chartType
            }]
        }
    }
    render() {
        return (
            <div className="chart">
                <ReactEcharts
                    option={this.getOption()}
                    style={{height: `${this.props.size.height}px`, width: `${this.props.size.width}px`}}
                />
            </div>
        );
    }
}

export default withSize({monitorHeight: true})(Chart);
