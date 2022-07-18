# Work Day Scheduler

## Description

This is a simple daily planner application that allows the user to save events for each hour of the standard workday. It runs in the browser and features dynamically updated HTML and CSS power by jQuery.

The working application can be found [here](https://aurumbright.github.io/work-calendar/).

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./assets/Work%20Day%20Scheduler.gif)

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
```
