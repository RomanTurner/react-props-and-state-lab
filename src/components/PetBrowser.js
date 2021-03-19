import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {


  render() {
   let petArr = this.props.pets
    return petArr.map((pet) => (
      <div key={pet.id} className="ui cards">
        <Pet
          onAdoptPet={this.props.onAdoptPet}
          petInfo={pet} />
      </div>
    ));
  }
  
  
}

export default PetBrowser
