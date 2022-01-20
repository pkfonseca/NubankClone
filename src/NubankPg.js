import React, { Component } from 'react';
import { Image, Modal, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Tabs from '../Components/Tabs/Tabs';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: 'Patrick Fonseca',
            visivel: false,
            dinheiroVisivel: false,
        }
    }

    render() {
        return (
            <View style={this.styles.container}>
                <ScrollView>
                    <StatusBar barStyle='light-content' backgroundColor='#8B10AE' />
                    <View style={this.styles.header}>
                        <Image source={require('../assets/Nubank_Logo.png')} />
                        <Text style={this.styles.titulo}>{this.state.nome}</Text>
                    </View>

                    {!this.state.visivel && <TouchableOpacity style={{ padding: 10 }} onPress={() => this.setState({ visivel: !this.state.visivel })}>
                        <Icon name='keyboard-arrow-down' color='#FFF' size={20} style={{ alignSelf: 'center' }} />
                    </TouchableOpacity>}

                    {this.state.visivel && <TouchableOpacity style={{ padding: 10 }} onPress={() => this.setState({ visivel: !this.state.visivel })}>
                        <Icon name='keyboard-arrow-up' color='#FFF' size={20} style={{ alignSelf: 'center' }} />
                    </TouchableOpacity>}

                    {this.state.visivel && (
                        <View style={this.styles.content}>

                            <View style={this.styles.card}>

                                <View style={this.styles.cardHeader}>
                                    <Icon name="attach-money" size={28} color="#666" />
                                    {!this.state.dinheiroVisivel &&
                                        <TouchableOpacity onPress={() => this.setState({ dinheiroVisivel: !this.state.dinheiroVisivel })}>
                                            <Icon name="visibility-off" size={28} color="#666" />
                                        </TouchableOpacity>
                                    }

                                    {this.state.dinheiroVisivel &&
                                        <TouchableOpacity onPress={() => this.setState({ dinheiroVisivel: !this.state.dinheiroVisivel })}>
                                            <Icon name="visibility" size={28} color="#666" />
                                        </TouchableOpacity>
                                    }
                                </View>

                                <View style={this.styles.cardContent}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Saldo disponível:</Text>
                                    {this.state.dinheiroVisivel && (
                                        <Text style={{ marginTop: 15, marginLeft: 10, fontSize: 22, color: '#666' }}>R$ 2.000,00</Text>
                                    )}
                                </View>
                                {!this.state.dinheiroVisivel && (
                                    <View style={{ width: 150, backgroundColor: 'rgba(114, 113, 114, 0.38)', height: 20, marginTop: 15, marginLeft: 10, }}></View>
                                )}

                            </View>
                            <View style={this.styles.cardFooter}>
                                <Text style={{fontSize: 15}}>Transferência de R$ 20,00 recebida de Kevin Bezerra</Text>
                            </View>
                        </View>
                    )}

                    <Tabs />
                </ScrollView>
            </View>
        )
    }
    styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#8B10AE'
        },

        header: {
            alignItems: 'center',
            alignSelf: 'center',
            paddingTop: 40,
            paddingRight: 0,
            paddingBottom: 10,
            flexDirection: 'row',
            marginBottom: 10,
        },

        titulo: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#FFF',
            marginLeft: 8
        },

        content: {
            backgroundColor: '#FFF',
            width: 350,
            height: 300,
            alignSelf: 'center',
            borderRadius: 2,
            elevation: 5,
            justifyContent: 'center'
        },
        card: {
            flex: 1,
            backgroundColor: "#FFF",
            borderRadius: 4,
            marginTop: 0,
            marginRight: 20,
            height: '100%',
            padding: 10
        },
        cardHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        cardContent: {
            marginTop: 40,
        },

        cardFooter: {
            padding: 20,
            marginTop: 'auto',
            width: '100%',
            backgroundColor: 'rgba(114, 113, 114, 0.20)'
        },
    })
}


export default Container;