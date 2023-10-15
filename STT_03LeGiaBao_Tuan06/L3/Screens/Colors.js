import { StyleSheet, Image, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import productList from '../database';


export default function Screen02({ navigation, route }) {

    const handleSubmitColor = () => {
        navigation.navigate({
            name: 'Điện thoại',
            params: { color: route.params.color },
            merge: true,
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        style={styles.imageProduct}
                        source={require(`../assets/${route.params.color}`)}
                    />
                </View>
                <Text
                    variant='titleLarge'
                    style={{ marginTop: 30 }}>
                    Điện Thoại Vsmart Joy 3 Hàng chính hãng
                </Text>
            </View>

            <View style={styles.bottom}>
                <Text variant='titleLarge'>Chọn một màu bên dưới:</Text>
                <View style={styles.bottomListColor}>
                    <Button
                        style={styles.buttonColor}
                        mode='outlined'
                        buttonColor='#ffffff'
                        contentStyle={styles.itemColor}
                        onPress={() => navigation.setParams(route.params.color = productList[0].imageLocal)}
                        key='white'
                    >
                    </Button>
                    <Button
                        style={styles.buttonColor}
                        mode='outlined'
                        buttonColor='#F30D0D'
                        contentStyle={styles.itemColor}
                        onPress={() => navigation.setParams(route.params.color = productList[1].imageLocal)}
                    >
                    </Button>
                    <Button
                        style={styles.buttonColor}
                        mode='outlined'
                        buttonColor='#000000'
                        contentStyle={styles.itemColor}
                        onPress={() => navigation.setParams(route.params.color = productList[2].imageLocal)}
                    >
                    </Button>
                    <Button
                        style={styles.buttonColor}
                        mode='outlined'
                        buttonColor='#234896'
                        contentStyle={styles.itemColor}
                        onPress={() => navigation.setParams(route.params.color = productList[3].imageLocal)}
                    >
                    </Button>
                </View>
                <Button
                    mode='contained'
                    buttonColor='#1952E2'
                    onPress={() => handleSubmitColor()}>
                    Xong
                </Button>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    top: {
        flex: 0.3,
        flexDirection: 'row',
        padding: 10,
    },
    bottom: {
        flex: 0.7,
        justifyContent: 'space-evenly',
        padding: 10,
        backgroundColor: '#C4C4C4',
    },
    bottomListColor: {
        alignItems: 'center',
        alignContent: 'space-between'
    },
    imageProduct: {
        flex: 1,
        width: 200,
        height: null,
        resizeMode: 'contain',
    },
    textColorItem: {
        color: '#4d4f4e',
    },
    itemColor: {
        height: 60,
        width: 60,
    },
    buttonColor: {
        margin: 10,
    }

});
