import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import 'ag-grid-enterprise';
import { AgGridVue } from 'ag-grid-vue3';
import { createApp, onBeforeMount, ref } from 'vue';
import CallsCellRenderer from './callsCellRendererVue.js';
import './style.css';

const VueExample = {
  template: `
        <div style="height: 100%">
            <ag-grid-vue
                
                style="width: 100%; height: 100%;"
                :class="themeClass"
                :columnDefs="columnDefs"
                @grid-ready="onGridReady"
                :masterDetail="true"
                :isRowMaster="isRowMaster"
                :defaultColDef="defaultColDef"
                :getRowId="getRowId"
                :detailCellRendererParams="detailCellRendererParams"
                :rowData="rowData"
                @first-data-rendered="onFirstDataRendered"></ag-grid-vue>
        </div>
    `,
  components: {
    'ag-grid-vue': AgGridVue,
    CallsCellRenderer,
  },
  setup() {
    const columnDefs = ref([
      { field: 'name', cellRenderer: 'agGroupCellRenderer' },
      { field: 'account' },
      { field: 'calls', cellRenderer: 'CallsCellRenderer' },
      { field: 'minutes', valueFormatter: "x.toLocaleString() + 'm'" },
    ]);
    const gridApi = ref();
    const defaultColDef = ref({
      flex: 1,
    });
    const isRowMaster = ref(null);
    const getRowId = ref(null);
    const detailCellRendererParams = ref(null);
    const rowData = ref(null);

    onBeforeMount(() => {
      isRowMaster.value = (dataItem) => {
        return dataItem ? dataItem.callRecords.length > 0 : false;
      };
      getRowId.value = (params) => {
        return params.data.account;
      };
      detailCellRendererParams.value = {
        detailGridOptions: {
          columnDefs: [
            { field: 'callId' },
            { field: 'direction' },
            { field: 'number', minWidth: 150 },
            { field: 'duration', valueFormatter: "x.toLocaleString() + 's'" },
            { field: 'switchCode', minWidth: 150 },
          ],
          defaultColDef: {
            flex: 1,
          },
        },
        getDetailRowData: (params) => {
          params.successCallback(params.data.callRecords);
        },
      };
    });

    const onFirstDataRendered = (params) => {
      // arbitrarily expand a row for presentational purposes
      setTimeout(() => {
        params.api.getDisplayedRowAtIndex(1).setExpanded(true);
      }, 0);
    };
    const onGridReady = (params) => {
      gridApi.value = params.api;

      const updateData = (data) => {
        rowData.value = data;
      };

      fetch(
        'https://www.ag-grid.com/example-assets/master-detail-dynamic-data.json'
      )
        .then((resp) => resp.json())
        .then((data) => updateData(data));
    };

    return {
      columnDefs,
      gridApi,
      isRowMaster,
      defaultColDef,
      getRowId,
      detailCellRendererParams,
      rowData,
      onGridReady,
      themeClass:
        "ag-theme-quartz",
      onFirstDataRendered,
    };
  },
};

createApp(VueExample).mount('#app');