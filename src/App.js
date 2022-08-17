import React from 'react';
import { BpkCode } from 'bpk-component-code';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';

import BpkCalendar from 'bpk-component-calendar';
import BpkInput, { INPUT_TYPES } from 'bpk-component-input';
import format from 'date-fns/format';


import STYLES from './App.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const formatDateFull = date => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = date => format(date, 'MMMM yyyy');
const daysOfWeek = [
  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    index: 0,
    isWeekend: true,
  },
  {
    name: 'Monday',
    nameAbbr: 'Mon',
    index: 1,
    isWeekend: false,
  },
  {
    name: 'Tuesday',
    nameAbbr: 'Tues',
    index: 2,
    isWeekend: false,
  },
  {
    name: 'Wednesday',
    nameAbbr: 'Wed',
    index: 3,
    isWeekend: false,
  },
  {
    name: 'Thursday',
    nameAbbr: 'Thur',
    index: 4,
    isWeekend: false,
  },
  {
    name: 'Friday',
    nameAbbr: 'Fri',
    index: 5,
    isWeekend: false,
  },
  {
    name: 'Saturday',
    nameAbbr: 'Sat',
    index: 6,
    isWeekend: true,
  },
];

export default class Calendar extends React.Component {
  constructor () {
    super();

    this.state = {
      selectionConfiguration: {
        //type: CALENDAR_SELECTION_TYPE.single,
        date: null,
        
        }
    };
  }

  handleDateSelect = (date) => {
    this.setState({
      selectionConfiguration: {
        type: this.props.selectionConfiguration.type,
        date: date,
      },
    });
  }

  render () {
    return (
        <div className={c('App')}>
          <header className={c('App__header')}>
            <div className={c('App__header-inner')}>
              <BpkText tagName="h1" textStyle="xxl" className={c('App__heading')}>Flight Schedule</BpkText>
           </div>
          </header>
        <main className={c('App__main')}>
          <BpkText tagName="p" className={c('App__text')}>To get started, select the Reservation Date.</BpkText>
          <BpkInput
            id='dateInput'
            type={INPUT_TYPES.text}
            name='date'
            value={(this.state.selectionConfiguration.date || '').toString()}
            placeholder='Reservation date'
          />
          <BpkCalendar
            id='calendar'
            onDateSelect={this.handleDateSelect}
            formatMonth={formatMonth}
            formatDateFull={formatDateFull}
            daysOfWeek={daysOfWeek}
            weekStartsOn={1}
            changeMonthLabel="Change month"
            nextMonthLabel="Next month"
            previousMonthLabel="Previous month"
            selectionConfiguration={this.state.selectionConfiguration}
          />
          <BpkButton onClick={() => alert('It works!')}>Continue</BpkButton>
        </main>
    </div>
  );
  }
}