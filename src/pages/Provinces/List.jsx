import React, {Component} from 'react';
import {connect}from 'react-redux'
import {Link} from 'react-router-dom';

import Title from '../../components/Title';
import Table from '../../components/Table';

import {fetchProvincesRequested} from '../../actions/provinces';

class Provinces extends Component { 
  async componentDidMount(){
    this.props.requestProvinces();
  }

  render() {
    const {headers, documents} = this.props;
    return (
      <div className="Provinces">
        <header className="provinces-header">
          
            <Title title="Provincias"/>
            <Link to= '/provinces/new'> Nueva provincia </Link>
          <div>
            <Table {...{documents, headers, linkTo: '/provinces'}}/>
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
    headers: state.provinces.headers,
    documents: state.provinces.provinces 
});

const mapDispatchToProps = dispatch => ({
  requestProvinces: () => dispatch(fetchProvincesRequested())
})

export default connect(mapStateToProps, mapDispatchToProps)(Provinces);