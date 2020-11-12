import React, {Component} from 'react';
import { connect } from 'react-redux';
import { updateItem } from './listactions';
import PropTypes from "prop-types";

class EditItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            body: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
    };

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e){
        e.preventDefault();

        const post = {
            name: this.state.body
        };

        this.props.updateItem(this.state.id,post);
        this.setState({
            id:"",
            body:""
        });
    }

    render(){
        return(
            <div>
                <h1>Edit a message</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Message ID</label>
                    <br/>
                    <input type="text" name="id" onChange={this.onChange} value={this.state.id} />
                    <br/>
                    <label>New Message</label>
                    <br/>
                    <input type="text" name="body" onChange={this.onChange} value={this.state.body} />
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


EditItem.propTypes = {
    updateItem: PropTypes.func.isRequired
 };

export default connect(null, {updateItem})(EditItem);