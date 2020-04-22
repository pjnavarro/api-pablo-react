import React, {Component} from 'react';
import {connect}from 'react-redux'

import Title from '../components/Title';
import Table from '../components/Table';

import {fetchPersonsRequested} from '../actions/persons';

class Persons extends Component { 
  async componentDidMount(){
    this.props.requestPersons();
  }

  render() {
    const {headers, documents} = this.props;
    return (
      <div className="Persons">
        <header className="persons-header">
          
            <Title title="Hello Persons" />
         
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
    headers: state.persons.headers,
    documents: state.persons.persons 
});

const mapDispatchToProps = dispatch => ({
  requestPersons: () => dispatch(fetchPersonsRequested())
})

export default connect(mapStateToProps, mapDispatchToProps)(Persons);