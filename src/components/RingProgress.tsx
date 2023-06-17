import { View, Text } from 'react-native'
import SVG, { Circle } from 'react-native-svg'

interface RingProgressProps {
	radius?: number
	strokeWidth?: number
	progress: number
}

const color = '#EE0F55'

const RingProgress: React.FC<RingProgressProps> = ({
	radius = 150,
	strokeWidth = 35,
	progress,
}) => {
	const innerRadius = radius - strokeWidth / 2
	const circumference = 2 * Math.PI * innerRadius

	return (
		<View
			style={{
				width: radius * 2,
				height: radius * 2,
				alignSelf: 'center',
			}}
		>
			<SVG>
				<Circle
					cx={radius}
					cy={radius}
					r={innerRadius}
					stroke={color}
					strokeWidth={strokeWidth}
					opacity={0.2}
				/>

				<Circle
					cx={radius}
					cy={radius}
					r={innerRadius}
					stroke={color}
					strokeWidth={strokeWidth}
					strokeDasharray={[circumference * progress, circumference]}
					strokeLinecap='round'
					rotation={-90}
					originX={radius}
					originY={radius}
				/>
			</SVG>
		</View>
	)
}

export default RingProgress
