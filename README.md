# pomodoro

Pomodoro, Italian for 'tomato,' is a type of timer designed to get you into a work flow, and to give you regular breaks. In the usual style of pomodoro, a timer is set for 25 minutes. When the timer buzzes, another timer set for 3-5 minutes is set, and this is a break. After four sessions of work, a longer break is had, usually 25-30 minutes.

This software will recreate this timer. When the first timer runs down, a second will count down, and the first will reset.

Header "Pomodoro Clock"
First box will contain "Session" and "Break" sections. Each section will have defaults of 25 and 5 minutes, respectively, and they will be customizable through up and down arrows.

The second box, under the first, will contain one timer which displays the counting down time. (Alternatively, we could have two timers.) The features will be start, pause, stop, and restart.

And that's it!
Enjoy our Pomodoro Clock.



Update 8 April 2020
- Added CSS to boxes;
- Found Unicode Characters for up, down, play, reset, pause, and stop;
- Added default values for timers.
--Joel
- Created a function to get the local data;
- Added events listeners;
- Created a sleep function;
- Created a function to calculate the end of a session or a break.
-- Ciro

Update 9 April 2020
- Added functions to change the session number;
- Created a script to change the break time duration based on the actual session;
- Implemented visual countdown;
- Automatic start of the break countdown after the activity time (It has to be optimized because it launches multiple countdowns);
-- Ciro
