import { ref } from 'vue';
import DropdownComponent from './DropdownComponent.vue';

export default (await import('vue')).defineComponent({
components: {
AgGridVue,
_DropdownComponent: DropdownComponent, // Use underscore to avoid warning
},
setup() {
const gridOptions = ref({
columnDefs: [
{ field: 'make', sortable: true, filter: true },
{ field: 'model', sortable: true, filter: true },
{
field: 'price',
cellEditor: 'DropdownComponent',
editable: true,
cellEditorParams: {
values: ['option1', 'option2', 'option3'],
},
},
],
rowData: [
{ make: 'Toyota', model: 'Celica', price: 'option1' },
{ make: 'Ford', model: 'Mondeo', price: 'option2' },
{ make: 'Porsche', model: 'Boxster', price: 'option3' },
],
frameworkComponents: {
dropdownComponent: DropdownComponent,
},
});

const onFirstDataRendered = (params) => {
params.api.sizeColumnsToFit();
};

return {
gridOptions,
onFirstDataRendered,
};
},
});
