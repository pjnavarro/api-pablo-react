import React, {Component} from 'react';
import {connect} from 'react-redux';
import {InputText} from '../../components/Forms';

import {
    updateClubs,
    submitClubRequested
} from '../../actions/clubs'


class Edit extends Component {

    handleChange(obj){
        const {club} = this.props;
        Object.assign(club, obj);
        this.props.updateClub(club);
        this.forceUpdate();
    }
    render(){
        const {
            club: {
                 name,
                 code
            }
        } = this.props;
        return(
            <div>
                <h1> Edicion de club</h1>
                <br/>
                <InputText
                    key= "name"
                    label="Nombre: "
                    value= {name}
                    onChange= {({target: {value}}) => this.handleChange({name: value})}
                />
                 <br/>
                <InputText
                    key= "code"
                    label="Codigo: "
                    value= {code}
                    onChange= {({target: {value}}) => this.handleChange({code: value})}
                />
                <br/>
                <br/>
                <button
                    onClick= {() => this.props.submit()}
                >
                    Guardar
                </button>
                <br/>
                <br/>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    club: state.clubs.currentClubs
});

const mapDispactchToProps = dispatch => ({
    updateClub: club => dispatch(updateClubs(club)),
    submit: () => dispatch (submitClubRequested())
})

export default connect (
    mapStateToProps,
    mapDispactchToProps
)(Edit);


