import { search } from '../services/reservations';
import React, { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function BookingsScreen({ route, navigation }) {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    if (route.params.searchTerm) {
      search(route.params.searchTerm).then(response => {
        //console.log(response.data);
        setReservations(response.data) //capitalization matters
      })
    }
    else {
      navigation.navigate('Home');
    }

  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.reservationsBody}>
        <FlatList
          data={reservations}
          keyExtractor={item => item.id + "yeah"}
          renderItem={
            ({ item }) => (
              <View style={styles.row} >
                <Text style={styles.rowText}>
                  {
                    `${item.person.firstName} ${item.person.lastName}
                    \nStarting time: ${new Date(item.startTime).toLocaleString('en-AU')} 
                    \nDuration (hours): ${item.duration}
                    \nNote: ${item.note}
                    \nGuests: ${item.guests}
                    \nStatus: ${item.reservationStatus.description}`
                  }
                </Text>
              </View>
            )}
        />
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
  },
  Input: {
    padding: 8,
    margin: 15,
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: 'white',
    borderColor: 'orange',
    width: 200,
  },
  body: {
    backgroundColor: '#A3DDE0',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: 'red'
  },
  row: {
    backgroundColor: 'white',
    padding: 4,
    margin: 5,
    paddingLeft: 10,
    marginTop: 10,
  },
  reservationsBody: {
    backgroundColor: '#A3DDE0',
    flex: 10,
    padding: 10,
  },
  rowText: {
    //fontSize: '1em',
  },
};
