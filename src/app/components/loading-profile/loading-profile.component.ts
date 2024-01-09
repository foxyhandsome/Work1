import { Component, inject } from '@angular/core';
import { LoadingService } from 'src/app/shared/interceptor/loading.service';

@Component({
  selector: 'app-loading-profile',
  templateUrl: './loading-profile.component.html',
  styleUrls: ['./loading-profile.component.css']
})
export class LoadingProfileComponent {
  public _loadingService = inject(LoadingService);
  
}
