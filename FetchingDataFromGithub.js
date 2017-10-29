const Card = (props) => {
	return (
  	<div style={{margin:'1em'}}>
    	<img width='75' src={props.avatar_url}></img>
      <div style={{display:'inline-block', marginLeft:'5'}}>
      	<div style={{fontWeight:'bold'}}>{props.login}</div>
        <div>{props.url}</div>
      </div>
    </div>);
}

const CardList = (props) => {
	return (
  	<div>
    	{props.cards.map((card) => <Card {...card} />)}
    </div>
  )
}

class Form extends React.Component {
	state = { userName : ""}

	handleSubmit = (event) => {  
  	event.preventDefault();
    
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    	.then(
      	(res) => {
        	this.props.onSubmit(res.data);
          }
      );
    
    this.setState( { userName : ''} );
  };

	render() {
  	return (
    	<div>
    	  <form onSubmit={this.handleSubmit}>
        	<input type="text" value={this.state.userName} onChange={(event) => this.setState({userName: event.target.value})}/>
          <button type="submit">Add Card</button>
        </form>
    	</div>
    )  
  }
}

class App extends React.Component {
  state = { cards : [
	]}
  
  addNewCard = (cardInfo) => {
  	this.setState((previousState) =>  {
    		return { 
        	cards : previousState.cards.concat(cardInfo)
          }
    })
  }
  
	render() {
  	return (
    	<div>
      	<Form onSubmit={this.addNewCard}/>
        <CardList cards={this.state.cards}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, mountNode);
