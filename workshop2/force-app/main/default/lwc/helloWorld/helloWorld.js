import { LightningElement,track, wire } from 'lwc';
import Id from '@salesforce/user/Id';
import ACOUNT_NAME_FILED  from '@salesforce/schema/Account.Name';
import ACOUNT_PHONE_FILED  from '@salesforce/schema/Account.Phone';
import { getRecord } from 'lightning/uiRecordApi';




export default class HelloWorld extends LightningElement {
    @track world = "world";
    @track record;
    @track error;
    toggleBtn = true;
    currnetId = Id;
    @wire(getRecord, { recordId: '001N000001RTa1LIAT', fields: [ACOUNT_NAME_FILED, ACOUNT_PHONE_FILED] } )
    wiredAccount({ error, data }) {
        if (data) {
            this.record = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.record = undefined;
        }
    }

    handleClick(){
        this.world = this.toggleBtn? "jason":"world";
        this.toggleBtn = !this.toggleBtn;
    }
    get name() {
        return this.record.fields.Name.value;
    }
    get phone() {
        return this.record.fields.Phone.value;
    }
}