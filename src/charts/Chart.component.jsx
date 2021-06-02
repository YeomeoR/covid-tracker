import React, {Component} from 'react';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['', ''],
                datasets: [
                    {
                        label: '',
                        data: []
                    }
                ]
            }
         }
    }
    render() { 
        return (
            <div>
                Chart Component
            </div>
         );
    }
}
 
export default Chart;