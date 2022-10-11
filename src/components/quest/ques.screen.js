import React, { useEffect, useState } from 'react';
import { SafeAreaView,View, FlatList, StyleSheet, Text,Alert,ScrollView} from 'react-native';  
import {QuesCard} from './ques-card'

const questionair=[
  {"id":1,
  "desc":"Question 1",
  "ans":[
    {"no":"1","desc":"ans 1"},
    {"no":"2","desc":"ans 2"},
    {"no":"3","desc":"ans 3"},
    {"no":"4","desc":"ans 4"}
  ]
},
  {
    "id":2,
  "desc":"Question 2",
  "ans":[
    {"no":"1","desc":"ans 1"},
    {"no":"2","desc":"ans 2"},
    {"no":"3","desc":"ans 3"},
    {"no":"4","desc":"ans 4"}
  ]
},
  {
    "id":3,
  "desc":"Question 3",
  "ans":[
    {"no":"1","desc":"ans 1"},
    {"no":"2","desc":"ans 2"},
    {"no":"3","desc":"ans 3"},
    {"no":"4","desc":"ans 4"}
  ]
},
  {
    "id":4,
  "desc":"Question 4",
  "ans":[
    {"no":"1","desc":"ans 1"},
    {"no":"2","desc":"ans 2"},
    {"no":"3","desc":"ans 3"},
    {"no":"4","desc":"ans 4"}
  ]
},
  {
    "id":5,
  "desc":"Question 5",
  "ans":[
    {"no":"1","desc":"ans 1"},
    {"no":"2","desc":"ans 2"},
    {"no":"3","desc":"ans 3"},
    {"no":"4","desc":"ans 4"}
  ]
},
  {
    "id":6,
  "desc":"Question 6",
  "ans":[
    {"no":"1","desc":"ans 1"},
    {"no":"2","desc":"ans 2"},
    {"no":"3","desc":"ans 3"},
    {"no":"4","desc":"ans 4"}
  ]
},
  {
    "id":7,
  "desc":"Question 7",
  "ans":[
    {"no":"1","desc":"ans 1"},
    {"no":"2","desc":"ans 2"},
    {"no":"3","desc":"ans 3"},
    {"no":"4","desc":"ans 4"}
  ]
  },
  {
    "id":8,
  "desc":"Question 8",
  "ans":[
    {"no":"1","desc":"ans 1"},
    {"no":"2","desc":"ans 2"},
    {"no":"3","desc":"ans 3"},
    {"no":"4","desc":"ans 4"}
  ]
  },
  {
    "id":9,
  "desc":"Question 9",
  "ans":[
    {"no":"1","desc":"ans 1"},
    {"no":"2","desc":"ans 2"},
    {"no":"3","desc":"ans 3"},
    {"no":"4","desc":"ans 4"}
  ]
  },
  {
    "id":10,
  "desc":"Question 10",
  "ans":[
    {"no":"1","desc":"ans 1"},
    {"no":"2","desc":"ans 2"},
    {"no":"3","desc":"ans 3"},
    {"no":"4","desc":"ans 4"}
  ]
  },
];

export const QuesScreen = ({ ques = {} }) => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [ans, setAns] = useState();

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const getMovies = () =>{
    const randomN= getRandomInt(1,6);

    const nQ = questionair.filter((item)=>item.id===randomN)
    console.log("random."+randomN)
    console.log("Q."+JSON.stringify(nQ))

    setData(nQ)
    
  }

  const chooseAns =(id)=>{
    const ans = data[0].ans.find((item)=>item.no===id)
    Alert.alert("Your answer is.",`You choose ${ans.desc}`,[{text:"OK",onPress:()=>{
      setAns(id);
    }}])
    
  }

  useEffect(() => {
    getMovies();
  }, [ans]);

  return(
       <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Questionair.</Text>
       <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <>
          <QuesCard chooseAns={chooseAns} question={item} key={item.no} />
          </>
        )}
      />
       </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:10
  },
  header: {
    marginTop: 20,
    fontSize: 30,
  }
  
});