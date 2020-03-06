//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Item } from "react-native/Libraries/Components/Picker/Picker";

// create a component
class MyClass extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, city: {}, weather: [],hour:[] };
  }

  async componentDidMount() {
    const id = this.props.navigation.getParam("id");
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?appid=b807789d6524ad85376b5961cc402be8&units=metric&id=${id}`
      );
      const responseJson = await response.json();
      // alert(JSON.stringify(responseJson));
      if (responseJson) {
        this.setState({
          list: responseJson.list,
          city: responseJson.city,
          isLoading: false
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
      alert("error");
    }
  }

  // timeStamp = (dt, main) => {
  //   var a = new Date(dt * 1000);
  //   var b = new Date();
  //   var months = [
  //     "January		",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December"
  //   ];
  //   var timeStampCurret = b.getTime();
  //   console.log(timeStampCurret);
  //   var dateTime = b.getDate();
  //   var year = a.getFullYear();
  //   var month = months[a.getMonth()];
  //   var date = a.getDate();
  //   var nextDay = b.getDate() + 1;

  //   var hour = a.getHours();
  //   var min = a.getMinutes();
  //   var sec = a.getSeconds();
  //   var time =
  //     hour + ":0" + min + "    " + date + "    " + month + "    " + year;
  //   if (dateTime == date) {

  //     return (
  //       <View>
  //         {/* if({main}=='Clouds'){ <Image style={{width:100, height:100}} source={require("../Image/car.png")} />} */}
  //         <Text>{time} </Text>
  //         <Text>{main}</Text>
  //       </View>
  //     );
  //   }
  // for (var c = dateTime; c <= nextDay; c++) {
  //   if (c == date) {
  //     return (
  //       <View>

  //         <Text>{time} </Text>
  //         <Text>{main}</Text>
  //       </View>
  //     );
  //   }
  // }
  // };
  DateFunction = dt_txt => {
    let getTime = new Date(dt_txt);
    // console.log(a.get())
    let dateAPI = getTime.getDate();
    let hourAPI = getTime.getHours();
    let getDateCurrent = new Date();
    let hourCurrent = getDateCurrent.getHours(); //9
    let c = getDateCurrent.getDate();
    let min = 0;

    // let hour = [];
    // this.setState({hour.push(hourAPI)})
    this.setState({hour: [hourAPI]})
    console.log(hourAPI)
    // console.log(this.state.hour);
    // if (dateAPI == c) {

      // if (hourCurrent - hourAPI < min) {
      //   min = hourCurrent - hourAPI;
      //   console.log(typeof hourAPI);
      // }
      // console.log(hourAPI.length)
      // for (var x = 0; x < hourAPI.length; x++) {
      //   if (hourCurrent - hourAPI < min) {
      //     min = hourCurrent - hourAPI;
      //     console.log("min: "+min);
      //   }
      // }
      // console.log("gio: "+hourAPI);
    // }
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size="large" color="red" />
        </View>
      );
    }
    // return this.state.list.map(item => {
    //   return (
    //     <View><Text>{item.dt}</Text></View>
    //   )
    // })
    return (
      <View style={styles.Header}>
        <Text style={{ fontSize: 30 }}>{this.state.city.name}</Text>
        <View>
          <ScrollView style={{ width: 300 }}>
            {this.state.list.map(item => {
              return item.weather.map(it => {
                return (
                  <View>
                    {/* <View>{this.timeStamp(item.dt, it.main)}</View> */}
                    <View>
                      {/* <Text>{item.dt_txt.split(" ")[0]}</Text> */}
                      {this.DateFunction(item.dt_txt)}
                    </View>
                  </View>
                );
              });
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#ffbf00"
  },
  Header: {
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#ffbf00"
  }
});

//make this component available to the app
export default MyClass;
