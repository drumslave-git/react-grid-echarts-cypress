import React from 'react';
import GridLayout from 'react-grid-layout';
import { withSize } from 'react-sizeme';

import Chart from '../Chart';

import './Grid.css';

const GAP = 0;

class Grid extends React.Component {
    state = {chartType: 'bar'};
    switchChartType = (type) => this.setState({chartType: type});
    render() {
        const layout = [
            {i: 'a', x: 0, y: 0, w: 3, h: 2, content: <div>
                    <button onClick={() => this.switchChartType('bar')}>Bar</button>
                    <button onClick={() => this.switchChartType('scatter')}>Scatter</button>
                    <button onClick={() => this.switchChartType('line')}>Line</button>
                </div>},
            {i: 'b', x: 0, y: 0, w: 3, h: 2, content: <Chart chartType={this.state.chartType} />},
        ];
        const {width, height} = this.props.size;
        return (
            <div className="pageContainer">
                <div className="pageScrollContainer">
                    <section className="page">
                        <GridLayout
                            className="layout" cols={6}
                            layout={layout}
                            rowHeight={Math.floor(height / 4)}
                            width={width - 1}
                            margin={[GAP, GAP]}
                            compactType="vertical"
                            containerPadding={[GAP, GAP]}
                        >
                            {layout.map(gi => {
                                return (
                                    <div
                                        className="gridItem"
                                        key={gi.i}
                                    >{gi.content}</div>
                                )
                            })}
                        </GridLayout>
                    </section>
                </div>
            </div>
        )
    }
}

export default withSize({monitorHeight: true})(Grid);
