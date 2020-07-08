import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            result: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    getCity = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${process.env.REACT_APP_OPEN_WEATHER_ID}`)  //usunąć ID
        .then(res => res.json())
        .then(data => this.setState({ result: data.name }));                
    };
    
    handleSubmit(event) {
        event.preventDefault();
        this.getCity();
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Miasto:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <p>Wybrane miasto: {this.state.result}</p>
            </div>
        );
    }
}

export default Form;