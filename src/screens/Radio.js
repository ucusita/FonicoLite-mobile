import React, { useState } from 'react';
import styled from 'styled-components/native';
import MapView, { Marker } from 'react-native-maps';
import {stations} from '../../assets/stations.js';

function Radio(props) {
	// alert (stations);
	function renderMarker(station, i) {
		return (
			<Marker
				coordinate={{ longitude: station.latitude, latitude: station.longitude }}
				key={i}
				tracksViewChanges={false}
				zIndex={5}>
				<StationMarker />
			</Marker>
		);
	}

	return (
		<MapView style={{ flex: 1 }} minZoomLevel={5}>
			{stations.map((station, i) => renderMarker(station, i))}
		</MapView>
	);
}

export default Radio;

const StationMarker = styled.View`
	height: 4px;
	width: 4px;
	background-color: black;
`;
