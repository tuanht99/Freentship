import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
export default function Canlendar() {
  return (
  
<View>
<Calendar
markingType={'custom'}
markedDates={{
'2020-06-01': {
customStyles: {
  container: {
    backgroundColor: 'green'
  },
  text: {
    color: 'black',
    fontWeight: 'bold'
  }
}
}}}

/>
<Calendar markingType={'custom'} markedDates={{
'2020-06-01': {
customStyles: {
  container: {
    backgroundColor: 'green'
  },
  text: {
    color: 'black',
    fontWeight: 'bold'
  }
}}}} dayComponent={({ date, state, marking, theme }) => {
    return (
      <TouchableOpacity>
      <View>
        <Text style={{ textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black' }} onPress={() => MarkDay(date)}>
          {console.log("this is marked ", marking)}
          {date.day}
        </Text> 
        {/* <TrackerModal modalView={this.modal}/> */}
       </View>
      </TouchableOpacity>
    );
  }
} /> 
</View>
);
 
}
function MarkDay(date: string & import("react-native-calendars").DateData): void {
    throw new Error('Function not implemented.');
}

<View>
<Calendar
    markingType={'custom'}
    markedDates={{
        '2020-06-01': {
            customStyles: {
                container: {
                    backgroundColor: 'green'
                },
                text: {
                    color: 'black',
                    fontWeight: 'bold'
                }
            }
        }
    }}

/>
<Calendar markingType={'custom'} markedDates={{
    '2020-06-01': {
        customStyles: {
            container: {
                backgroundColor: 'green'
            },
            text: {
                color: 'black',
                fontWeight: 'bold'
            }
        }
    }
}} dayComponent={({ date, state, marking, theme }) => {
    return (
        <TouchableOpacity>
            <View>
                <Text style={{ textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black' }} onPress={() => MarkDay(date)}>
                    {console.log("this is marked ", marking)}
                    {date.day}
                </Text>
                {/* <TrackerModal modalView={this.modal}/> */}
            </View>
        </TouchableOpacity>
    );
}
} />
</View>