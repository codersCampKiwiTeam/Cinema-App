import React from "react";
import "./Hall.css";

class Hall extends React.Component {
    constructor(props) {
        super(props);
        const hrefArray = document.location.href.split("/");
        const [ , , , , title, day, hour, adult, senior, student] = hrefArray;
        const tickets = Number(adult) + Number(senior) + Number(student);
        this.state = { 
            title: decodeURI(title), 
            day: day, 
            hour: hour, 
            adult: adult, 
            senior: senior, 
            student: student,
            tickets: tickets,
            seats: [],
            seatsNumber: 0,
         };
      };

    getReserved = async () => {
    const {title, day, hour} = this.state;
    await fetch(`https://cinema-coderscamp-kiwi.herokuapp.com/movie/${title}/${day}/${hour}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(res => {
            if (res.status === 401) {
                return "Unauthorized request";
            } else if (res.status !== 200) {
                res.text()
                    .then(text => {
                        return alert(text);
                    });
            } else {
                res.json()
                    .then(json => {
                        let arr = json.map(element => element.seats);
                        let reservedSeats = [].concat.apply([], arr);
                        reservedSeats.map(el => document.getElementById(`${el}`).className="seat reservedSeat");
                    });
            }
        })
        .catch(err => alert(err));
    };

    componentDidMount() {
        this.getReserved();  
    };

    componentDidUpdate() {
        if (this.state.tickets === this.state.seatsNumber) {
            console.log("STOP");
        }
    }

    seatOnClick = ev => {
        if (this.state.tickets === this.state.seatsNumber) {
            return
        } if (ev.currentTarget.className === "seat reservedSeat") {
            return
        } if (ev.currentTarget.className === "seat selectedSeat") {
            return
        }
        ev.currentTarget.className = "seat selectedSeat";
        this.setState({
            seats: this.state.seats.concat(ev.currentTarget.id),
            seatsNumber: this.state.seats.length + 1
        });
    }

    sentReservation = async () => {
        if (this.state.tickets !== this.state.seatsNumber) {
            return
        }
        const {title, day, hour, adult, senior, student, tickets, seats} = this.state;
        const postObj = {
            title: title, 
            day: day, 
            hour: hour, 
            adult: adult, 
            senior: senior, 
            student: student,
            tickets: tickets,
            seats: seats
        };

        await fetch('https://cinema-coderscamp-kiwi.herokuapp.com/movie', {
			method: "POST",
			body: JSON.stringify(postObj),
			headers: {
				"Content-Type": "application/json",
			}
		})
		.then(res => {
			if (res.status === 401) {
				return alert("Unauthorized request");
			} else if (res.status !== 200) {
				res.text()
					.then(text => {
						return alert(text);
					});
			} else {
				res.json()
					.then(json => {
                        alert(`Your reservation number is ${json._id}`);
					});
			}
		})
		.catch(err => alert(err));
    }

    renderRow (rowName, rowLenght) {
        const arr = [
            <div className="rowName" key={rowName}>{rowName}</div>
        ];
        for (let i = 1; i <= rowLenght; i++) {
            arr.push(
                <div 
                    id={`${rowName}-${i}`}
                    key={`${rowName}-${i}`}
                    className="seat"
                    onClick={this.seatOnClick}
                >
                    {i}
                </div>
            );
        }
        return arr
    }

    render() {
        return (
            <div className="hall">
            <div className="seats">
              <div className="screen">Screen</div>
              <div className="row">{this.renderRow("I", 8)}</div>
              <div className="row">{this.renderRow("II", 8)}</div>
              <div className="row">{this.renderRow("III", 8)}</div>
              <div className="row">{this.renderRow("IV", 8)}</div>
              <div className="row">{this.renderRow("V", 8)}</div>
              <div className="row">{this.renderRow("VI", 8)}</div>
              <div className="row">{this.renderRow("VII", 8)}</div>
              <div className="row">{this.renderRow("VIII", 8)}</div>
              <div className="row">{this.renderRow("IX", 12)}</div>
              <div className="row">{this.renderRow("X", 12)}</div>
              <div className="row">{this.renderRow("XI", 12)}</div>
              <div className="row">{this.renderRow("XII", 12)}</div>
              <div className="row">{this.renderRow("XIII", 12)}</div>
              <div className="row">{this.renderRow("XIV", 12)}</div>
            </div>
            <button id="btn-reservation" onClick={this.sentReservation}>Reserve</button>
          </div>
        )
    };
};

export default Hall