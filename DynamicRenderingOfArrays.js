const Star = (props) => {
  return (
        <div className="col-5">
        	{_.range(props.numberOfStars).map(i => 
          		<i key={i} className="fa fa-star"></i>
            )}
        </div>
        );
}

const Button = (props) => {
  return (
        <div className="col-2">
          <button className="btn" disabled={props.selectedNumbers.length === 0}>
          =
          </button>
        </div>
        );
}

const Answer = (props) => {
  return (
        <div  className="col-5">
          {props.selectedNumbers.map((number, i) =>
          	<span key={i} onClick={() => props.unselectNumber(number)}>{number}</span>
          )}
        </div>
        );
}

const Numbers = (props) => {
	const numberClassName = (number) => {
  	if (props.selectedNumbers.indexOf(number) >=0) {
    	return 'selected';
    }
  }
	
  return (
        <div className="card text-center">
          <div>
            { 
            Numbers.list.map((number, i) =>
            	<span key={i} className={numberClassName(number)}
              	onClick={() => props.selectNumber(number)}>
              	{number}
              </span>
            )
            }
          </div>
        </div>
        );
}

Numbers.list = _.range(1,10);

class Game extends React.Component {
  state = {
  	selectedNumbers : [],
    randomNumberOfStars : 1 + Math.floor(Math.random() *9),
  };
  
  selectNumber = (selectedNumber) => {
  	if (this.state.selectedNumbers.indexOf(selectedNumber) >=0) { return;}
  
  	this.setState((previousState) => {
    	return {
      	selectedNumbers : previousState.selectedNumbers.concat(selectedNumber)
      }
      });
  };
  
  unselectNumber = (selectedNumber) => {
  	this.setState((previousState) => {
    	return {
      	selectedNumbers : previousState.selectedNumbers.filter(number => number != selectedNumber)
      }
      });
  };


  render() {
    return (
        <div className="container">
          <h1>Play again!</h1>
          <hr />
          <div className="row">
          	<Star numberOfStars={this.state.randomNumberOfStars}/>
          	<Button selectedNumbers={this.state.selectedNumbers}/>
          	<Answer unselectNumber={this.unselectNumber} selectedNumbers={this.state.selectedNumbers}/>
          </div> 
          <br />
          <Numbers selectNumber={this.selectNumber} selectedNumbers={this.state.selectedNumbers}/>
        </div>
        );
  }
}

class App extends React.Component {
  render() {
    return (
        <div>
          <Game />
        </div>
        );
  }
}

ReactDOM.render(<App />, mountNode);
