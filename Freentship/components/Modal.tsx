import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const Height_modal = 150;
const width = Dimensions.get('window').width;
export default function ModalSimple(props) {
const CloseModal = (bool ,data)=>{
    props.changeModelVisible(bool);
    props.setData(data);
}
    return (
        <TouchableOpacity
            disabled={true}
            style={styles.container}>
            <View style={styles.Modal}>
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

                <View style={styles.buttionView}>
                    <TouchableOpacity style={styles.TouchableOpacity}
                      onPress= {() => CloseModal(false, 'Cancel')}
                    >  
                        <Text style={{ color: 'blue' }}> Cancel</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacity}
                      onPress ={() => CloseModal(false, 'OK')}
                    >
                        <Text style={{ color: 'blue' }}> OK</Text>
                    </TouchableOpacity>
                </View>

            </View>




        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    }
    , Modal: {
        height: Height_modal,
        paddingTop: 10,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        width: width - 80,
        marginTop: 70
    }
    , TouchableOpacity: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    buttionView: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
})

function MarkDay(date: string & import("react-native-calendars").DateData): void {
    throw new Error('Function not implemented.');
}
