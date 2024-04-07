import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";

const Home = () => {

  const [heigth, setHeigth] = useState("");
  const [weigth, setWeigth] = useState("");
  const [BMI, setBMI] = useState(0.0);

  React.useEffect(() => {
    setHeigth("");
  }, []);

  const handlerCalcBMI = () => {
    const currentWeigth = parseInt(weigth)
    const currentHeigth = parseInt(heigth)
    if (isNaN(currentHeigth) || isNaN(currentWeigth)) {
      return;
    }
    const heigthMeters = currentHeigth / 100;
    setBMI(Number((currentWeigth / (heigthMeters * heigthMeters)).toFixed(1))); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>BMI Calculator</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={heigth}
          onChangeText={(value) => {
            setHeigth(value);
          }}
          style={styles.input}
          placeholder="Heigth-M"
          placeholderTextColor={"rgba(90,90,190,1)"}
          keyboardType="number-pad"
        />
        <TextInput
          value={weigth}
          onChangeText={(value) => {
            setWeigth(value);
          }}
          style={styles.input}
          placeholder="Weigth-KG"
          placeholderTextColor={"rgba(90,90,190,1)"}
          keyboardType="number-pad"
        />
      </View>

      <TouchableOpacity
        disabled = {false}
        style={[styles.goButton, (isNaN(heigth) || isNaN(weigth)) && { opacity: 0.5 }, disabled = true]}
        onPress={() => {
          handlerCalcBMI();
        }}
      >
        <Text style={styles.goButtonText}>Go</Text>
      </TouchableOpacity>

      <Text style={styles.BMIText}>{BMI}</Text>
      <View style = {styles.line}>   
      </View>
      <View style={styles.colorContainer}>
        <View style=
          {[styles.rectangleYellow,
          BMI < 18.5 && BMI >= 1 && { opacity: 1},
          ]}>
          <Image 
            style = {styles.yellowImage}
            source = {require("./assets/yellow.png")}
            contentFit="fill"
          /> 
          <Text style = {styles.valueText}>Under 18</Text>
          <Text style = {styles.noteText}>Under Weight</Text>
        </View>
        <View style={[styles.rectangleGreen,
          BMI >= 18.5 && BMI < 25 && { opacity: 1},
          ]}>
          <Image 
            style = {styles.greenImage}
            source = {require("./assets/green.png")}
            contentFit="fill"
          /> 
          <Text style = {styles.valueText}>18.5-25</Text>
          <Text style = {styles.noteText}>Normal Weight</Text>
        </View>
        <View style={[styles.rectangleRed,
          BMI >= 25 && { opacity: 1},
          ]}>
          <Image 
            style = {styles.redImage}
            source = {require("./assets/red.png")}
            contentFit="fill"
          /> 
          <Text style = {styles.valueText}>Above 25</Text>
          <Text style = {styles.noteText}>Over Weight</Text>
        </View>
      </View>
    </View>

    


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(50,50,50,1)",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "rgba(180, 168, 45, 1)",
    fontSize: 25,
  },

  inputContainer: { flexDirection: "row", gap: 50, marginTop: 50 },

  input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    width: 130,
    padding: 10,
    color: "white",
  },

  goButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 7,

    borderRadius: 10,

    marginTop: 30,
  },

  goButtonText: {
    fontWeight: "500",
    fontSize: 16,
  },

  BMIText: {
    color: "rgba(180, 168, 45, 1)",
    fontSize: 35,
    marginTop: 40,
  },

  line:{
    width: "100%",
    backgroundColor: "white",
    height: 1,
    marginTop: 100,
    opacity: 0.6,
  },

  colorContainer:{
    flexDirection: 'row',
    height: 300,
    padding: 1,
    gap: 20,
    marginTop:10,
  },

  rectangleYellow:{
    backgroundColor: 'yellow',
    flex: 0.3,
    borderRadius: 15,
    opacity: 0.4,
    alignItems: "center",
  },

  rectangleGreen:{
    backgroundColor: 'green',
    flex: 0.3,
    borderRadius: 15,
    opacity: 0.4,
    alignItems: "center",
  },

  rectangleRed:{
    backgroundColor: 'red',
    flex: 0.3,
    borderRadius: 15,
    opacity: 0.4,
    alignItems: "center",
  },

  yellowImage:{
    width: 100,
    height: 70,
    marginTop: 40,
  },

  greenImage:{
    width: 100,
    height: 70,
    marginTop: 40,
  },

  redImage:{
    width: 100,
    height: 70,
    marginTop: 40,
  },

  valueText:{
    fontSize: 15,
    fontWeight: "600",
    marginTop: 30,
  },

  noteText:{
    fontSize: 15,
    fontWeight: "600",
    marginTop: 30,
  }

});

export default Home;
//130 108 45