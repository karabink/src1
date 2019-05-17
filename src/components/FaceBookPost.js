import React, { PureComponent } from 'react';
class FaceBookPost extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    clickOk=()=>{
        this.refs.lastS.innerText="OK"
    }
    clickNo=()=>{
        this.refs.lastS.innerText="NO"
    }
    render() { 
        return ( 
            <div>
                <label  >
                    {this.props.userName}
                </label><br/>
                <textarea>
                    {this.props.text}
                </textarea><br/>
                <button onClick={this.clickOk}>
                    Ok  
                </button>
                <button onClick = {this.clickNo}>
                    No
                </button>
                Last status :

                <label ref="lastS">
                    
                </label>
            </div>
         );
    }
}
 
export default FaceBookPost;