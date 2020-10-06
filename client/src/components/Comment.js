import React,{Component} from 'react';


class Comment extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const{id, body}=this.props;
        return(
            <div>
                {id}
                {body}
            </div>
        );
    }
}

export default Comment;