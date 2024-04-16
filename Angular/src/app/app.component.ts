import { Component, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { Service } from './app.service';

declare var __moduleName: string;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  moduleId: __moduleName,
  providers: [Service],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  dataSource: DataSource;

  collapsed = false;

  contentReady = (e: DxDataGridTypes.ContentReadyEvent) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(['EnviroCare']);
    }
  };

  customizeTooltip = ({ originalValue }: Record<string, string>) => ({ text: `${parseInt(originalValue)}%` });

  constructor(service: Service) {
    this.dataSource = service.getDataSource();
  }
}
