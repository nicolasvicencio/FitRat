import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const NewRoutineScreen = ({navigation}) => {
	const [exercises, setExercises] = useState([])
	
 
	return <View style={styles.container}>
		<Text style={styles.title}>New Routine</Text>
		<Text style={styles.label}>Name</Text>
		<TextInput style={styles.input} />
		<Text style={styles.label}>Exercises</Text>
		<TouchableOpacity 
		style={styles.button}
		onPress={() => navigation.navigate('Categories')}
		>
			<Text style={styles.buttonText}>Add</Text>
		</TouchableOpacity>
	</View>;
};

export default NewRoutineScreen;

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	title: {
		fontSize: 28,
		marginBottom: 10
	},
	label: {
		fontSize: 18,
		color: '#022',
		fontWeight: 'regular',
		marginVertical: 3,
		marginTop: 10

	},
	input: {
		borderColor: 'black',
		borderWidth: 1,
		width: '60%',
		borderRadius: 10,
	},
	button: {
		height: 40,
		width: 70,
		borderRadius: 10,
		backgroundColor: '#266dd3',
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonText: {
		color: 'white'
	}
})