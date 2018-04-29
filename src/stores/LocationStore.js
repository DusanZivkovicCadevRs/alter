import LocationActions from '../actions/LocationActions'
import alt from '../alt';

class LocationStore {
  constructor() {
    this.locations = []

    this.handleUpdateLocations = (locations) => {
      if (locations) {
        this.locations = locations
      } else {
        return false
      }
    }

    this.bindListeners({
      handleUpdateLocations: LocationActions.UPDATE_LOCATIONS
    })
  }
}

export default alt.createStore(LocationStore, 'LocationStore')