import React from 'react';
import PersonalInfo from './PersonalInfo';

class ReservationButton extends React.Component {
    render() {
        return (
            <div>
                <button id="reserved" type="submit">Potwierdzam rezerwację</button>
            </div>
        );
    }
};

export default ReservationButton;