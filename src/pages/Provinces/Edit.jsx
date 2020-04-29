import React, {Component} from 'react';
import {connect} from 'react-redux';
import {InputText} from '../../components/Forms';

import {
    updateProvinces,
    submitProvinceRequested
} from '../../actions/provinces'


class Edit extends Component {

    handleChange(obj){
        const {province} = this.props;
        Object.assign(province, obj);
        this.props.updateProvince(province);
        this.forceUpdate();
    }
    render(){
        const {
            province: {
                 name,
                 code
            }
        } = this.props;
        return(
            <div>
                <h1> Edicion de provincia</h1>
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
    province: state.provinces.currentProvinces
});

const mapDispactchToProps = dispatch => ({
    updateProvince: province => dispatch(updateProvinces(province)),
    submit: () => dispatch (submitProvinceRequested())
})

export default connect (
    mapStateToProps,
    mapDispactchToProps
)(Edit);