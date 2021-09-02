import React, { useEffect } from 'react';
import { TouchableOpacity, Linking } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { repoUrl } from '../constants/urls';
import { contrastColor, contrastTransColor, foregroundColor } from '../themes/styles';

function AboutScreen(props) {
	useEffect(() => {
		let unsubscribe = props.navigation.addListener('focus', props.hideFooter);
		return unsubscribe;
	}, [props.navigation]);

	return (
		<Wrapper>
			<Heading>FonicoLite</Heading>
			<DetailTrans>Version 0.0.1</DetailTrans>
			<Heading>Developed by</Heading>
			<DetailTrans>Marcelo Roldán</DetailTrans>
			<Detail>Source code adapted from available GNU GPL</Detail>
			<TouchableOpacity onPress={() => Linking.openURL(repoUrl)}>
				<Link>Github</Link>
			</TouchableOpacity>
		</Wrapper>
	);
}

export default connect(
	null,
	actions
)(AboutScreen);

const Wrapper = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const Heading = styled.Text`
	font-family: 'ProductSans';
	font-size: 18px;
	margin-bottom: 8px;
	color: ${contrastColor};
`;

const DetailTrans = styled.Text`
	font-family: 'ProductSans';
	font-size: 16px;
	margin-bottom: 40px;
	color: ${contrastTransColor(0.75)};
`;

const Link = styled.Text`
	font-family: 'ProductSansBold';
	font-size: 16px;
	margin-bottom: 40px;
	color: ${foregroundColor};
`;

const Detail = styled.Text`
	font-family: 'ProductSans';
	font-size: 16px;
	margin-bottom: 10px;
	color: ${contrastColor};
`;
