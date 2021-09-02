import { Alert, Linking } from 'react-native';

export default function (e) {
	Alert.alert(
		'¡Epa! ocurrió un error',
		'¿Envío el listado de errores a los desarrolladores?',
		[{ text: 'Enviar', onPress: () => mailError(e) }],
		{ cancelable: true }
	);
}

function mailError(e) {
	Linking.openURL(
		`mailto:conect2000@hotmail.com?subject=FonicoLite error log&body=LOG\n\n${JSON.stringify(
			e
		)}`
	);
}
