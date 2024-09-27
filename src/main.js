import {createApp} from 'vue'
import './style.css'
import App from './app.vue'
import i18n from "./i18n.js";

// PrimeVue
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

// PrimeFlex
import 'primeflex/primeflex.css';

// PrimeIcons
import 'primeicons/primeicons.css';
import ConfirmationService from "primevue/confirmationservice";
import DialogService from "primevue/dialogservice";
import ToastService from "primevue/toastservice";
import Button from "primevue/button";
import Card from "primevue/card";
import Column from "primevue/column";
import ConfirmDialog from "primevue/confirmdialog";
import Checkbox from "primevue/checkbox";
import DataTable from "primevue/datatable";
import Dialog from "primevue/dialog";
import Select from "primevue/select";
import FileUpload from "primevue/fileupload";
import FloatLabel from "primevue/floatlabel";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Menu from "primevue/menu";
import Rating from "primevue/rating";
import Row from "primevue/row";
import Drawer from "primevue/drawer";
import Tag from "primevue/tag";
import Textarea from "primevue/textarea";
import Toolbar from "primevue/toolbar";
import Toast from "primevue/toast";
import MultiSelect from 'primevue/multiselect';
import Password from "primevue/password";
import Dropdown from "primevue/dropdown";


const app = createApp(App);

import router from "./router/index.js";
import InputMask from "primevue/inputmask";
import Calendar from "primevue/calendar";
import DatePicker from "primevue/datepicker";
import SelectButton from "primevue/selectbutton";

// Create app instance

// Use i18n

app.use(i18n);

// Use Router

app.use(router);

// Use PrimeVue

app.use(PrimeVue, { theme: { preset: Aura }, ripple: true })
    .use(ConfirmationService)
    .use(DialogService)
    .use(ToastService);

//primevue components

app.component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-column', Column)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-checkbox', Checkbox)
    .component('pv-data-table', DataTable)
    .component('pv-dialog', Dialog)
    .component('pv-date-picker', DatePicker)
    .component('pv-select', Select)
    .component('pv-calendar', Calendar)
    .component('pv-input-mask', InputMask)
    .component('pv-select-button', SelectButton)
    .component('pv-file-upload', FileUpload)
    .component('pv-float-label', FloatLabel)
    .component('pv-icon-field', IconField)
    .component('pv-input-icon', InputIcon)
    .component('pv-input-text', InputText)
    .component('pv-input-number', InputNumber)
    .component('pv-menu', Menu)
    .component('pv-rating', Rating)
    .component('pv-row', Row)
    .component('pv-drawer', Drawer)
    .component('pv-tag', Tag)
    .component('pv-textarea', Textarea)
    .component('pv-toolbar', Toolbar)
    .component('pv-multiselect', MultiSelect)
    .component('pv-input-password', Password)
    .component('pv-toast', Toast)
    .component ('pv-dropdown', Dropdown)


    .component('pv-toast', Toast);


// Mount app
app.mount('#app');
