import { useState, useEffect } from "react";

import Head from "next/head";
// import Image from "next/image";
import { Inter } from "next/font/google";

import Usuario from "../components/Usuario";
import Header from "../components/Header";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [getusuario, setgetusuario] = useState(false);

	async function fetchGithub(usuario) {
		// USERS
		// volatil
		// bossa
		// HiDAl
		// pfarinav
		// JSConfCL
		// octocat
		let url = "https://api.github.com/users/volatil";
		if ( usuario ) {
			url = `https://api.github.com/users/${usuario}`;
		}
		const response = await fetch(url);
		const datausuario = await response.json();
		return datausuario;
	}

	useEffect(() => {
		fetchGithub("volatil").then((x) => {
			setgetusuario(x);
		});
	}, []);

	return (
		<>
			<Head>
				<title>DEVFinder</title>
				<meta name="description" content="Search Github Usernames" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Header />
				<section id="buscador" className="bloque">
					<form>
						<img src="/assets/svg/lupa.svg" alt="lupa" />
						<input disabled={false} required className="campo" type="text" placeholder="Search Github usarname..." />
						<button
							type="button"
							onClick={() => {
								const nombreusuario = document.getElementsByClassName("campo")[0].value;
								console.debug( `Nombre: ${nombreusuario}` );
								fetchGithub(nombreusuario).then((x) => {
									setgetusuario(x);
								});
							}}
						>Search
						</button>
					</form>
				</section>
				{ getusuario && <Usuario data={getusuario} /> }
			</main>
		</>
	);
}
