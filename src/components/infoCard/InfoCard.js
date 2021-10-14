import React from "react"
import Modal from "react-native-modal";
import { View, Text, SafeAreaView } from "react-native";
import styles from "./infoCardStyle"

const InfoCard = ({ visible, close, user }) => {
    return (
        <Modal
            isVisible={visible}
            swipeDirection="down"
            onSwipeComplete={close}
            onBackdropPress={close}
            onBackButtonPress={close}
            style={styles.modal}
            backdropOpacity={0.1}
        >
            <View style={styles.container}>

                <Text style={styles.username}>
                    {user.first_name} {user.last_name}
                </Text>
                <SafeAreaView style={styles.safeArea} />

            </View>
        </Modal>
    )
}

export default InfoCard;