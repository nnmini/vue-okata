<template>
  <div style="height: 500px">
            <div style="height: 100%; box-sizing: border-box;">
                <ag-grid-vue
                        style="width: 100%; height: 100%;"
                        class="ag-theme-alpine"
                        id="myGrid"
                        :columnDefs="columnDefs"
                        :rowData="rowData"
                        :defaultColDef="defaultColDef"
                        ></ag-grid-vue>
            </div>
        </div>
  </template>
   <!-- <div style="height: 100%">
    <div style="height: 100%; box-sizing: border-box;">
        <ag-grid-vue
                style="width: 100%; height: 100%;"
                class="ag-theme-alpine"
                id="myGrid"
                :columnDefs="columnDefs"
                :rowData="rowData"
                :defaultColDef="defaultColDef"
                ></ag-grid-vue>
    </div>
</div> -->
  <script>

  import { AgGridVue } from 'ag-grid-vue3';
  import 'ag-grid-community/styles/ag-grid.css';
  import 'ag-grid-community/styles/ag-theme-alpine.css';
  import '@/main.css';
  import DropdownComponentVue from './DropdownComponent.vue';
  
  export default {
    components: {
      AgGridVue,
      // eslint-disable-next-line vue/no-unused-components
      DropdownComponentVue
    },
    setup() {
    const defaultColDef = {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      resizable: true,
    };

    const columnDefs = [
      {
        headerName: 'Doubling',
        field: 'number',
        cellEditor: 'DropdownComponentVue',
        editable: true,
        width: 300,
      },
      {
        field: 'mood',
        cellRenderer: 'moodRenderer',
        cellEditor: 'moodEditor',
        editable: true,
        width: 300,
      },
      {
        headerName: 'Numeric',
        field: 'number',
        cellEditor: 'numericEditor',
        editable: true,
        width: 280,
      },
    ];

    const rowData = [
      {
        name: 'Bob',
        mood: 'Happy',
        number: 10,
      },
      {
        name: 'Harry',
        mood: 'Sad',
        number: 3,
      },
      {
        name: 'Sally',
        mood: 'Happy',
        number: 20,
      },
      {
        name: 'Mary',
        mood: 'Sad',
        number: 5,
      },
      {
        name: 'John',
        mood: 'Happy',
        number: 15,
      },
      {
        name: 'Jack',
        mood: 'Happy',
        number: 25,
      },
      {
        name: 'Sue',
        mood: 'Sad',
        number: 43,
      },
      {
        name: 'Sean',
        mood: 'Sad',
        number: 1335,
      },
      {
        name: 'Niall',
        mood: 'Happy',
        number: 2,
      },
      {
        name: 'Alberto',
        mood: 'Happy',
        number: 123,
      },
      {
        name: 'Fred',
        mood: 'Sad',
        number: 532,
      },
      {
        name: 'Jenny',
        mood: 'Happy',
        number: 34,
      },
      {
        name: 'Larry',
        mood: 'Happy',
        number: 13,
      },
    ];

    return {
      columnDefs,
      rowData,
      defaultColDef,
    };
  },
  };
  </script>
  
  <style>
 
  </style>
  