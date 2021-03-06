import React, { useState } from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Slide from '@material-ui/core/Slide';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import AddIcon from '@material-ui/icons/AddCircle';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness3Icon from '@material-ui/icons/Brightness3';

export default withRouter(({ history }) => {
	const [darkMode, setDarkMode] = useState(false);

	let exitProgram = () => {
		confirmAlert({
			customUI: ({ onClose }) => {
				return (
					<div className='custom-ui alert-container'>
						<h1 class="h1 ">Você está saindo do Programa de Aproveitamentos</h1>
						<h4 class="h4 ">Tem certeza disso?</h4>
						<button class="btn btn-primary btn-alert "
							onClick={onClose}>Não, me enganei</button>
						<button
							class="mx-auto btn btn-danger btn-alert"
							onClick={() => {
								window.require('electron').remote.app.quit()
							}}
						>
							Sim, deixe-me sair!
					</button>
					</div>
				);
			}
		});
	}

	function switchDarklight() {
		setDarkMode(!darkMode);

		document.getElementById("App").classList.toggle("darkmode");
	}

	return (
		<nav class="opcoes fixed-top" style={{ zIndex: "99", display: 'flex', justifyContent: 'space-between' }}>
			<Slide in={true} direction="right">
				<ButtonGroup size="small" aria-label="small button group">

					<Tooltip title="VOLTAR">
						<Button onClick={() => { history.goBack(); }} variant="contained" size="large" color="primary" style={{ borderRadius: '0 0 0 0' }}>
							<ArrowBackIosRoundedIcon style={{ transform: 'scale(1.5)' }} />
						</Button>
					</Tooltip>
					<Tooltip title="INÍCIO">
						<Link to="/" style={{ color: 'white' }}>
							<Button variant="contained" size="large" color="primary" style={{ borderRadius: '0 0 0 0' }}>
								<HomeIcon style={{ transform: 'scale(1.5)' }} />
							</Button>
						</Link>
					</Tooltip>
					<Tooltip title="AJUDA">
						<Link to="/ajuda" target="_blank" style={{ color: 'white' }}>
							<Button variant="contained" size="large" color="primary" style={{ borderRadius: '0 0 0 0' }}>
								<HelpIcon style={{ transform: 'scale(1.5)' }} />
							</Button>
						</Link>
					</Tooltip>
					<Tooltip title="SOBRE">
						<Link to="/sobre" target="_blank" style={{ color: 'white' }}>
							<Button variant="contained" size="large" color="primary" style={{ borderRadius: '0 0 0 0' }}>
								<InfoIcon style={{ transform: 'scale(1.5)' }} />
							</Button>
						</Link>
					</Tooltip>
					<Tooltip title="ABRIR NOVA JANELA">
						<Link to="/" target="_blank" style={{ color: 'white' }}>
							<Button variant="contained" size="large" color="primary" style={{ borderRadius: '0 0 4px 0' }}>
								<AddIcon style={{ transform: 'scale(1.5)' }} />
							</Button>
						</Link>
					</Tooltip>
					<Tooltip title="SAIR">
						<Button onClick={exitProgram} size="large" variant="contained" color="secondary" style={{ borderRadius: '0 0 4px 0' }}>
							<MeetingRoomIcon style={{ transform: 'scale(1.5)' }} />
						</Button>
					</Tooltip>
				</ButtonGroup>
			</Slide>

			<Button size="large" variant="contained" color="primary" style={{ borderRadius: '0 0 0 4px' }} onClick={() => switchDarklight()}>
				{darkMode ? 
					<Brightness7Icon style={{ transform: 'scale(1.5)' }} /> :
					<Brightness3Icon style={{ transform: 'scale(1.5)' }} />
				}
			</Button>
		</nav>
	);
});