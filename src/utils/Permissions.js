import { Alert, PermissionsAndroid } from 'react-native';

export const getStoragePermission = async () => {
	let permissions = await PermissionsAndroid.requestMultiple(
		[
			PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
			PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
		],
		{
			title: 'FonicoLite Permiso de almacenamiento',
			message: 'FonicoLite necesita acceder a su almacenamiento'
		}
	);

	if (permissions['android.permission.READ_EXTERNAL_STORAGE'] === 'granted') {
		return;
	} else {
		Alert.alert(
			'Permisos requeridos',
			'Permite a FonicoLite acceder a tu almacenamiento',
			[{ text: 'OK', onPress: async () => await getStoragePermission() }],
			{ cancelable: false }
		);
	}
};

export const checkStoragePermissions = async () => {
	let granted = await PermissionsAndroid.check(
		PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
	);
	return granted;
};
