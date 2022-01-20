import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

class Tabs extends Component {

    render() {
        return (
            <View style={this.styles.container}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                    <TouchableOpacity style={this.styles.item}>
                        <Icon name='person-add' color='#FFF' size={20} />
                        <Text style={this.styles.texto}>
                            Indicador de amigos
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={this.styles.item}>
                        <Icon name='chat-bubble-outline' color='#FFF' size={20} />
                        <Text style={this.styles.texto}>
                            Cobrar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={this.styles.item}>
                        <Icon name='arrow-downward' color='#FFF' size={20} />
                        <Text style={this.styles.texto}>
                            Depositar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={this.styles.item}>
                        <Icon name='arrow-upward' color='#FFF' size={20} />
                        <Text style={this.styles.texto}>
                            Transferir
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={this.styles.item}>
                        <Icon name='lock' color='#FFF' size={20} />
                        <Text style={this.styles.texto}>
                            Bloquear Cartão
                        </Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        )
    }
    styles = StyleSheet.create({
        container: {
            height: 100,
            marginTop: 20
        },
        item: {
            width: 100,
            height: 100,
            borderRadius: 3,
            marginLeft: 10,
            padding: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            justifyContent: 'space-between'
        },
        texto: {
            fontSize: 13,
            color: '#FFF'
        }
    })
}
export default Tabs;