import { Text, View, StyleSheet } from 'react-native'

interface StaticValueProps {
	label: string
	value: string
}

const StaticValue: React.FC<StaticValueProps> = ({ label, value }) => {
	return (
		<View>
			<Text style={styles.label}>{label}</Text>
			<Text style={styles.value}>{value}</Text>
		</View>
	)
}

export default StaticValue

const styles = StyleSheet.create({
	label: {
		fontSize: 15,
		color: '#FFF',
	},
	value: {
		fontSize: 40,
		color: '#AFB3BE',
		fontWeight: '400',
	},
})
