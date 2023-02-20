import {Component} from "react";

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render (){

        return(
            <input onChange = {this.onUpdateSearch} value = {this.state.term} type="text" className="buy__wrapper-input" placeholder="start typing here..."/>
        )
            
    }

}

export default SearchPanel;