import React from "react";
import { View, Image } from "react-native"
import { Marker } from "react-native-maps"
import styles from "./MarkerStyle"
const UserMarker = ({ coordinates, userImageUrl }) => {
    return (
        <Marker coordinate={coordinates} >
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: userImageUrl }} />
            </View>
        </Marker>
    )
}

export default UserMarker;