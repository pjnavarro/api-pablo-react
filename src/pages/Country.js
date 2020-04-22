import React, {Component} from 'react';
import {connect}from 'react-redux'

import Title from '../components/Title';
import Table from '../components/Table';

import {fetchCountryRequested} from '../actions/country';

class Country extends Component { 
  async componentDidMount(){
    this.props.requestCountry();
  }

  render() {
    const {headers, documents} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          
            <Title title="Hello Country" />
         
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
    headers: state.country.headers,
    documents: state.country.countries 
});

const mapDispatchToProps = dispatch => ({
  requestCountry: () => dispatch(fetchCountryRequested())
})

export default connect(mapStateToProps, mapDispatchToProps)(Country);