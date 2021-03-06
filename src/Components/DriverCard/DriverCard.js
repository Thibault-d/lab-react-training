import React, {Component} from 'react'
import Rating from '../Rating/Rating.js'
import '../IdCard/IdCard.css'

class DriverCard extends Component {
    render(){
        return (
            <div className="card">
                <img src={this.props.img} alt={this.props.name}/>
                <div>
                    <span>{this.props.name}</span>
                    <Rating children = {this.props.rating} />
                    <span>{this.props.car.model} - {this.props.car.licensePlate}</span>
                </div>
            </div>
        )
    }
}

export default DriverCard;