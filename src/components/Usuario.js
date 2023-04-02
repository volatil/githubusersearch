import { desde, rutaIMG, existNetwork } from "../helpers/helpers";

function usuario(props) {
	return (
		<section id="usuario" className="bloque">
			<div className="principal">
				<div className="imagen">
					<img src={props.data.avatar_url} alt={props.data.name} />
				</div>
				<div className="dataPrincipal">
					<h2>{props.data.name}</h2>
					<p className="arroba">@{props.data.login}</p>
					<p className="desde">{desde(props.data.created_at)}</p>
				</div>
			</div>
			<div className="informacion">
				<div className="bio">
					<p>{props.data.bio || "No bio"}</p>
				</div>
				<div className="focus numeros">
					<div>
						<p className="titulo">Repos</p>
						<p className="numero">{props.data.public_repos}</p>
					</div>
					<div>
						<p className="titulo">Followers</p>
						<p className="numero">{props.data.followers}</p>
					</div>
					<div>
						<p className="titulo">Following</p>
						<p className="numero">{props.data.following}</p>
					</div>
				</div>
				<div className="redes">
					<div>
						<img src={rutaIMG("pin")} alt="pin" />
						<p className={existNetwork(props.data.location)}>{props.data.location || "Not Available"}</p>
					</div>
					<div>
						<img src={rutaIMG("web")} alt="web" />
						<p className={existNetwork(props.data.blog)}>{props.data.blog || "Not Available"}</p>
					</div>
					<div>
						<img src={rutaIMG("twitter")} alt="twitter" />
						<p className={existNetwork(props.data.twitter_username)}>{props.data.twitter_username || "Not Available"}</p>
					</div>
					<div>
						<img src={rutaIMG("company")} alt="company" />
						<p className={existNetwork(props.data.company)}>{props.data.company || "Not Available"}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
export default usuario;
