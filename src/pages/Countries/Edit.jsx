import React, {Component} from 'react';
import {connect} from 'react-redux';
import {InputText} from '../../components/Forms';

import {
    updateCountries,
    submitCountryRequested
} from '../../actions/countries'


class Edit extends Component {

    handleChange(obj){
        const {country} = this.props;
        Object.assign(country, obj);
        this.props.updateCountry(country);
        this.forceUpdate();
    }
    render(){
        const {
            country: {
                 name,
                 code
            }
        } = this.props;
        return(
            <div>
                <h1> Edicion de paises</h1>
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
    country: state.countries.currentCountries
});

const mapDispactchToProps = dispatch => ({
    updateCountry: country => dispatch(updateCountries(country)),
    submit: () => dispatch (submitCountryRequested())
})

export default connect (
    mapStateToProps,
    mapDispactchToProps
)(Edit);


