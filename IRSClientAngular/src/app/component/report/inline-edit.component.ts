import { Component,
    Input,
    Output,
    EventEmitter,
    ElementRef,
    ViewChild,
    Renderer,
    forwardRef,
    OnInit } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const INLINE_EDIT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InlineEditComponent),
    multi: true
  };

@Component({
  selector: 'inline-edit',
  templateUrl: './inline-edit.component.html',
  providers: [INLINE_EDIT_CONTROL_VALUE_ACCESSOR],
  styleUrls: ['../../../assets/css/inline-edit.component.css']
})
export class InlineEditComponent implements ControlValueAccessor {

    @ViewChild('inlineEditControl') inlineEditControl; 
    @Input() label: string = '';
    @Input() type: string = 'text';
    @Input() required: boolean = false;
    @Input() disabled: boolean = false;
    @Output() descriptionChanged: EventEmitter<string> = new EventEmitter();  
    private _value: string = ''; 
    private preValue: string = ''; 
    private editing: boolean = false;
    public onChange: any = Function.prototype; // Trascend the onChange event
    public onTouched: any = Function.prototype; // Trascend the onTouch event

    // Control Value Accessors for ngModel
    get value(): any {
        return this._value;
    }

    set value(v: any) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }

    // Required for ControlValueAccessor interface
    writeValue(value: any) {
        this._value = value;
    }

    // Required forControlValueAccessor interface
    public registerOnChange(fn: (_: any) => {}): void {
        this.onChange = fn;
    }

    // Required forControlValueAccessor interface
    public registerOnTouched(fn: () => {}): void {
        this.onTouched = fn;
    }

    // Do stuff when the input element loses focus
    onBlur($event: Event) {
        this.descriptionChanged.emit("complete");        
        this.editing = false;
    }

    // Start the editing process for the input element
    edit(value) {
        if (this.disabled) {
        return;
        }

        this.preValue = value;
        this.editing = true;
        // Focus on the input element just as the editing begins
        setTimeout(_ => this.inlineEditControl.nativeElement.focus(),
        'focus', []);
    }
}