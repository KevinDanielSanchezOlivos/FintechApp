import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function AddressScreen({ navigation }) {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");

  const canContinue = address && city && postcode;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home address</Text>
      <Text style={styles.subtitle}>This info needs to be accurate with your ID document.</Text>

      <Text style={styles.label}>Address Line</Text>
      <TextInput style={styles.input} value={address} onChangeText={setAddress} />

      <Text style={styles.label}>City</Text>
      <TextInput style={styles.input} value={city} onChangeText={setCity} />

      <Text style={styles.label}>Postcode</Text>
      <TextInput style={styles.input} value={postcode} onChangeText={setPostcode} />

      <TouchableOpacity
        style={[styles.button, { opacity: canContinue ? 1 : 0.4 }]}
        disabled={!canContinue}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  subtitle: { color: "#666", marginBottom: 20 },
  label: { color: "#555", marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#347AF0",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
});
