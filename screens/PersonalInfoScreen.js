import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function PersonalInfoScreen({ navigation }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("Seleccione fecha");

  // Estado del calendario
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // Mostrar calendario
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  // Ocultar calendario
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  // Cuando el usuario selecciona fecha
  const handleConfirm = (date) => {
    const fechaFormateada = date.toISOString().split("T")[0];
    setFechaNacimiento(fechaFormateada);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información Personal</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={apellido}
        onChangeText={setApellido}
      />

      {/* Botón para abrir el calendario */}
      <TouchableOpacity style={styles.dateInput} onPress={showDatePicker}>
        <Text style={styles.dateText}>{fechaNacimiento}</Text>
      </TouchableOpacity>

      {/* Calendario */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AddressScreen")}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 14,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  dateInput: {
    width: "100%",
    padding: 14,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  dateText: {
    fontSize: 16,
    color: "#555",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
