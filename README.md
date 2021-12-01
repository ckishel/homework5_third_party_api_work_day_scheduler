# 05 Third-Party APIs: Work Day Scheduler

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
Use the [Moment.js](https://momentjs.com/) library to work with date and time.
```
## Mock-Up

The following image shows the web application's appearance and functionality:

![Click the save button to add in data. Delete the data and click save again to make it blank.](./assets/workday-scheduler.jpg)

This layout is designed for desktop viewing, but optimized for mobile. 

URL: https://ckishel.github.io/homework5_third_party_api_work_day_scheduler/