import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import StaticValue from './src/components/StaticValue'
import RingProgress from './src/components/RingProgress'

export default function App() {
	return (
		<View style={styles.container}>
			<RingProgress progress={0.25} />

			<View style={styles.values}>
				<StaticValue label='Шаги' value='1219' />
				<StaticValue label='Дистанция' value={'0,75 км'} />
				<StaticValue label='Пролетов пройдено' value='3' />
			</View>

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
	values: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 30,
		marginVertical: 20,
	},
})
