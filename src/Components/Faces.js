import React, { Component } from 'react';
import '../Stylesheets/Faces.css';

class Faces extends Component {

    render() { 
        const {
            facesArray
        } = this.props;
        console.log(facesArray)
        return ( 
            <div>
                <ul className="faces__list">
                {facesArray.map((face, index) => {
                    if (face === ':)'){
                        return (
                            <li key={index} className="face__element happy">:)</li>
                        )} else {
                            return (
                                <li key={index} className="face__element sad" >:(</li>
                            );
                        }
                    }
                )}
                </ul>
            </div>
         );
    }
}
 
export default Faces;