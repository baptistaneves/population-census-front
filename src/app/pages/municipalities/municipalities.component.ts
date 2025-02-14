import { Component, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-municipalities',
  standalone: false,
  templateUrl: './municipalities.component.html',
  styleUrl: './municipalities.component.scss'
})
export class MunicipalitiesComponent {

  @ViewChild(DxDataGridComponent, { static: true }) dataGrid: DxDataGridComponent;

    municipalities: any = [
      {
        id: 1,
        name: 'Talatona',
        provinceName: 'Luanda'
      },
      {
        id: 2,
        name: 'Rangel',
        provinceName: 'Luanda'
      },
      {
        id: 3,
        name: 'Cazenga',
        provinceName: 'Luanda'
      },
      {
        id: 4,
        name: 'Kilamba Kiaxi',
        provinceName: 'Luanda'
      },
      {
        id: 5,
        name: 'Viana',
        provinceName: 'Luanda'
      }
    ];

    provincesList = [
      { id: 1, name: 'Luanda' },
      { id: 2, name: 'Benguela' },
      { id: 3, name: 'Huambo' },
      { id: 4, name: 'Namibe' }
    ];

    provinceSelectOptions = {
      items: this.provincesList,
      displayExpr: 'name',
      valueExpr: 'id',
      placeholder: 'Selecione a Província'
    };

    submitButtonOptions = {
      text: "Salvar",
      useSubmitBehavior: true
    }

    isAddContactPopupOpened = false;

    constructor() {}

    addMunicipality() {
      this.isAddContactPopupOpened = true;
    };

    refresh = () => {
      this.dataGrid.instance.refresh();
    };

}
