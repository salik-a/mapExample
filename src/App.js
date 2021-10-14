
import React, { useRef, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import MapView from 'react-native-maps';
import Loading from './components/loading/Loading';
import useFetch from './hooks/useFetch';
import Marker from "./components/marker/Marker"
import InfoCard from './components/infoCard/InfoCard';
const App = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [user, setUser] = useState()
  const mapRef = useRef();
 
  const { data, loading, error } = useFetch("https://random-data-api.com/api/users/random_user?size=30");

  function handleMarkerSelect(coordinates, selectedUser) {
    setUser(selectedUser)
    mapRef.current.animateToRegion({
      latitude: coordinates.lat,
      longitude: coordinates.lng,
      latitudeDelta: 10,
      longitudeDelta: 10,
    })
    handleModalVisible()
  }

  function handleModalVisible() {
    setModalVisible(!modalVisible)
  }


  const renderMarkers = () => {
    return data.map(({ avatar, id, address: { coordinates }, first_name, last_name, username }) => {
      return (
        <Marker
          onPress={() => handleMarkerSelect(coordinates, { first_name, last_name, username })}
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
      <MapView ref={mapRef} style={{ flex: 1 }} >
        {data && renderMarkers()}
      </MapView>
      {loading && <Loading />}
      {user && (<InfoCard
        visible={modalVisible}
        user={user}
        close={handleModalVisible}
      />)}
    </SafeAreaView>
  );
};



export default App;
