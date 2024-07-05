import { StyleSheet } from 'react-native'
import { MetricsSizes, RadiusSizes } from './variables'

const commonStyles = StyleSheet.create({
	/* Column Layouts */
	col: {
		flexDirection: 'column',
	},
	colReverse: {
		flexDirection: 'column-reverse',
	},
	colCenter: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	colVCenter: {
		flexDirection: 'column',
		alignItems: 'center',
	},
	colHCenter: {
		flexDirection: 'column',
		justifyContent: 'center',
	},
	/* Row Layouts */
	row: {
		flexDirection: 'row',
	},
	rowReverse: {
		flexDirection: 'row-reverse',
	},
	rowCenter: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	rowVCenter: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	rowHCenter: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	/* Default Layouts */
	center: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	fillCenter: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	flexWrap: {
		flexWrap: 'wrap',
	},
	borderWidth1: {
		borderWidth: 1,
	},
	alignItemsCenter: {
		alignItems: 'center',
	},
	alignItemsStart: {
		alignItems: 'flex-start',
	},
	alignItemsStretch: {
		alignItems: 'stretch',
	},
	alignItemsEnd: {
		alignItems: 'flex-end',
	},
	justifyContentCenter: {
		justifyContent: 'center',
	},
	justifyContentAround: {
		justifyContent: 'space-around',
	},
	justifyContentBetween: {
		justifyContent: 'space-between',
	},
	justifyContentEnd: {
		justifyContent: 'flex-end',
	},
	scrollSpaceAround: {
		flexGrow: 1,
		justifyContent: 'space-around',
	},
	scrollSpaceBetween: {
		flexGrow: 1,
		justifyContent: 'space-between',
	},
	selfStretch: {
		alignSelf: 'stretch',
	},
	selfEnd: {
		alignSelf: 'flex-end',
	},
	selfCenter: {
		alignSelf: 'center',
	},
	selfStart: {
		alignSelf: 'flex-start',
	},
	overFlowHidden: {
		overflow: 'hidden',
	},
	/* Sizes Layouts */
	fill: {
		flex: 1,
	},
	flexGrow: {
		flexGrow: 1,
	},
	fullSize: {
		height: '100%',
		width: '100%',
	},
	fullWidth: {
		width: '100%',
	},
	halfWidth: {
		width: '50%',
	},
	fullHeight: {
		height: '100%',
	},
	smallGap: {
		gap: MetricsSizes.small,
	},
	bottomRightView: {
		flex: 0.6,
	},
	bottomLeftView: {
		flex: 0.4,
	},

	/* Border Radius */
	smallBorderRadius: {
		borderRadius: RadiusSizes.small,
	},
	regularBorderRadius: {
		borderRadius: RadiusSizes.regular,
	},
	largeBorderRadius: {
		borderRadius: RadiusSizes.large,
	},
	xLargeBorderRadius: {
		borderRadius: RadiusSizes.xLarge,
	},
	roundBorderRadius: {
		borderRadius: RadiusSizes.round,
	},
	/* Operation Layout */
	mirror: {
		transform: [{ scaleX: -1 }],
	},
	rotate90: {
		transform: [{ rotate: '90deg' }],
	},
	rotate90Inverse: {
		transform: [{ rotate: '-90deg' }],
	},
	// Position
	relative: {
		position: 'relative',
	},
	absolute: {
		position: 'absolute',
	},
	top0: {
		top: 0,
	},
	bottom0: {
		bottom: 0,
	},
	left0: {
		left: 0,
	},
	right0: {
		right: 0,
	},
	textCenter: {
		textAlign: 'center',
	},
	textJustify: {
		textAlign: 'justify',
	},
	textLeft: {
		textAlign: 'left',
	},
	textRight: {
		textAlign: 'right',
	},
	textLineThrough: {
		textDecorationLine: 'line-through',
	},
	xSmallVMargin: {
		marginVertical: MetricsSizes.xSmall,
	},
	smallVMargin: {
		marginVertical: MetricsSizes.small,
	},
	regularVMargin: {
		marginVertical: MetricsSizes.regular,
	},
	largeVMargin: {
		marginVertical: MetricsSizes.large,
	},
	xLargeVMargin: {
		marginVertical: MetricsSizes.xLarge,
	},
	xxlargeVMargin: {
		marginVertical: MetricsSizes.xxLarge,
	},
	xxxLargeVMargin: {
		marginVertical: MetricsSizes.xxxLarge,
	},
	xSmallMargin: {
		margin: MetricsSizes.xSmall,
	},
	smallMargin: {
		margin: MetricsSizes.small,
	},
	regularMargin: {
		margin: MetricsSizes.regular,
	},
	largeMargin: {
		margin: MetricsSizes.large,
	},
	xLargeMargin: {
		margin: MetricsSizes.xLarge,
	},
	xxLargeMargin: {
		margin: MetricsSizes.xxLarge,
	},
	xxxLargeMargin: {
		margin: MetricsSizes.xxxLarge,
	},
	xSmallHMargin: {
		marginHorizontal: MetricsSizes.xSmall,
	},
	smallHMargin: {
		marginHorizontal: MetricsSizes.small,
	},
	regularHMargin: {
		marginHorizontal: MetricsSizes.regular,
	},
	largeHMargin: {
		marginHorizontal: MetricsSizes.large,
	},
	xLargeHMargin: {
		marginHorizontal: MetricsSizes.xLarge,
	},
	xxLargeHMargin: {
		marginHorizontal: MetricsSizes.xxLarge,
	},
	xxxLargeHMargin: {
		marginHorizontal: MetricsSizes.xxxLarge,
	},
	xSmallTMargin: {
		marginTop: MetricsSizes.xSmall,
	},
	smallTMargin: {
		marginTop: MetricsSizes.small,
	},
	regularTMargin: {
		marginTop: MetricsSizes.regular,
	},
	largeTMargin: {
		marginTop: MetricsSizes.large,
	},
	xLargeTMargin: {
		marginTop: MetricsSizes.xLarge,
	},
	xxLargeTMargin: {
		marginTop: MetricsSizes.xxLarge,
	},
	xxxLargeTMargin: {
		marginTop: MetricsSizes.xxxLarge,
	},
	xSmallBMargin: {
		marginBottom: MetricsSizes.xSmall,
	},
	smallBMargin: {
		marginBottom: MetricsSizes.small,
	},
	regularBMargin: {
		marginBottom: MetricsSizes.regular,
	},
	largeBMargin: {
		marginBottom: MetricsSizes.large,
	},
	xLargeBMargin: {
		marginBottom: MetricsSizes.xLarge,
	},
	xxLargeBMargin: {
		marginBottom: MetricsSizes.xxLarge,
	},
	xxxLargeBMargin: {
		marginBottom: MetricsSizes.xxxLarge,
	},
	xSmallLMargin: {
		marginLeft: MetricsSizes.xSmall,
	},
	smallLMargin: {
		marginLeft: MetricsSizes.small,
	},
	regularLMargin: {
		marginLeft: MetricsSizes.regular,
	},
	largeLMargin: {
		marginLeft: MetricsSizes.large,
	},
	xLargeLMargin: {
		marginLeft: MetricsSizes.xLarge,
	},
	xxLargeLMargin: {
		marginLeft: MetricsSizes.xxLarge,
	},
	xxxLargeLMargin: {
		marginLeft: MetricsSizes.xxxLarge,
	},
	xSmallRMargin: {
		marginRight: MetricsSizes.xSmall,
	},
	smallRMargin: {
		marginRight: MetricsSizes.small,
	},
	regularRMargin: {
		marginRight: MetricsSizes.regular,
	},
	largeRMargin: {
		marginRight: MetricsSizes.large,
	},
	xLargeRMargin: {
		marginRight: MetricsSizes.xLarge,
	},
	xxLargeRMargin: {
		marginRight: MetricsSizes.xxLarge,
	},
	xxxLargeRMargin: {
		marginRight: MetricsSizes.xxxLarge,
	},

	xSmallVPadding: {
		paddingVertical: MetricsSizes.xSmall,
	},
	smallVPadding: {
		paddingVertical: MetricsSizes.small,
	},
	regularVPadding: {
		paddingVertical: MetricsSizes.regular,
	},
	largeVPadding: {
		paddingVertical: MetricsSizes.large,
	},
	xLargeVPadding: {
		paddingVertical: MetricsSizes.xLarge,
	},
	xxLargeVPadding: {
		paddingVertical: MetricsSizes.xxLarge,
	},
	xxxLargeVPadding: {
		paddingVertical: MetricsSizes.xxxLarge,
	},
	xSmallHPadding: {
		paddingHorizontal: MetricsSizes.xSmall,
	},
	smallHPadding: {
		paddingHorizontal: MetricsSizes.small,
	},
	regularHPadding: {
		paddingHorizontal: MetricsSizes.regular,
	},
	largeHPadding: {
		paddingHorizontal: MetricsSizes.large,
	},
	xLargeHPadding: {
		paddingHorizontal: MetricsSizes.xLarge,
	},
	xxLargeHPadding: {
		paddingHorizontal: MetricsSizes.xxLarge,
	},
	xxxLargeHPadding: {
		paddingHorizontal: MetricsSizes.xxxLarge,
	},
	xSmallTPadding: {
		paddingTop: MetricsSizes.xSmall,
	},
	smallTPadding: {
		paddingTop: MetricsSizes.small,
	},
	regularTPadding: {
		paddingTop: MetricsSizes.regular,
	},
	largeTPadding: {
		paddingTop: MetricsSizes.large,
	},
	xLargeTPadding: {
		paddingTop: MetricsSizes.xLarge,
	},
	xxLargeTPadding: {
		paddingTop: MetricsSizes.xxLarge,
	},
	xxxLargeTPadding: {
		paddingTop: MetricsSizes.xxxLarge,
	},
	xSmallBPadding: {
		paddingBottom: MetricsSizes.xSmall,
	},
	smallBPadding: {
		paddingBottom: MetricsSizes.small,
	},
	regularBPadding: {
		paddingBottom: MetricsSizes.regular,
	},
	largeBPadding: {
		paddingBottom: MetricsSizes.large,
	},
	xLargeBPadding: {
		paddingBottom: MetricsSizes.xLarge,
	},
	xxLargeBPadding: {
		paddingBottom: MetricsSizes.xxLarge,
	},
	xxxLargeBPadding: {
		paddingBottom: MetricsSizes.xxxLarge,
	},
	xSmallLPadding: {
		paddingLeft: MetricsSizes.xSmall,
	},
	smallLPadding: {
		paddingLeft: MetricsSizes.small,
	},
	regularLPadding: {
		paddingLeft: MetricsSizes.regular,
	},
	largeLPadding: {
		paddingLeft: MetricsSizes.large,
	},
	xLargeLPadding: {
		paddingLeft: MetricsSizes.xLarge,
	},
	xxLargeLPadding: {
		paddingLeft: MetricsSizes.xxLarge,
	},
	xxxLargeLPadding: {
		paddingLeft: MetricsSizes.xxxLarge,
	},
	xSmallRPadding: {
		paddingRight: MetricsSizes.xSmall,
	},
	smallRPadding: {
		paddingRight: MetricsSizes.small,
	},
	regularRPadding: {
		paddingRight: MetricsSizes.regular,
	},
	largeRPadding: {
		paddingRight: MetricsSizes.large,
	},
	xLargeRPadding: {
		paddingRight: MetricsSizes.xLarge,
	},
	xxLargeRPadding: {
		paddingRight: MetricsSizes.xxLarge,
	},
	xxxLargeRPadding: {
		paddingRight: MetricsSizes.xxxLarge,
	},
	xSmallPadding: {
		padding: MetricsSizes.xSmall,
	},
	smallPadding: {
		padding: MetricsSizes.small,
	},
	regularPadding: {
		padding: MetricsSizes.regular,
	},
	largePadding: {
		padding: MetricsSizes.large,
	},
	xLargePadding: {
		padding: MetricsSizes.xLarge,
	},
	xxLargePadding: {
		padding: MetricsSizes.xxLarge,
	},
	xxxLargePadding: {
		padding: MetricsSizes.xxxLarge,
	},
})

export default commonStyles
