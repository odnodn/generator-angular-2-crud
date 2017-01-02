﻿import {
    Component, Input, Output, EventEmitter
} from '@angular/core';

import { <%= entity.capitalize %>Model } from '../../models';

@Component({
    selector: '[<%= entity.name %>-delete-ui]',
    template: `
        <button class="btn btn-danger" data-toggle="modal" [attr.data-target]="'#modelDelete-' + user.id">Delete</button> 
        
        <!-- Modal -->
        <div class="modal fade" [id]="'modelDelete-' + user.id" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">Delete <%= entity.capitalize %></h4>
                    </div>
                    <div class="modal-body">
                        <p>Are you sure to delete this <%= entity.capitalize %>?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" (click)="onDelete()" data-dismiss="modal">Confirm</button>
                    </div>
                </div>
            </div>
        </div>  
    `
})
export class <%= entity.capitalize %>Delete {
    @Input() <%= entity.name %>: <%= entity.capitalize %>Model;
    @Output() onDeleteHandler = new EventEmitter();

    onDelete() {
        this.onDeleteHandler.next(this.<%= entity.name %>.id);
    }
}
