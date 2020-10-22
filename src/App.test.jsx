import React from 'react';
import {
    render,
    screen,
    fireEvent
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fetchMock from 'fetch-mock';
import App from './App';
import {
    cityMock,
    weatherMock
} from './mocks/citymock';


describe('App component', () => {
    test('should render button', () => {
        const {
            getByText
        } = render( <App /> );
        const button = getByText(/pokaż prognozę/i);
        expect(button).toBeInTheDocument();
    })
    test('should render input', () => {
        render( <App /> )
        expect(screen.getByLabelText(/miasto/i)).toBeInTheDocument();
    })
    test('should get weather', async () => {
        const city = 'Kraków'
        fetchMock.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityMock.coord.lat}&lon=${cityMock.coord.lon}&exclude=current,minutely,hourly&appid=${process.env.REACT_APP_OPEN_WEATHER_ID}&units=metric`, weatherMock)
        fetchMock.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPEN_WEATHER_ID}&units=metric`, cityMock);
        render( <App /> )
        const input = screen.getByLabelText(/miasto/i);
        userEvent.type(input, city);
        // screen.debug();
        const button = screen.getByText(/pokaż prognozę/i);
        fireEvent.click(button);
        const weather = await screen.findAllByText(/temperatura/i);
        expect(weather.length).toBe(8);
    })
})