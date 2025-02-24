import { Component, ViewChild, OnInit } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';

import * as DevExpress from 'devextreme/localization';
import { Province } from '../../models/province';
import { ProvinceService } from '../../services/province.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import notify from 'devextreme/ui/notify';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';

import { Workbook } from 'exceljs';
import saveAs from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';

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
export class ProvincesComponent implements OnInit {

  @ViewChild(DxDataGridComponent, { static: true }) dataGrid: DxDataGridComponent;

  province: Province;
  provinces: Province[] = [];

  errors: any[] = [];

  provinceForm: FormGroup;
  updateProvinceForm: FormGroup;

  submitButtonOptions = {
    text: 'Salvar',
    useSubmitBehavior: true,
    onClick: () => this.saveProvince(),
  };

  updateButtonOptions = {
    text: 'Atualizar',
    useSubmitBehavior: true,
    onClick: () => this.updateProvince(),
  };

  isAddProvincePopupOpened = false;
  isUpdateProvincePopupOpened = false;

  constructor(private provinceService: ProvinceService,
              private fb: FormBuilder,
              private toastr: ToastrService) {}

  ngOnInit(): void {
    this.listProvinces();
    this.initializeForm();
    this.initializeUpdateForm();
  }

  initializeForm() {
    this.provinceForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  initializeUpdateForm() {
    this.updateProvinceForm = this.fb.group({
      id: [],
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  fillUpdateForm(province: Province) {
    this.updateProvinceForm.patchValue({
      id: province.id,
      name: province.name
    });
  }

  onFieldDataChanged(event: any) {
    const { dataField, value } = event;
    if (this.provinceForm.contains(dataField)) {
      this.provinceForm.get(dataField)?.setValue(value);
      this.provinceForm.get(dataField)?.markAsTouched();
    }
  }

  onFieldDataChangedUpdateForm(event: any) {
    const { dataField, value } = event;
    if (this.updateProvinceForm.contains(dataField)) {
      this.updateProvinceForm.get(dataField)?.setValue(value);
      this.updateProvinceForm.get(dataField)?.markAsTouched();
    }
  }


  listProvinces() {
    this.provinceService.getAll()
     .subscribe(response => {
      this.provinces = response;
    })
  }

  saveProvince() {
    if(this.provinceForm.valid) {
      this.province = Object.assign({}, this.province, this.provinceForm.value);

      this.provinceService.add(this.province)
            .subscribe(
              sucesso => { this.handleSuccess('Província cadastrada com sucesso!') },
              erros => { this.handleFail(erros, 'Erro ao cadastrar província') }
            );
    }
  }

  updateProvince() {
    if(this.updateProvinceForm.valid) {
      this.province = Object.assign({}, this.province, this.updateProvinceForm.value);

      this.provinceService.update(this.province)
            .subscribe(
              sucesso => { this.handleSuccess('Província atualizada com sucesso!') },
              erros => { this.handleFail(erros, 'Erro ao atualizar província') }
            );
    }
    else
      alert('invalido');
  }

  onDeleteProvince(event: any) {
    const provinceId = event.data.id;
    if (provinceId) {
      this.provinceService.remove(provinceId).subscribe(
        sucesso => { this.handleSuccess('Província eliminada com sucesso!') },
        errors => { this.handleFail(errors, 'Erro ao eliminar província') })
    }
  }

  openPopup() {
    this.isAddProvincePopupOpened = true;
  }

  openUpdateFormPopup = (e: DxDataGridTypes.ColumnButtonClickEvent) => {
    const rowData = e.row!.data;
    const rowIndex = e.row!.rowIndex;

    this.province = { ...rowData };

    this.fillUpdateForm(this.province);

    this.isUpdateProvincePopupOpened = true;

    e.event!.preventDefault();
  };

  closePopup() {
    this.isAddProvincePopupOpened = false;
  }

  closeUpdateFormPopup() {
    this.isUpdateProvincePopupOpened = false;
  }

  refresh = () => {
    this.listProvinces();
  };

  handleSuccess(message: string) {
    this.provinceForm.dirty;
    this.errors = [];
    this.closePopup();
    this.closeUpdateFormPopup();
    this.showMessage(message, 'success');
    this.listProvinces();
  }

  handleFail(errors: any, message: string) {
    this.errors = [errors.error];
    this.showMessage(message, 'error');
  }

  showMessage(message: string, type: string) {
    notify(
        {
            message: message,
            width: 230,
            position: {
                at: "bottom",
                my: "bottom",
                of: "#container"
            }
        },
        type,
        1000
    );
  }


  exportGrid(e) {
    if (e.format === 'xlsx') {
        const workbook = new Workbook();
        const worksheet = workbook.addWorksheet("Main sheet");
        exportDataGrid({
            worksheet: worksheet,
            component: e.component,
        }).then(function() {
            workbook.xlsx.writeBuffer().then(function(buffer) {
                saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx");
            });
        });
    }
    else if (e.format === 'pdf') {
        const doc = new jsPDF();
        exportDataGridToPdf({
            jsPDFDocument: doc,
            component: e.component,
        }).then(() => {
            doc.save('DataGrid.pdf');
        });
    }
}

}


