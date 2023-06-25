import CheckBox from '@react-native-community/checkbox';
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

const MyCheckbox = ({ item, setMangResult, mangResult }) => {
    const [answers, setAnswers] = useState({
        a: false,
        b: false,
        c: false,
    });
    const [mang, setMang] = useState([])

    const handleAnswerChange = (selectedAnswer, x, stt) => {
        const updatedAnswers = {
            a: false,
            b: false,
            c: false,
        };

        updatedAnswers[selectedAnswer] = true;
        setAnswers(updatedAnswers);

        if (mang.length === 0) {
            mang.push({ stt, x })
            setMang([...mang]);

        }
        else {
            const index = mang.findIndex(item => item.stt === stt);
            if (index !== -1) {
                mang[index].x = x;
                setMang(mang);

            }
        }
        //in data
        const existingResultIndex = mangResult.findIndex(item => item.stt === stt);
        if (existingResultIndex !== -1) {
          const updatedResult = [...mangResult];
          updatedResult.splice(existingResultIndex, 1); // Xóa phần tử tại existingResultIndex
          setMangResult([...updatedResult, mang]); // Thêm mang vào cuối mảng đã được cập nhật
        } else {
          setMangResult([...mangResult, mang]);
        }
        

    };
    //hàm làm cho manResult ko lặp lại
    // const uniqueMangResult = [];

    // mangResult.forEach(item => {
    //   const existingIndex = uniqueMangResult.findIndex(
    //     existingItem => existingItem[0].stt === item[0].stt
    //   );
    
    //   if (existingIndex === -1) {
    //     uniqueMangResult.push(item);
    //   }
    // });
    
    // console.log(uniqueMangResult);

    return (
        <View>

            <View style={{ flexDirection: "row", alignItems: "center" }} >
                <CheckBox
                    value={answers.a}
                    onValueChange={() => handleAnswerChange('a', Object.values(item.anser)[0], item.stt)}
                />
                <Text >{Object.values(item.anser)[0]}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }} >
                <CheckBox
                    value={answers.b}
                    onValueChange={() => handleAnswerChange('b', Object.values(item.anser)[1], item.stt)}
                />
                <Text >{Object.values(item.anser)[1]}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }} >
                <CheckBox
                    value={answers.c}
                    onValueChange={() => handleAnswerChange('c', Object.values(item.anser)[2], item.stt)}
                />
                <Text >{Object.values(item.anser)[2]}</Text>
            </View>


        </View>
    );
};

export default MyCheckbox;
