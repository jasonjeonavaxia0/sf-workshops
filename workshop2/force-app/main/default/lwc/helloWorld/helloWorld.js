import { LightningElement, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import userId from '@salesforce/user/Id';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_PHONE_FIELD from '@salesforce/schema/Account.Phone';

export default class HelloWorld extends LightningElement {
    @track world = "World!";
    toggleBtn = true;
    currentUserId = userId;
    @track record;
    @track error;

    @wire(getRecord, {recordId: '001N000001RkVvxIAF', fields: [ACCOUNT_NAME_FIELD,ACCOUNT_PHONE_FIELD]})
    wiredAccount({ error, data }) {
        console.log("Error: " + error);
        console.log("data: ", data);
        if (data) {
            this.record = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.record = undefined;
        }
    }

    handleClick(){
        this.world = this.toggleBtn ? "Woodson!" : "World!";
        this.toggleBtn = !this.toggleBtn
    }

    get name(){
        return "My Account, " + this.record.fields.Name.value;
    }

    get phone(){
        return this.record.fields.Phone.value;
    }
}
