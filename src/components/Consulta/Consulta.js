import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import blocoIcon from "../../images/graduation-hat.svg";
import alunoIcon from "../../images/student.svg";
import professorIcon from "../../images/professor.svg";
import disciplineIcon from "../../images/discipline.svg";
import institutionIcon from "../../images/institution.svg";
import unitIcon from "../../images/unit.svg"; 
import courseIcon from "../../images/course.svg"; 
import cityIcon from "../../images/city.svg"; 
import {connect} from 'react-redux';
import ConsultaAluno from "./ConsultaAluno/ConsultaAluno";

class Consulta extends Component {

    state = {
        choosenType: null,
        renderedComponent: <></>
    }

    selectPage = (data) => {
        let renderedComponent;
        switch(data.value){
            case "stu":
                renderedComponent = <ConsultaAluno />;
                break;
            case "block":
                renderedComponent = <h1>Bloco de Aproveitamento</h1>;
                break;
            case "city":
                renderedComponent = <h1>Cidade</h1>;
                break;
            case "courses":
                renderedComponent = <h1>Curso</h1>;
                break;  
            case "discs":
                renderedComponent = <h1>Disciplina</h1>;
                break;
            case "insts":
                renderedComponent = <h1>Instituição</h1>;
                break;
            case "professors":
                renderedComponent = <h1>Professor</h1>;
                break;
            case "units":
                renderedComponent = <h1>Unidade de Lotação</h1>;
                break;
            default:
                renderedComponent = <></>
        }
        this.setState({
            choosenType: data,
            renderedComponent: renderedComponent
        })
    }
	
    render(){
        return(
            <Grow in={true}>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justify="space-between"
                    style={{ position:'absolute', top: '40px', minHeight: '85vh'}}
                >   
                    <Grid item>
                        <Typography>
                            <h1>Consultar Dados do Programa</h1>
                        </Typography>
                    </Grid>
                    
                    <Grid item>
                        <Link to="/consultaBloco">
                            <Button size="large" variant="contained" color="primary" style={{minWidth: '420px'}}>
                                <img src={blocoIcon} alt="blocoIcon" style={{marginRight:'10px', marginLeft: '-10px', width: '24px', height: "16.72px"}} />
                                Blocos de Aproveitamento
                            </Button>
                        </Link>
                    </Grid>
                    
                    <Grid item>
                        <Link to="/consultaDisciplina">
                            <Button size="large" variant="contained" color="primary" style={{minWidth: '420px'}}>
                                <img src={disciplineIcon} alt="disciplineIcon" style={{marginRight:'10px', marginLeft: '-10px', width: '24px', height: "24px"}} />
                                Disciplinas
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/consultaAluno">
                            <Button size="large" variant="contained" color="primary" style={{minWidth: '420px'}}>
                                <img src={alunoIcon} alt="alunoIcon" style={{marginRight:'10px', marginLeft: '-10px', width: '24px', height: "24.22px"}} />
                                Alunos
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/consultaInstituicao">
                            <Button size="large" variant="contained" color="primary" style={{minWidth: '420px'}}>
                                <img src={institutionIcon} alt="institutionIcon" style={{marginRight:'10px', marginLeft: '-10px', width: '24px', height: "23.98px"}} />
                                Instituições de Ensino
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/consultaProfessor">
                            <Button size="large" variant="contained" color="primary" style={{minWidth: '420px'}}>
                                <img src={professorIcon} alt="professorIcon" style={{marginRight:'10px', marginLeft: '-10px', width: '24px', height: "24px"}} />
                                Professores
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/consultaUnidade">
                            <Button size="large" variant="contained" color="primary" style={{minWidth: '420px'}}>
                                <img src={unitIcon} alt="unitIcon" style={{marginRight:'10px', marginLeft: '-10px', width: '24px', height: "24px"}} />
                                Unidades de Lotação
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/consultaCurso">
                            <Button size="large" variant="contained" color="primary" style={{minWidth: '420px'}}>
                                <img src={courseIcon} alt="courseIcon" style={{marginRight:'10px', marginLeft: '-10px', width: '24px', height: "32.86px"}} />
                                Cursos
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/consultaCidade">
                            <Button size="large" variant="contained" color="primary" style={{minWidth: '420px'}}>
                                <img src={cityIcon} alt="cityIcon" style={{marginRight:'10px', marginLeft: '-10px', width: '24px', height: "26.34px"}} />
                                Cidades
                            </Button>
                        </Link>
                    </Grid>
                    
                </Grid>
            </Grow>
        );
    }
}

const mapStateToProps = state => {
    return{
    }
}

const mapDispatchToProps = dispatch => {
    return{
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Consulta);