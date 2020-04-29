import React, {Component} from 'react';
import {connect} from 'react-redux';
import {InputText} from '../../components/Forms';

import {
    updateCars,
    submitCarRequested
} from '../../actions/cars'


class Edit extends Component {

    handleChange(obj){
        const {car} = this.props;
        Object.assign(car, obj);
        this.props.updateCar(car);
        this.forceUpdate();
    }
    render(){
        const {
            car: {
                name,
                code
                
            }
        } = this.props;
        return(
            <div>
                <h1> Edicion de auto</h1>
                <br/>
                <InputText
                    key= "name"
                    label="Marca: "
                    value= {name}
                    onChange= {({target: {value}}) => this.handleChange({name: value})}
                />
                 <br/>
                <InputText
                    key= "code"
                    label="Modelo: "
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
    car: state.cars.currentCars
});

const mapDispactchToProps = dispatch => ({
    updateCar: car => dispatch(updateCars(car)),
    submit: () => dispatch (submitCarRequested())
})

export default connect (
    mapStateToProps,
    mapDispactchToProps
)(Edit);


