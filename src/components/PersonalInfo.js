import React from 'react';

class PersonalInfo extends React.Component {
    render() {
        return (
            <div className="PersonalInfo">
                <p>Dane:</p>
                <form>
                    <label for="firstname">Imię: </label>
                    <input id="firstname" type="text" placeholder="Wpisz imię..."/>
                    <label for="lastname">Nazwisko: </label>
                    <input id="lastname" type="text" placeholder="Wpisz nazwisko..."/>
                    <label for="email">Adres e-mail: </label>
                    <input id="email" type="text" placeholder="Wpisz e-mail..."/>
                </form>
            </div>
        );
    }
};

// const firstname = document.getElementById('firstname').value;
// const lastname = document.getElementById('lastname').value;
// const email = document.getElementById('email').value;

export default PersonalInfo;