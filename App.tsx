import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

type StaticValueProps = {
	label: string
	value: string
}

const StaticValue = ({ label, value }: StaticValueProps) => (
	<View style={styles.valueContainer}>
		<Text style={styles.label}>{label}</Text>
		<Text style={styles.value}>{value}</Text>
	</View>
)

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Hello world!</Text>

			<View style={{ flexDirection: 'row' }}>
				<StaticValue label='Шаги' value='1219' />
				<StaticValue label='Дистанция' value={'3 км'} />
			</View>

			<StaticValue label='Пролетов пройдено' value='3' />

			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		justifyContent: 'center',
		padding: 12,
	},
	valueContainer: {
		marginRight: 50,
		marginVertical: 10,
	},
	label: {
		fontSize: 20,
		color: '#FFF',
	},
	value: {
		fontSize: 35,
		color: '#AFB3BE',
		fontWeight: '400',
	},
})
