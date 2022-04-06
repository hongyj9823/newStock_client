import React, { Component } from 'react';
import BubbleChart from '@weknow/react-bubble-chart-d3';
import '../App.css'

class News extends Component {
    render() {
        return (
            <div>
                <BubbleChart
                    width = {800}
                    height = {800}
                    data = {[
                        { label : 'test1', value : 1},
                        { label : 'test3', value : 3},
                        { label : 'test5', value : 5},
                        { label : 'test9', value : 9},
                        { label : 'test21', value : 21},
                    ]}
                />
            </div>
        );
    }
}

export default News;