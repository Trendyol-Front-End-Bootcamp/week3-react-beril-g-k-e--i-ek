import React from 'react';
import { render , fireEvent} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BackHomeButton from '../../../components/BackHomeButton';

describe("BackHomeButton Test", () => {
    it("should return homepage when click the back homepage button", () => {
        const { getByText } = render(
            <Router>
                <BackHomeButton/>
            </Router>
        )
        const backToHome = getByText("Return to main page");
        fireEvent.click(backToHome)
        expect(window.location.pathname).toBe("/")
    })
})
