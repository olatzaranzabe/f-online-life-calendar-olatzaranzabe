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
                {facesArray.map((face) => {
                    if (face === ':)'){
                        return (
                            <li className="face__element happy">:)</li>
                        )} else {
                            return (
                                <li className="face__element sad" sad>:(</li>
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