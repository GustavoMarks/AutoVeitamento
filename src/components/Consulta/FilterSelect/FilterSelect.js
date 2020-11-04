import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Select from 'react-select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import "./FilterSelect.css";

/**
 * @param {String} props.id Identificador único do campo de data
 * @param {String} props.desc Descrição do filtro
 * @param {String} props.value Valor do campo de filtro
 * @param {String} props.toggle Valor do ativador (checkbox)
 * @param {String} props.onToggle Função para ativar ou desativar o filtro
 * @param {String} props.onChange Função para registrar alterações no campo
 * @param {String} props.placeholder Placeholder do campo de seleção
 * @param {String} props.options Opções do select
 */

export default function FilterSelect(props){

	return(
		<div className="filterSelectContainer">
				<FormControlLabel
					disabled={props.value == null}
					control={<Checkbox
						checked={props.toggle}
						onChange={e => props.onToggle(e.target.checked)}
						color="primary"
						inputProps={{
						'aria-label': 'primary checkbox',
						}}
					/>}
					label={props.desc}
				/>
                <Select
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={(inputValue)=>{
						if(!props.toggle)
							props.onToggle(true)
						props.onChange(inputValue)
					}}
                    options={props.options}
                />
		</div>
	);

}
