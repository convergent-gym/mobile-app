import * as Font from 'expo-font';

export default useFonts = async() => {
    await Font.loadAsync({
        "K2D": require('../assets/fonts/K2D/K2D-Regular.ttf'),
        "K2D-Bold": require('../assets/fonts/K2D/K2D-Bold.ttf'),
        "K2D-Medium": require('../assets/fonts/K2D/K2D-Medium.ttf'),
    });
};