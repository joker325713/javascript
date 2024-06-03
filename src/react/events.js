class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            position: ''
        }
        this.nextYear = this.nextYear.bind(this);
    }
}

nextYear() {
    this.setState(state => ({
        years: state.years + 1
    }))
}

commitInputChanges = (e, color) => {
    this.setState({
        position: e.targer.valur
    })
}

render() {
    const {position, years} = this.state;
    return (
        <div>
            <h1>My name is{name}, age {years}, position{position}</h1>
            <form>
            <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
        </form>
        </div>
    )
}