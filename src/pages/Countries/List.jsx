import React, {Component} from 'react';
import {connect}from 'react-redux'

import Title from '../../components/Title';
import Table from '../../components/Table';
import {Link} from 'react-router-dom'
import {fetchCountriesRequested} from '../../actions/countries';

class Countries extends Component { 
  async componentDidMount(){
    this.props.requestCountries();
  }

  render() {
    const {headers, documents} = this.props;
    return (
      <div className="countries">
        <header className="countries-header">
          
            <Title title="Paises" />
            <Link to= '/countries/new'> Nueva pais </Link>
          <div>
            <Table {...{documents, headers}}/>
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
  headers: state.countries.headers,
  documents: state.countries.countries
});

const mapDispatchToProps = dispatch => ({
requestCountries: () => dispatch(fetchCountriesRequested())
})

export default connect(mapStateToProps, mapDispatchToProps)(Countries);