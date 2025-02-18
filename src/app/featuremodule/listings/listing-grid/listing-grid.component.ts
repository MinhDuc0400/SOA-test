import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import { listingGrid } from 'src/app/shared/models/listing-grid.model';

@Component({
  selector: 'app-listing-grid',
  templateUrl: './listing-grid.component.html',
  styleUrls: ['./listing-grid.component.css'],
})
export class ListingGridComponent {
  public routes = routes;
  public Bookmark: listingGrid[] = [];

  constructor(private Dataservice: DataService) {
    this.Bookmark = this.Dataservice.bookmarkList;
  }
}
