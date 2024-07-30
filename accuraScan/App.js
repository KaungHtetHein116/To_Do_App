import * as React from 'react'

import AccurascanKyc from 'accurascan_kyc'
import { getResultJSON, showAlert } from './utils'

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Facematch = ({}) => {
	const [FirstFMImageURI, setFirstFMImageURI] = React.useState('')
	const [SecondFMImageURI, setSecondFMImageURI] = React.useState('')
	const [fmScore, setfmScore] = React.useState(0.0)

	const onPressFaceMatch1 = () => {
		var accuraConfs = {
			face1: FirstFMImageURI,
			face2: SecondFMImageURI,
		}
		var fconfig = {
			backGroundColor: '#FFC4C4C5',
			closeIconColor: '#FF000000',
			feedbackBackGroundColor: '#FFC4C4C5',
			feedbackTextColor: '#FF000000',
			setFeedbackTextSize: 18,
			setFeedBackframeMessage: 'Frame Your Face',
			setFeedBackAwayMessage: 'Move Phone Away',
			setFeedBackOpenEyesMessage: 'Keep Your Eyes Open',
			setFeedBackCloserMessage: 'Move Phone Closer',
			setFeedBackCenterMessage: 'Move Phone Center',
			setFeedbackMultipleFaceMessage: 'Multiple Face Detected',
			setFeedBackFaceSteadymessage: 'Keep Your Head Straight',
			setFeedBackLowLightMessage: 'Low light detected',
			setFeedBackBlurFaceMessage: 'Blur Detected Over Face',
			setFeedBackGlareFaceMessage: 'Glare Detected',
			setBlurPercentage: 80,
			setGlarePercentage_0: -1,
			setGlarePercentage_1: -1,
			feedbackDialogMessage: 'Loading...',
			feedBackProcessingMessage: 'Processing...',
			isShowLogo: 1,
		}
		let passArgs = [accuraConfs, fconfig]

		AccurascanKyc.startFaceMatch1(passArgs, (error, response) => {
			if (error != null) {
				console.log('Failure!', error)
				showAlert('Failure!', error)
			} else {
				const res = getResultJSON(response)
				setfmScore(res.score)
				setFirstFMImageURI(res.Image)
			}
		})
	}

	const onPressFaceMatch2 = () => {
		var accuraConfs = {
			face1: FirstFMImageURI,
			face2: SecondFMImageURI,
		}
		var fconfig = {
			backGroundColor: '#FFC4C4C5',
			closeIconColor: '#FF000000',
			feedbackBackGroundColor: '#FFC4C4C5',
			feedbackTextColor: '#FF000000',
			setFeedbackTextSize: 18,
			setFeedBackframeMessage: 'Frame Your Face',
			setFeedBackAwayMessage: 'Move Phone Away',
			setFeedBackOpenEyesMessage: 'Keep Your Eyes Open',
			setFeedBackCloserMessage: 'Move Phone Closer',
			setFeedBackCenterMessage: 'Move Phone Center',
			setFeedbackMultipleFaceMessage: 'Multiple Face Detected',
			setFeedBackFaceSteadymessage: 'Keep Your Head Straight',
			setFeedBackLowLightMessage: 'Low light detected',
			setFeedBackBlurFaceMessage: 'Blur Detected Over Face',
			setFeedBackGlareFaceMessage: 'Glare Detected',
			setBlurPercentage: 80,
			setGlarePercentage_0: -1,
			setGlarePercentage_1: -1,
			feedbackDialogMessage: 'Loading...',
			feedBackProcessingMessage: 'Processing...',
			isShowLogo: 1,
		}
		let passArgs = [accuraConfs, fconfig]

		AccurascanKyc.startFaceMatch2(passArgs, (error, response) => {
			if (error != null) {
				console.log('Failure!', error)
				showAlert('Failure!', error)
			} else {
				const res = getResultJSON(response)
				setfmScore(res.score)
				setSecondFMImageURI(res.Image)
			}
		})
	}

	const openGallery = () => {
		var accuraConfs = {
			face1: FirstFMImageURI,
			face2: SecondFMImageURI,
		}

		AccurascanKyc.openGallery1([accuraConfs], (error, response) => {
			if (error != null) {
				console.log('Failure!', error)
				showAlert('Failure!', error)
			} else {
				const res = getResultJSON(response)
				setfmScore(res.score)
				setFirstFMImageURI(res.Image)
			}
		})
	}

	const openGallery2 = () => {
		var accuraConfs = {
			face1: FirstFMImageURI,
			face2: SecondFMImageURI,
		}

		AccurascanKyc.openGallery2([accuraConfs], (error, response) => {
			if (error != null) {
				console.log('Failure!', error)
				showAlert('Failure!', error)
			} else {
				const res = getResultJSON(response)
				setfmScore(res.score)
				setSecondFMImageURI(res.Image)
			}
		})
	}

	return (
		<View style={{ flex: 1, padding: 20, backgroundColor: 'blue' }}>
			<View style={styles.modelFace}>
				<View
					style={{
						width: '100%',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'row',
					}}
				>
					<Image
						style={styles.faceImageView}
						source={
							FirstFMImageURI
								? { uri: FirstFMImageURI }
								: require('./assets/fm.png')
						}
					/>

					<Image
						style={[styles.faceImageView, { marginLeft: 50 }]}
						source={
							SecondFMImageURI
								? { uri: SecondFMImageURI }
								: require('./assets/fm.png')
						}
					/>
				</View>
				<View
					style={{
						width: '100%',
						alignItems: 'center',
						flexDirection: 'row',
						marginVertical: 10,
						justifyContent: 'space-around',
					}}
				>
					<TouchableOpacity
						style={{}}
						onPress={() => {
							onPressFaceMatch1()
						}}
					>
						<View style={styles.btnView}>
							<Image
								style={{ aspectRatio: 1, width: 18 }}
								source={require('./assets/cam.png')}
							/>
							<Text
								style={{
									color: 'white',
									fontSize: 15,
									marginLeft: 5,
								}}
							>
								Camera
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={{}}
						onPress={() => {
							onPressFaceMatch2()
						}}
					>
						<View style={styles.btnView}>
							<Image
								style={{ aspectRatio: 1, width: 18 }}
								source={require('./assets/cam.png')}
							/>
							<Text
								style={{
									color: 'white',
									fontSize: 15,
									marginLeft: 5,
								}}
							>
								Camera
							</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View
					style={{
						width: '100%',
						alignItems: 'center',
						flexDirection: 'row',
						marginVertical: 10,
						justifyContent: 'space-around',
					}}
				>
					<TouchableOpacity
						style={{}}
						onPress={() => {
							openGallery()
						}}
					>
						<View style={styles.btnView}>
							<Image
								style={{ aspectRatio: 1, width: 18 }}
								source={require('./assets/gallery.png')}
							/>
							<Text
								style={{
									color: 'white',
									fontSize: 15,
									marginLeft: 5,
								}}
							>
								Gallery
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={{}}
						onPress={() => {
							openGallery2()
						}}
					>
						<View style={styles.btnView}>
							<Image
								style={{ aspectRatio: 1, width: 18 }}
								source={require('./assets/gallery.png')}
							/>
							<Text
								style={{
									color: 'white',
									fontSize: 15,
									marginLeft: 5,
								}}
							>
								Gallery
							</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View
					style={{
						width: '100%',
						alignItems: 'center',
						flexDirection: 'row',
						marginBottom: 10,
						justifyContent: 'space-around',
					}}
				>
					<Text
						style={{
							fontSize: 15,
							fontWeight: 'bold',
							color: '#000000',
						}}
					>
						{fmScore != null
							? parseInt(fmScore).toFixed(2) + '%'
							: '0.00%'}
					</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	modelFace: {
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	faceImageView: {
		height: 140,
		width: 100,
		borderRadius: 10,
		backgroundColor: 'lightgrey',
	},
	btnView: {
		flexDirection: 'row',
		backgroundColor: '#d22c39',
		width: 130,
		paddingVertical: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
})

export default Facematch
