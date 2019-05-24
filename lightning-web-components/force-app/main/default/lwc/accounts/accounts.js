import { LightningElement } from 'lwc';
import CurrentUserId from '@salesforce/user/Id';

export default class Accounts extends LightningElement {
    greeting = "World!";
    userId = CurrentUserId;
}