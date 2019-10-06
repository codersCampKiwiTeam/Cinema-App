import React from "react";
import { Link } from "react-router-dom";
import "./Tickets.css";

class Tickets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {day:"", hour:"", adultTickets:0, seniorTickets: 0, studentTickets: 0 };
      }

    onDayClick = ev => {
        this.setState({
            day: `${ev.currentTarget.value}`
          });
    };

    onHourClick = ev => {
        this.setState({
            hour: `${ev.currentTarget.value}`
          });
    };

    onAdultChange = ev => {
        let ticketsNumber = Number(ev.currentTarget.value);
        this.setState({
            adultTickets: ticketsNumber
          });
    };

    onSeniorChange = ev => {
        let ticketsNumber = Number(ev.currentTarget.value);
        this.setState({
            seniorTickets: ticketsNumber
          });
    };

    onStudentChange = ev => {
        let ticketsNumber = Number(ev.currentTarget.value);
        this.setState({
            studentTickets: ticketsNumber
          });
    };

    componentDidUpdate() {
        const {day, hour, adultTickets, seniorTickets, studentTickets} = this.state;
        if (day !== "" && hour !== "" && adultTickets + seniorTickets + studentTickets > 0) {
            document.getElementById("btn-tickets").disabled=false;
        }
    };

    render() {
        const {day, hour, adultTickets, seniorTickets, studentTickets} = this.state;
        let currentdate = new Date();
        let tommorow = `${currentdate.getDate()+1}.${currentdate.getMonth()+1}`;
        let afterTommorow = `${currentdate.getDate()+2}.${currentdate.getMonth()+1}`;
        let afterAfterTommorow = `${currentdate.getDate()+3}.${currentdate.getMonth()+1}`;

        return (
            <div className="form-container">
                <form>
                    <div className="date-container">
                        <div className="date">
                        <div>
                            <input type="radio" id={tommorow} name="day-radio" value={tommorow} onClick={this.onDayClick}/>
                            <label htmlFor={tommorow}>{tommorow}</label>
                        </div>
                        <div>
                            <input type="radio" id={afterTommorow} name="day-radio" value={afterTommorow} onClick={this.onDayClick}/>
                            <label htmlFor={afterTommorow}>{afterTommorow}</label>
                        </div>
                        <div>
                            <input type="radio" id={afterAfterTommorow} name="day-radio" value={afterAfterTommorow} onClick={this.onDayClick}/>
                            <label htmlFor={afterAfterTommorow}>{afterAfterTommorow}</label>
                        </div>
                        </div>
                        <div className="Hour">
                        <div>
                            <input type="radio" id="12:30" name="hour-radio" value="12:30" onClick={this.onHourClick}/>
                            <label htmlFor="12:30">12:30</label>
                        </div>
                        <div>
                            <input type="radio" id="14:00" name="hour-radio" value="14:00" onClick={this.onHourClick}/>
                            <label htmlFor="14:00">14:00</label>
                        </div>
                        <div>
                            <input type="radio" id="16:30" name="hour-radio" value="16:30" onClick={this.onHourClick}/>
                            <label htmlFor="16:30">16:30</label>
                        </div>
                        <div>
                            <input type="radio" id="19:45" name="hour-radio" value="19:45" onClick={this.onHourClick}/>
                            <label htmlFor="19:45">19:45</label>
                        </div>
                        <div>
                            <input type="radio" id="22:00" name="hour-radio" value="22:00" onClick={this.onHourClick}/>
                            <label htmlFor="22:00">22:00</label>
                        </div>
                        </div>
                    </div>
                    <div className="tickets-container">
                        <div>
                            <label htmlFor="adult">Adult</label>
                            <input type="number" id="adult" name="adult" min="0" max="35" onChange={this.onAdultChange}></input>
                        </div>
                        <div>
                            <label htmlFor="senior">Senior</label>
                            <input type="number" id="senior" name="senior" min="0" max="35" onChange={this.onSeniorChange}></input>
                        </div>
                        <div>
                            <label htmlFor="student">Student</label>
                            <input type="number" id="student" name="student" min="0" max="35" onChange={this.onStudentChange}></input>
                        </div>
                    </div>
                    <Link 
                    to={`/reservation-final-step/${document.location.href.slice(45)}/${day}/${hour}/${adultTickets}/${seniorTickets}/${studentTickets}`}
                    >
                    <button id="btn-tickets" disabled>Next</button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default Tickets