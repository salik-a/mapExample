
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import MapView from 'react-native-maps';
import Loading from './components/loading/Loading';
import useFetch from './hooks/useFetch';
import Marker from "./components/marker/Marker"

const App = () => {
 
  const { data, loading, error } = useFetch("https://random-data-api.com/api/users/random_user?size=30");

  const renderMarkers = () => {
    return data.map(({ avatar, id, address: { coordinates } }) => {
      return (
        <Marker
          key={id}
          userImageUrl={avatar}
          coordinates={{
            latitude: coordinates.lat,
            longitude: coordinates.lng
          }}
        />
      )
    })
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} >
        {data && renderMarkers()}
      </MapView>
      {loading && <Loading />}
    </SafeAreaView>
  );
};



export default App;
