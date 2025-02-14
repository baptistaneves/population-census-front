import { Component, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';

import * as DevExpress from 'devextreme/localization';

DevExpress.loadMessages({
  "pt": {
    "Yes": "Sim",
    "No": "Não"
  }
});

DevExpress.locale("pt");

@Component({
  selector: 'app-provinces',
  standalone: false,
  templateUrl: './provinces.component.html',
  styleUrl: './provinces.component.scss'
})
export class ProvincesComponent {

  @ViewChild(DxDataGridComponent, { static: true }) dataGrid: DxDataGridComponent;

  province: any = [
    {
      id: 1,
      name: 'Luanda',
    },
    {
      id: 2,
      name: 'Benguela',
    },
    {
      id: 3,
      name: 'Uíge',
    },
    {
      id: 4,
      name: 'Huambo',
    },
    {
      id: 5,
      name: 'Huila',
    }
  ]


  submitButtonOptions = {
    text: "Salvar",
    useSubmitBehavior: true
  }

  isAddContactPopupOpened = false;

  constructor() {}

  addContact() {
    this.isAddContactPopupOpened = true;
  };

  refresh = () => {
    this.dataGrid.instance.refresh();
  };

}


