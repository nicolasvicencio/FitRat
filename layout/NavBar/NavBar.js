import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NavBar = () => {
	return <View style={styles.navbar}>
		<Text style={styles.title}>Logo</Text>
	</View>;
};

export default NavBar;


const styles = StyleSheet.create({
	navbar: {
		height: 70,
		backgroundColor: '#266dd3',
		width: "100%",
		display: 'flex',
		justifyContent: 'center',
	
	},
	title: {
		color: 'white',
		fontSize: 30,
		padding: 10,
		fontWeight: 'bold',
		marginTop: 7
		
	}
})