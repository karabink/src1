import React, { Component } from 'react';
class ChildrenDob extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div>
                    <label>
                        <input type="number"></input>
                    </label>
                    <label>
                        <input type="number"></input>
                    </label>
                    <label>
                        <input type="number"></input>
                    </label>
                    <button></button>
                </div>
            </>
        );
    }
}

export default ChildrenDob;