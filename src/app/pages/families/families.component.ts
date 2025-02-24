import { Component } from '@angular/core';

@Component({
  selector: 'app-families',
  standalone: false,
  templateUrl: './families.component.html',
  styleUrl: './families.component.scss'
})
export class FamiliesComponent {

  selectedTabIndex: number = 0;

  constructor() {
  }

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


  province: any = [
    {
      id: 1,
      name: 'Luanda',
    },
    {
      id: 2,
      name: 'Benguela',
    }
  ]


  submitButtonOptions = {
    text: "Salvar",
    useSubmitBehavior: true
  }

  individuals: any = [];

  isAddContactPopupOpened = false;
  isAddMemberPopupOpened = false;

  addMember() {
    this.isAddMemberPopupOpened = true;
  }

}
