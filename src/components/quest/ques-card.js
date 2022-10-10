import React, { useState } from "react";
// import styled from "styled-components/native";
import { Text,Button, StyleSheet, View, Alert } from "react-native";

export const QuesCard = ({chooseAns,question}) => {
  const {
    id,
    desc,
    ans
  }= question;

  return(
        <View style={styles.container}>
          <View style={styles.card_template}>
          <View style={styles.card_header}>
            <Text style={styles.card_no} >{id} |</Text>
            
            <Text style={styles.card_title} >{desc}</Text>
          </View>
          
          
          {ans.map((data) => {
            return (
              <View style={styles.text_container}>
                {/* <Text  style={styles.text_ans} key={data.no} > {data.desc}</Text> */}

                <Button tyle={styles.text_ans} key={data.no} 
          title= {data.desc}
          onPress={() => chooseAns(data.no)}
        />
                </View>
            );
          })}
          
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card_template:{
    width: 300,
    height: 300,
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
    borderWidth:2,
    borderRadius: 6,
    borderColor:"#a9a9a9",
  },
  card_header:{
    flexDirection: 'row',
    marginBottom: 6,
  },
  card_no: {
     color: "#696969",
     fontSize:40,
     fontWeight:"bold",
     marginTop:5,
     marginBottom:5,
     marginLeft:5,
  },
  card_title: {
     color: "#696969",
     fontSize:25,
     fontWeight:"bold",
     marginTop:5,
     marginBottom:5,
     marginLeft:5,
  },
  text_container:{
    padding: 5,
    backgroundColor:"#add8e6",
    borderRadius:10,
    // backgroundColor: "rgba(0,0,0, 0.3)",
    margin: 5,
  },
  text_ans:{
    fontSize:20,
  }
});