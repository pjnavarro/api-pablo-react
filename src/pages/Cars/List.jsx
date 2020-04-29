import React, {Component} from 'react';
import {connect}from 'react-redux'
import {Link} from 'react-router-dom';

import Title from '../../components/Title';
import Table from '../../components/Table';

import {fetchCarsRequested} from '../../actions/cars';

class Cars extends Component { 
  async componentDidMount(){
    this.props.requestCars();
  }

  render() {
    const {headers, documents} = this.props;
    return (
      <div className="Cars">
        <header className="cars-header">
          
            <Title title="Autos"/>
            <Link to= '/cars/new'> Nuevo auto </Link>
          <div>
            <Table {...{documents, headers, linkTo: '/cars'}}/>
          </div>
        </header>
      </div>
    );
  }
}



//mapStateToProps <<<<  todo el state del store esta aca, tomamos el store >>> Component como Props
//mapDdispatchToProps <<< todas las acciones que vamos a ejecutar o llamar >>> Component como Props
//mergeProps <<< funciona accion y propiedades onChange


const mapStateToProps = state => ({
    headers: state.cars.headers,
    documents: state.cars.cars 
});

const mapDispatchToProps = dispatch => ({
  requestCars: () => dispatch(fetchCarsRequested())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cars);