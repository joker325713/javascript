class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        number: props.counter,
      }
    }
    
    nextNumber = () => {
      console.log('+++')
      this.setState({
        number: this.state.number + 1
      })
    }
    
    prevNumber = () => {
      console.log('---')
      this.setState({
        number: this.state.number - 1
      })
    }
    
    randNumber = () => {
      this.setState({
        number: +(Math.random() * (50 - -50) +-50).toFixed(0)
      })
    }
    
    nullNumber = () => {
      console.log('null')
      this.setState({
        number: this.state.number = 0 
      })
    };
    
    
    render() {
      const {counter} = this.props
      return (
        <div class="app">
          <div class="counter">{this.state.number}</div>
          <div class="controls">
            <button onClick={this.nextNumber}>INC</button>
            <button onClick={this.prevNumber}>DEC</button>
            <button onClick={this.randNumber}>RND</button>
            <button onClick={this.nullNumber}>RESET</button>
          </div>
        </div>
      )
    }
  }
  
  ReactDOM.render(<App counter={10}/>, document.getElementById('app'));
  
  // 1) Начальное значение счетчика должно передаваться через props
  // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
  // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
  // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов