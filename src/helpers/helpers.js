export function desde(fecharecibida) {
	const MESES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const eldesde = fecharecibida;
	const lafecha = new Date(eldesde);

	const fecha = {
		ano: lafecha.getFullYear(),
		mes: MESES[lafecha.getMonth()].slice(0, 3),
		dia: lafecha.getDate(),
	};

	return `Joined ${fecha.dia} ${fecha.mes} ${fecha.ano}`;
}

export const rutaIMG = (nombre) => `/assets/svg/${nombre}.svg`;

export const existNetwork = function (param) {
	if ( param ) {
		return "siavailable";
	}
	return "notavailable";
};
