import React from 'react';
import BarChart from 'react-bar-chart';
import Header from './Header';
import '../App.css';
import './css/Bar.css'
var createReactClass = require('create-react-class');

var data = [
  {text: 'Man', value: 500}, 
  {text: 'Woman', value: 300} 
];

var margin = {top: 20, right: 20, bottom: 30, left: 40};
var Bar = createReactClass({
	getInitialState: function() {
	  return {
	    width: 500 
	  };
	},

	componentDidMount: function () {
	  var _this = this;
	  window.onresize = function(){
	    _this.setState({width: this.refs.root.offsetWidth}); 
	  };
	},

	handleBarClick(element, id){ 
	  console.log('The bin ' + element.text + ' with id ' + id + ' was clicked');
	},
  render() {
    return (
       <div>
       <Header/>
       <div ref='root'>
        <div style={{width: '50%'}}> 
          <BarChart ylabel='Quantity' width={this.state.width} height={500} margin={margin} data={data} onBarClick={this.handleBarClick}/>
        </div>
      </div>
      </div>
    );
  }
});

export default Bar;
