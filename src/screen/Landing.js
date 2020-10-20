import React, { Component } from 'react'
import { Text, View, Image, TouchableHighlight, BackHandler } from 'react-native'
import { clearRegister } from "../../Stores/Actions/user";
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import styles from './WelcomeScreenStyle'
import Helpers from '../../Theme/Helpers'

export class Landing extends Component {
    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick)
    }

    componentWillUnmount() {
        this.backHandler.remove()
    }

    handleBackButtonClick = () => {
        BackHandler.exitApp()
        return true
    }

    register() {
        this.props.clearRegister()
        this.props.navigation.navigate("Register")
    }

    render() {
        return (
            <View style={[styles.container, Helpers.mainSpaceBetween]}>
                <View />
                <View style={Helpers.center}>
                    <View style={styles.image}>
                        <Image
                            style={Helpers.fullSize}
                            source={require("../../Assets/Images/image-welcome.png")}
                        />
                    </View>
                    <Text style={styles.title}>Selamat Datang</Text>
                    <Text style={styles.subtitle}>Belanja kebutuhan yang organik sehari hari lebih mudah dan hemat.</Text>
                </View>
                <View style={[Helpers.center, {marginBottom: 40}]}>
                    <TouchableHighlight activeOpacity={0.6} underlayColor="#37734e" style={styles.buttonContainer} onPress={() => this.props.navigation.navigate("Login")} >
                        <View style={[Helpers.rowCross, Helpers.mainSpaceBetween]}>
                            <Text style={{ color: "white", fontSize: 18, fontFamily: "Poppins-SemiBold" }}>Masuk</Text>
                            <Icon
                                name='arrow-forward'
                                color='white'
                            />
                        </View>
                    </TouchableHighlight>
                    <View style={[Helpers.rowCross, { marginTop: 20 }]}>
                        <Text style={styles.dontHaveAccount}>Kamu belum punya akun? </Text>
                        <Text style={styles.createAccount} onPress={() => this.register()}>Buat Akun Baru</Text>
                    </View>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clearRegister: () => dispatch(clearRegister()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Landing)
