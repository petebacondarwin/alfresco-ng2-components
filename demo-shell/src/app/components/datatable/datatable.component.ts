/*!
 * @license
 * Copyright 2019 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, Input } from '@angular/core';
import { DataColumn, DataRow } from '@alfresco/adf-core';
import { DataCellEvent, DataRowActionEvent, DataSorting, ObjectDataColumn, ObjectDataRow, ObjectDataTableAdapter } from '@alfresco/adf-core';

export class FilteredDataAdapter extends ObjectDataTableAdapter {

    filterValue = '';
    filterKey = 'name';

    getRows(): Array<DataRow> {
        let rows = super.getRows();
        const filter = (this.filterValue || '').trim().toLowerCase();

        if (this.filterKey && filter) {
            rows = rows.filter((row) => {
                const value = row.getValue(this.filterKey);
                if (value !== undefined && value !== null) {
                    const stringValue: string = value.toString().trim().toLowerCase();
                    return stringValue.startsWith(filter);
                }
                return false;
            });
        }
        return rows;
    }

    constructor(data?: any[], schema?: DataColumn[]) {
        super(data, schema);
    }
}

@Component({
    selector: 'app-datatable',
    templateUrl: './datatable.component.html'
})
export class DataTableComponent {

    multiselect = false;
    data: FilteredDataAdapter;
    stickyHeader = false;

    @Input()
    selectionMode = 'single';

    selectionModes = [
        { value: 'none', viewValue: 'None' },
        { value: 'single', viewValue: 'Single' },
        { value: 'multiple', viewValue: 'Multiple' }
    ];

    private _imageUrl = 'http://placehold.it/140x100';
    private _createdBy: any = {
        name: 'Administrator',
        email: 'admin@alfresco.com'
    };

    constructor() {
        this.reset();
    }

    /* spellchecker: disable */
    reset() {
        this.data = new FilteredDataAdapter(
            [
                {
                    id: 1,
                    name: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                    createdOn: new Date(2016, 6, 2, 15, 8, 1),
                    createdBy: this._createdBy,
                    icon: 'material-icons://folder_open',
                    json: null
                },
                {
                    id: 2,
                    name: 'Name 2',
                    createdOn: new Date(2016, 6, 2, 15, 8, 2),
                    createdBy: this._createdBy,
                    icon: 'material-icons://accessibility',
                    json: null
                },
                {
                    id: 3,
                    name: 'Name 3',
                    createdOn: new Date(2016, 6, 2, 15, 8, 3),
                    createdBy: this._createdBy,
                    icon: 'material-icons://alarm',
                    json: null
                },
                {
                    id: 4,
                    name: 'Image 8',
                    createdOn: new Date(2016, 6, 2, 15, 8, 4),
                    createdBy: this._createdBy,
                    icon: 'material-icons://alarm',
                    json: {
                        id: 4,
                        name: 'Image 8',
                        createdOn: new Date(2016, 6, 2, 15, 8, 4),
                        createdBy: {
                            name: 'Felipe',
                            lastname: 'Melo'
                        },
                        icon: 'material-icons://alarm'
                    }
                }
            ],
            [
                { type: 'image', key: 'icon', title: '', srTitle: 'Thumbnail' },
                { type: 'text', key: 'id', title: 'Id', sortable: true , cssClass: '' },
                { type: 'date', key: 'createdOn', title: 'Created On', sortable: true, cssClass: 'adf-ellipsis-cell adf-expand-cell-2' },
                { type: 'text', key: 'name', title: 'Name', cssClass: 'adf-ellipsis-cell', sortable: true },
                { type: 'text', key: 'createdBy.name', title: 'Created By', sortable: true, cssClass: ''},
                { type: 'json', key: 'json', title: 'Json', cssClass: 'adf-expand-cell-2'}
            ]
        );

        this.data.setSorting(new DataSorting('id', 'asc'));
    }
    /* spellchecker: enable */

    addRow() {
        const id = this.data.getRows().length + 1;
        const row = new ObjectDataRow({
            id: id,
            name: 'Name ' + id,
            createdOn: new Date(),
            icon: 'material-icons://extension',
            createdBy: this._createdBy
        });
        this.data.getRows().push(row);
        this.data.sort();
    }

    replaceRows() {
        const objects = [
            {
                id: 10,
                name: 'Name 10',
                createdBy: this._createdBy,
                createdOn: new Date(2016, 6, 2, 15, 8, 5),
                icon: 'material-icons://face'
            },
            {
                id: 11,
                name: 'Name 11',
                createdBy: this._createdBy,
                createdOn: new Date(2016, 6, 2, 15, 8, 6),
                icon: 'material-icons://language'
            },
            {
                id: 12,
                name: 'Name 12',
                createdBy: this._createdBy,
                createdOn: new Date(2016, 6, 2, 15, 8, 7),
                icon: 'material-icons://pets'
            },
            {
                id: 13,
                name: 'Image 13',
                createdBy: this._createdBy,
                createdOn: new Date(2016, 6, 2, 15, 8, 8),
                icon: this._imageUrl
            }
        ];
        const rows = objects.map((obj) => new ObjectDataRow(obj));
        this.data.setRows(rows);
    }

    replaceColumns() {
        const schema = [
            { type: 'text', key: 'id', title: 'Id', sortable: true },
            { type: 'text', key: 'name', title: 'Name', sortable: true, cssClass: 'full-width name-column' }
        ];
        const columns = schema.map((col) => new ObjectDataColumn(col));
        this.data.setColumns(columns);
    }

    onShowRowActionsMenu(event: DataCellEvent) {
        const myAction = {
            title: 'Hello'
            // you custom metadata needed for onExecuteRowAction
        };
        event.value.actions = [
            myAction
        ];
    }

    onExecuteRowAction(event: DataRowActionEvent) {
        const args = event.value;
        window.alert(`My custom action: ${args.action.title}`);
    }

    toggleStickyHeader() {
        this.stickyHeader = !this.stickyHeader;
    }
}
