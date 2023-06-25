import React, { useState } from "react";
import { Button, View, Text, ScrollView, Alert, } from "react-native";
// import CheckBox from '@react-native-community/checkbox';
import CheckBox from "./CheckBox";
import { styles } from "./style";

const dataMain = [
    {
        stt: 1,
        cauhoi: 'Sự xuất hiện của nhà nước cổ đại nào sau đây có nguyên nhân là do mâu thuẫn giai cấp gay gắt đến mức không thể điều hòa được :',

        anser: [
            'Nhà nước Giéc – manh',
            'Nhà nước Rôma',
            'Nhà nước Aten'
        ],
        dapan: 'Nhà nước Rôma'
    },
    {
        stt: 2,
        cauhoi: 'Theo học thuyết Mác – Lênin, nhận định nào sau đây là đúng: ',
        anser: [
            'Tính chất giai cấp của nhà nước không đổi nhưng bản chất của nhà nước thì thay đổi qua các kiểu nhà nước khác nhau.',
            'Tính chất giai cấp và bản chất của nhà nước không thay đổi qua các kiểu nhà nước khác nhau.',
            'Tính chất giai cấp và bản chất của nhà nước luôn luôn thay đổi qua các kiểu nhà nước khác nhau.'
        ],
        dapan:'Tính chất giai cấp của nhà nước không đổi nhưng bản chất của nhà nước thì thay đổi qua các kiểu nhà nước khác nhau.'
    },
    {
        stt: 3,
        cauhoi: 'Thành phố nào sau đây không phải là thành phố trực thuộc trung ương:',
        anser: [
            'Thành phố Huế',
            'Thành phố Cần Thơ',
            'Thành phố Đà Nẵng'
        ],
        dapan: 'Thành phố Huế'

    },
    {
        stt: 4,
        cauhoi: 'Sự xuất hiện của nhà nước cổ đại nào sau đây có nguyên nhân là do mâu thuẫn giai cấp gay gắt đến mức không thể điều hòa được :',

        anser: [
            'Nhà nước Giéc – manh',
            'Nhà nước Rôma',
            'Nhà nước Aten'
        ],
        dapan:'Nhà nước Aten'
    },
    {
        stt: 5,
        cauhoi: 'Theo học thuyết Mác – Lênin, nhận định nào sau đây là đúng: ',
        anser: [
            'Tính chất giai cấp của nhà nước không đổi nhưng bản chất của nhà nước thì thay đổi qua các kiểu nhà nước khác nhau.',
            'Tính chất giai cấp và bản chất của nhà nước không thay đổi qua các kiểu nhà nước khác nhau.',
            'Tính chất giai cấp và bản chất của nhà nước luôn luôn thay đổi qua các kiểu nhà nước khác nhau.'
        ],
        dapan:'Tính chất giai cấp và bản chất của nhà nước luôn luôn thay đổi qua các kiểu nhà nước khác nhau.'

    },
    {
        stt: 6,
        cauhoi: 'Thành phố nào sau đây không phải là thành phố trực thuộc trung ương:',
        anser: [
            'Thành phố Huế',
            'Thành phố Cần Thơ',
            'Thành phố Đà Nẵng'
        ]
        , dapan:'Thành phố Đà Nẵng'
    },

]
 
function Main({ navigation }) {
    const [point,setPoint]=useState(0)
    const [mangResult,setMangResult]=useState([])
   
const checkResult=()=>{
    const uniqueMangResult = [];

    mangResult.forEach(item => {
      const existingIndex = uniqueMangResult.findIndex(
        existingItem => existingItem[0].stt === item[0].stt
      );
    
      if (existingIndex === -1) {
        uniqueMangResult.push(item);
      }
    });

    const mangx=[]
    dataMain.forEach(item => {
        const dapan = item.dapan.trim();
      mangx.push(dapan)
        });
        uniqueMangResult.forEach(result => {
              const x = result[0].x.trim();
          if(mangx.includes(x)){
            setPoint(prevPoint => prevPoint + 1);
          }
           
              })

     }
      

    const showDiem = () => {
        setPoint(0)
        checkResult()
        Alert.alert(
            "Chuc mung!",
            "Hay tiếp tục",
            [
                {
                    text: "OK",
                    onPress: () => console.log("ok")
                }
            ]
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}

            removeClippedSubviews={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}  >

            <View style={{ justifyContent: 'flex-start' }}>
                <Button title="Go back" onPress={() => navigation.goBack()} />
            </View>
            <View style={{ justifyContent: 'flex-start' }}>
                <Text style={{ color: 'red', fontSize: 18 }}>Point :{point} / {dataMain.length}</Text>
            </View>
            <View  >
                <View style={styles.body}>
                    {dataMain.map((item, index) =>
                        <View key={index}>
                            <Text style={styles.bodyText}>Câu {item.stt}:{item.cauhoi}</Text>

                            <CheckBox item={item} setMangResult={setMangResult} mangResult={mangResult} />
                        </View>


                    )}
                    <View style={{ marginBottom: 20 }}>
                        <Button title="tính điểm" onPress={showDiem} />
                    </View>
                </View>

            </View>
        </ScrollView>
    );
}
export default Main;

 