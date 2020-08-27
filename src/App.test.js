import React from 'react';
import {
    render,
    screen,
    fireEvent
} from '@testing-library/react';
import App from './App';
import {
    cityMock,
    weatherMock
} from './mocks/citymock.js';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App component', () => {
    test('should render button', () => {
        const {
            getByText
        } = render( < App / > );
        const button = getByText(/pokaż prognozę/i);
        expect(button).toBeInTheDocument();
    })
    test('should render input', () => {
        render( < App / > )
        expect(screen.getByLabelText(/miasto/i)).toBeInTheDocument();
    })
    test('should get weather', async () => {
        render( < App / > )
        const input = screen.getByLabelText(/miasto/i);
        fireEvent.change(input, {
            target: {
                city: {
                    value: 'Kraków'
                }
            }
        });
        const button = screen.getByText(/pokaż prognozę/i);
        fireEvent.click(button);
        const weather = await screen.findAllByText(/temperatura/i);
        expect(weather.length).toBe(8);
    })
})

// fetchMock.mock(`https://api.openweathermap.org/data/2.5/onecall?lat=${json.coord.lat}&lon=${json.coord.lon}&exclude=current,minutely,hourly&appid=${process.env.REACT_APP_OPEN_WEATHER_ID}&units=metric`)
// fetchMock.mock(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${process.env.REACT_APP_OPEN_WEATHER_ID}&units=metric`, 200);