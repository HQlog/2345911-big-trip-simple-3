import { render } from '../render';
import TripEventsListView from '../view/TripEventsListView';
import TripEventsSortingView from '../view/TripEventsSortingView';
import TripEventView from '../view/TripEventView';

class TripPresenter {
  tripListComponent = new TripEventsListView();

  init(container, tripModel) {
    this.container = container;
    this.tripModel = tripModel;
    this.tripEventsData = tripModel.getTripEvents();
    console.log('Trip Events: ', this.tripEventsData); // Debug information. Will delete soon

    render(new TripEventsSortingView(), this.container);
    render(this.tripListComponent, this.container);

    for (let i = 0; i < this.tripEventsData.length; i++) {
      const tripData = this.tripEventsData[i];
      const tripEvent = new TripEventView(tripData);
      this.tripListComponent.addComponent(tripEvent);
    }
  }
}

export default TripPresenter;
