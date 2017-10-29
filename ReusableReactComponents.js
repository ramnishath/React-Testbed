// snippet can be tested in jsComplete 


class Button extends React.Component {
    
  clickHandler = () => {
      this.props.callBackUpdateCount(this.props.incrememtValue);
  };

  
    render() {
      return (
        <button onClick={this.clickHandler}>+{this.props.incrememtValue}</button>
    )
  }
}

const Result = (props) => {
    return (<div>{props.counter}</div>);
}

class App extends React.Component {
    state = { counter : 0 };

    clickHandler = (incrementValue) => {
      this.setState((previousState) => {
        return {
          counter : previousState.counter + incrementValue
        }
    });
  }

    render() {
    return (
        <div>
        	<Button incrememtValue={1} callBackUpdateCount={this.clickHandler}/>
        	<Button incrememtValue={10} callBackUpdateCount={this.clickHandler}/>
        	<Button incrememtValue={100} callBackUpdateCount={this.clickHandler}/>
        	<Result counter={this.state.counter}/>
      </div>
    )
    }
        
}

ReactDOM.render(<App />, mountNode);
