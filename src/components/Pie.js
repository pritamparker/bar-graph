import React, { Component } from 'react';
import PieChart from "react-svg-piechart"	
import Header from './Header';
import '../App.css';
import './css/Pie.css';
class Pie extends Component {
    constructor() {
        super()

        this.state = {
            expandedSector: null,
        }

        this.handleMouseEnterOnSector = this.handleMouseEnterOnSector.bind(this)
    }

    handleMouseEnterOnSector(sector) {
        this.setState({expandedSector: sector})
    }

    render() {
        const data = [
            {label: "Facebook", value: 100, color: "#3b5998"},
            {label: "Twitter", value: 60, color: "#00aced"},
            {label: "Google Plus", value: 30, color: "#dd4b39"},
            {label: "Pinterest", value: 20, color: "#cb2027"},
            {label: "Linked In", value: 10, color: "#007bb6"},
        ]

        const {expandedSector} = this.state

        return (
            <div>
            	<Header/>
            	<div className="pieSize">
                <PieChart
                    data={ data }
                    expandedSector={expandedSector}
                    onSectorHover={this.handleMouseEnterOnSector}
                    sectorStrokeWidth={2}
                    expandOnHover
                    shrinkOnTouchEnd
                />
                </div>
                <div>
                {
                    data.map((element, i) => (
                        <div key={i}>
                            <span style={{background: element.color}}></span>
                            <span style={{fontWeight: this.state.expandedSector === i ? "bold" : null}}>
                                {element.label} : {element.value}
                            </span>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}
export default Pie;