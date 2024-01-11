import { Component, inject } from '@angular/core';
import { LoadingService } from '../../loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  public _loadingService = inject(LoadingService);

}
