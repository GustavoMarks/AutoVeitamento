import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {connect} from 'react-redux';
import SelectMulti from '../../DataReceivers/SelectMulti/SelectMulti';

/**
 * @param {String} props.id Identificador único do campo de data
 * @param {String} props.desc Descrição do filtro
 * @param {String} props.value Valor do campo de filtro
 * @param {String} props.toggle Valor do ativador (checkbox)
 * @param {String} props.onToggle Função para ativar ou desativar o filtro
 * @param {String} props.onChange Função para registrar alterações no campo
 * @param {String} props.placeholder Placeholder do campo de seleção
 * @param {String} props.options Opções do select
 * @param {String} props.excludedOptions Opções já selecionadas
 * @param {String} props.inst Instituição do bloco atual
 */

function FilterSelectMulti(props){
    
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
                <SelectMulti 
                    placeholder={props.placeholder}
                    value={props.value}
                    updateState={(data, callback)=>{
						if(!props.toggle)
							props.onToggle(true)
						if(data.length === 0)
							props.onToggle(false)
						props.onChange(data)
					}}
                    options={props.options}
                />
		</div>
	);

}

const mapStateToProps = state => {
	return {
		disciplinasData: state.databaseData.disciplinasData,
		blocosData: state.databaseData.blocosData
	}
}

export default connect(mapStateToProps, null)(FilterSelectMulti);
