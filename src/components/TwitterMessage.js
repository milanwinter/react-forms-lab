import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      message: "",
      remaining: props.maxChars
    };
  }

  handleMessage = (event) => {
    console.log(event.target.value)
    let remainingChars = this.props.maxChars - event.target.value.length
    this.setState({
      message: event.target.value,
      remaining: remainingChars
    })

  }
  
  render() {
    return (
      <div>
        <strong>Remaining Characters: {this.state.remaining}</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMessage(event)} value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;
