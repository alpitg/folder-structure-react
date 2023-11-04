import "./calendar-sample1.scss";

const CalendarSample1App = () => {

    return <div className="calendar-sample1-app">
        <div className="container">

            <div className="calendar-base">

                <div className="year">2017</div>

                <div className="triangle-left"></div>
                <div className="triangle-right"></div>

                <div className="months">
                    <span className="month-hover">Jan</span>
                    <span className="month-hover">Feb</span>
                    <span className="month-hover">Mar</span>
                    <strong className="month-color">Apr</strong>
                    <span className="month-hover">May</span>
                    <span className="month-hover">Jun</span>
                    <span className="month-hover">July</span>
                    <span className="month-hover">Aug</span>
                    <span className="month-hover">Sep</span>
                    <span className="month-hover">Oct</span>
                    <span className="month-hover">Nov</span>
                    <span className="month-hover">Dec</span>
                </div>
                <hr className="month-line" />

                <div className="days">SUN MON TUE WED THU FRI SAT</div>

                <div className="num-dates">

                    <div className="first-week"><span className="grey">26 27 28 29 30 31</span> 01</div>
                    <div className="second-week">02 03 04 05 06 07 08</div>
                    <div className="third-week"> 09 10 11 12 13 14 15</div>
                    <div className="fourth-week"> 16 17 18 19 20 21 22</div>
                    <div className="fifth-week"> 23 24 25 26 <strong className="white">27</strong> 28 29</div>
                    <div className="sixth-week"> 30 <span className="grey">01 02 03 04 05 06</span></div>
                </div>
                <div className="event-indicator"></div>
                <div className="active-day"></div>
                <div className="event-indicator two"></div>

            </div>
            <div className="calendar-left">

                <div className="hamburger">
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                </div>

                <div className="num-date">27</div>
                <div className="day">THURSDAY</div>
                <div className="current-events">Current Events
                    <br />
                    <ul>
                        <li>Day 09 Daily CSS Image</li>
                    </ul>
                    <span className="posts">See post events</span></div>

                <div className="create-event">Create an Event</div>
                <hr className="event-line" />
                <div className="add-event"><span className="add">+</span></div>

            </div>

        </div>
    </div>
}

export default CalendarSample1App;