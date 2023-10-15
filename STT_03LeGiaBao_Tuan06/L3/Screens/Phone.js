import { StyleSheet, Image, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/AntDesign';



export default function Screen01({ navigation, route }) {

    const [color, setColor] = useState('vs3-black.png');//*** */

    const handleChooseColor = () => {
        navigation.navigate('Chọn màu', { color })
    };

    useEffect(() => {
        if (route.params?.color) {
            /// tuong tac api
        }

    }, [route.params?.color])


    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={{ backgroundColor: '#c9d1ce', alignItems: 'center' }}>
                    <Image
                        style={styles.imageProduct}
                        source={require(`../assets/${route.params?.color ?? color}`)}
                    //Neu route.params?.color khong co gia tri thi tra ra undefined (?. toan tu chaining es6) 
                    //Sau do dung (?? toan tu nullish [undefined - null]) neu ket qua cua color la undefined thi ?? tra ra gia tri sau do la color.
                    //Duoc hook useState setColor() mac dinh la black 
                    />
                </View>
            </View>
            <View style={styles.middle}>
                <Text variant="titleLarge">Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                <View style={styles.middleGroup1}>
                    <Text variant="titleLarge"
                        style={{ fontWeight: 'bold' }}>1.790.000 đ</Text>
                    <Text variant="titleMedium"
                        style={{ marginLeft: 20, textDecorationLine: 'line-through', color: '#484a49', fontWeight: 'bold' }}>
                        1.790.000 đ
                    </Text>
                </View>
                <View style={styles.middleGroup2}>
                    <Text variant='bodyMedium'
                        style={{ fontWeight: 'bold', color: 'red', }}>
                        Ở đâu rẻ hơn hoàn tiền
                    </Text>
                    <Icon
                        name="questioncircleo"
                        size={20}
                        style={{ marginLeft: 10 }}
                        color='#00000' />
                </View>
                <View style={styles.middleGroup3}>
                    <Rating
                        imageSize={30}
                        // onFinishRating={this.ratingCompleted}
                        style={{ paddingVertical: 10 }}
                    />
                    <Text variant='titleMedium'>(Xem 828 đánh giá)</Text>
                </View>
            </View>
            <View style={styles.bottom}>
                <Button
                    icon='arrow-right-circle'
                    contentStyle={{ flexDirection: 'row-reverse' }}
                    mode='outlined'
                    onPress={() => handleChooseColor()}>
                    4 MÀU - CHỌN MÀU
                </Button>
                <Button
                    mode='contained'
                    buttonColor='red'
                    onPress={() => console.log('Đã được chọn thành công!!!')}>
                    Chọn mua
                </Button>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        width: '100%',
        justifyContent: 'space-around'
    },
    top: {
        flex: 0.1,
        flexGrow: 0.5,
    },
    middle: {
        flex: 0.4,
        flexGrow: 0.45,
        justifyContent: 'flex-start',
        padding: 20,
    },
    bottom: {
        flex: 0.2,
        flexGrow: 0.2,
        justifyContent: 'space-between',
        padding: 10,

    },
    middleGroup1: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    middleGroup2: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    middleGroup3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageProduct: {
        flex: 1,
        width: 300,
        height: 250,
        resizeMode: 'contain',
    }

});
