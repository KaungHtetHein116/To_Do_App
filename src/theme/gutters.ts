import { StyleSheet } from 'react-native'
import variables, { MetricsSizes } from './variables'

type Margins =
	| 'Margin'
	| 'BMargin'
	| 'TMargin'
	| 'RMargin'
	| 'LMargin'
	| 'VMargin'
	| 'HMargin'
type Paddings =
	| 'Padding'
	| 'BPadding'
	| 'TPadding'
	| 'RPadding'
	| 'LPadding'
	| 'VPadding'
	| 'HPadding'
type MetricsSizes = typeof variables.MetricsSizes
type MarginKeys = `${keyof MetricsSizes}${Margins}`
type PaddingKeys = `${keyof MetricsSizes}${Paddings}`

type Gutters = {
	[key in MarginKeys | PaddingKeys]: {
		[k in string]: number
	}
}

function getGutters(): Gutters {
	return StyleSheet.create(
		Object.entries(MetricsSizes).reduce(
			(acc, [key, value]) => ({
				...acc,
				/* Margins */
				[`${key}Margin`]: {
					margin: value,
				},
				[`${key}BMargin`]: {
					marginBottom: value,
				},
				[`${key}TMargin`]: {
					marginTop: value,
				},
				[`${key}RMargin`]: {
					marginRight: value,
				},
				[`${key}LMargin`]: {
					marginLeft: value,
				},
				[`${key}VMargin`]: {
					marginVertical: value,
				},
				[`${key}HMargin`]: {
					marginHorizontal: value,
				},
				/* Paddings */
				[`${key}Padding`]: {
					padding: value,
				},
				[`${key}BPadding`]: {
					paddingBottom: value,
				},
				[`${key}TPadding`]: {
					paddingTop: value,
				},
				[`${key}RPadding`]: {
					paddingRight: value,
				},
				[`${key}LPadding`]: {
					paddingLeft: value,
				},
				[`${key}VPadding`]: {
					paddingVertical: value,
				},
				[`${key}HPadding`]: {
					paddingHorizontal: value,
				},
			}),
			{},
		) as Gutters,
	)
}

export default getGutters()
