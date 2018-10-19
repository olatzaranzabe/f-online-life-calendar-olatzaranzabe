import React, { Component } from 'react';

class Faces extends Component {

    render() { 
        const {
            facesArray
        } = this.props;
        console.log(facesArray)
        return ( 
            <div>
                <ul>
                {facesArray.map((face) => {
                    if (face === ':)'){
                        return (
                            <li>:)</li>
                        )} else {
                            return (
                                <li>:(</li>
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