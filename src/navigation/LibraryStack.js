import React from 'react';
import { withTheme } from 'styled-components/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Library from '../screens/Library';
import PlaylistsScreen from '../screens/PlaylistsScreen';
import ArtistsScreen from '../screens/ArtistsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import FoldersScreen from '../screens/FoldersScreen';
import ShowPlaylistScreen from '../screens/ShowPlaylistScreen';
import ShowContentScreen from '../screens/ShowContentScreen';
import AboutScreen from '../screens/AboutScreen';
import Icon from '../components/Icon';

const durationSpec = { config: { duration: 200 } };

function LibraryStack(props) {
	const Stack = createStackNavigator();
	const { background, contrast } = props.theme;

	const screenOptions = {
		...TransitionPresets.ScaleFromCenterAndroid,
		transitionSpec: {
			open: durationSpec,
			close: durationSpec
		},
		headerStyle: {
			elevation: 0,
			backgroundColor: background
		},
		headerTitleStyle: {
			fontFamily: 'Circular',
			fontWeight: '400',
			fontSize: 18,
			color: contrast,
			marginLeft: 30,
			marginRight: 30
		},
		headerTitleAlign: 'center',
		headerBackImage: () => <Icon name="chevron-left" type="feather" color={contrast} size={26} />
	};

	const headerTitle = ({ route }) => ({ title: route.params.title });

	return (
		<Stack.Navigator headerMode="screen" screenOptions={screenOptions}>
			<Stack.Screen name="library" component={Library} options={{ title: 'Su librería' }} />
			<Stack.Screen
				name="playlists"
				component={PlaylistsScreen}
				options={{ title: 'Playlists' }}
			/>
			<Stack.Screen name="artists" component={ArtistsScreen} options={{ title: 'Artistas' }} />
			<Stack.Screen name="albums" component={AlbumsScreen} options={{ title: 'Albumes' }} />
			<Stack.Screen name="folders" component={FoldersScreen} options={{ title: 'Carpetas' }} />
			<Stack.Screen name="playlist" component={ShowPlaylistScreen} options={headerTitle} />
			<Stack.Screen name="content" component={ShowContentScreen} options={headerTitle} />
			<Stack.Screen name="about" component={AboutScreen} options={{ title: 'Acerca' }} />
		</Stack.Navigator>
	);
}

export default withTheme(LibraryStack);
