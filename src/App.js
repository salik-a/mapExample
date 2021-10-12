
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import MapView from 'react-native-maps';
import Loading from './components/Loading';
import useFetch from './hooks/useFetch';


const App = () => {
 
  const { data, loading, error } = useFetch("https://random-data-api.com/api/users/random_user?size=30");
  console.log({ data, loading, error })
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} />
      {loading && <Loading />}
    </SafeAreaView>
  );
};



export default App;
