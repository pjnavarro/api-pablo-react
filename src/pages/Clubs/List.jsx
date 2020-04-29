import React, {Component} from 'react';
import {connect}from 'react-redux'
import {Link} from 'react-router-dom';

import Title from '../../components/Title';
import Table from '../../components/Table';

import {fetchClubsRequested} from '../../actions/clubs';

class Clubs extends Component { 
  async componentDidMount(){
    this.props.requestClubs();
  }

  render() {
    const {headers, documents} = this.props;
    return (
      <div className="Clubs">
        <header className="clubs-header">
          
            <Title title="Clubes"/>
            <Link to= '/clubs/new'> Nuevo club </Link>
          <div>
            <Table {...{documents, headers, linkTo: '/clubs'}}/>
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
    headers: state.clubs.headers,
    documents: state.clubs.clubs 
});

const mapDispatchToProps = dispatch => ({
  requestClubs: () => dispatch(fetchClubsRequested())
})

export default connect(mapStateToProps, mapDispatchToProps)(Clubs);