class Square extends React.Compornent {
    constractor(props)
      super(props);
      this.state = {
    };
}

class Square extends React.Compornent {

    render() {
        return(
            <button className="square" 
            onClick={() => this.ListeningStateChangedEvent({value: 'X'})}
            >
                {this.state.value}
            </button>
        );
    }
}

class Board extends React.Compornent{
    constructor (props) {
        super(props);
        this.state = {
            squares:Array(9).fill(null),
        };
    }
    renderSquare(i) {
        return <Square value={i} />;
    }

    render() {
        const status = 'Next player : X';
    
        return(
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="borad-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    
                </div>
                <div className="borad-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Compornent{
    render(){

        return(
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                 <div>{/*status*/}</div>
                 <ol>{/* todo */}</ol>
                </div>   
            </div>
        );
    }
}

//==================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
# sample
