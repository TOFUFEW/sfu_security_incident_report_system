import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { IncidentElement } from '../report/incident-element';
import { Person } from '../person/person';
import { PersonService } from '../../service/person.service';
import { Router, RouterModule } from '@angular/router';
import { NewReportService } from '../../service/new-report.service';
import { Config } from '../../util/config.service';

@Component({
    selector: 'person-component',
    templateUrl: './person.component.html',
    styleUrls: ['../../../assets/css/guard-app.css']    
})

export class PersonComponent implements OnInit {
    @Output () personAdded : EventEmitter<boolean> = new EventEmitter();   
    @Output () addPersonToGuardReport : EventEmitter<Person> = new EventEmitter();  
    @Output() cancelEditor = new EventEmitter();
    
    private reference: any;
    personList: Person[] = [];
    filterList: Person[] = [];
    currentPerson: Person = new Person();
    newPerson: Person = new Person();
    filterPerson: Person = new Person();
    phoneNumber1: string = "";
    phoneNumber2: string = "";
    phoneNumber3: string = "";
    toggleNewPersonFlag: boolean = false;
    personSelected: boolean = false;
    personExists: boolean = true;
    personExistsInList: boolean = true;

    public modalVisible = false;     
    

    constructor(
        private personService: PersonService,
        private reportService: NewReportService,
        private router: Router
    ){
        // this.filterPerson.attributes.FIRST_NAME = "";
        // this.filterPerson.attributes.LAST_NAME = "";
        this.filterList = this.personList;
    };


    addPersonToReport(): void {
        this.reportService.addIncidentElement( this.newPerson );
    }

    removePersonFromReport(): void {
        if ( this.reference == null ) {
            return;
        }

        if ( this.newPerson != null )
            this.reportService.removeIncidentElement( this.newPerson, Config.PersonTable );
        this.reference.destroy();
    }

    onChangePhoneNumber(): void {
        this.newPerson.attributes.PHONE_NUMBER = this.phoneNumber1 + this.phoneNumber2 + this.phoneNumber3;
    }

    onChangeSearchPhoneNumber(): void {
        this.filterPerson.attributes.PHONE_NUMBER = this.phoneNumber1 + this.phoneNumber2 + this.phoneNumber3;
    }


    toggleNewPerson(): void {
        this.toggleNewPersonFlag = !this.toggleNewPersonFlag;
        console.log(this.personList);
    }

    selectPerson(person: Person) : void {
        Object.assign(this.newPerson, person);
        
        this.filterPerson.attributes.FIRST_NAME = person.attributes.FIRST_NAME;
        this.filterPerson.attributes.LAST_NAME = person.attributes.LAST_NAME;
        this.filterPerson.attributes.PHONE_NUMBER = person.attributes.PHONE_NUMBER;

        var phoneNumber = person.attributes.PHONE_NUMBER.toString();

        this.phoneNumber1 = phoneNumber.slice(0, 3);
        this.phoneNumber2 = phoneNumber.slice(3, 6);
        this.phoneNumber3 = phoneNumber.slice(6);

        this.personSelected = true;
    }

    hide() {
        this.modalVisible = false;
    }

    // getPersons(): void {
    //     this.personService.getPersons().then( returnedPersons => {
    //         this.personList = returnedPersons;
    //     } )
    //     .then( () => {
    //         this.copyPersonLst();
    //     });
    // }

    copyPersonLst() : void {
        Object.assign(this.filterList , this.personList);
    }

    findPerson(): void {
        this.onChangePhoneNumber();
        if ( this.allFieldsValid( this.newPerson ) ) {
            this.personService.personExists( this.newPerson )
                .then( exists => {
                    if ( exists == null ) {
                        this.personExists = false;
                    } else {
                        this.personExists = true;
                        this.newPerson = exists;
                        if ( !this.router.url.includes('guard-app')) {
                            this.reportService.removeIncidentElement(this.newPerson, Config.PersonTable);
                            this.addPersonToReport();
                            console.log(this.reportService.incidentElements);
                        }
                    }
                    this.personAdded.emit( this.personExists );
                });
        }
        else {
            this.personExists = true;
            this.personAdded.emit( false );
        }
        this.modalVisible = true;
        
        // this.personSelected = false;

        // this.personService.filter(this.filterList, this.personList, this.filterPerson);
        // if (this.filterList.length < 1){
        //     if ( this.filterPerson.attributes.FIRST_NAME != null
        //         && this.filterPerson.attributes.LAST_NAME != null
        //         && this.filterPerson.attributes.PHONE_NUMBER != null
        //         && this.filterPerson.attributes.PHONE_NUMBER.toString().length == 10
        //     ) {
        //         this.personExistsInList = false;
        //         Object.assign(this.newPerson, this.filterPerson);
        //     }
        // }
        // else {
        //     this.personExistsInList = true;
        // };
    }

    addPersonToDatabase(): void {
        if ( this.allFieldsValid( this.newPerson ) ) {
            this.personService.create( this.newPerson )
                .then(returnedPerson => {
                    if ( returnedPerson != null ) {
                        alert("Person successfully added!");
                        this.personExists = true;
                        this.personAdded.emit( this.personExists );   
                        console.log("returned person ", returnedPerson); 
                        this.addPersonToGuardReport.emit(this.newPerson);
                    }
                    else alert("Add failed. Try again.");
                });
        }
    }

    addPerson(): void {
        this.personList.forEach(person => {
            if (person.attributes.FIRST_NAME == this.newPerson.attributes.FIRST_NAME
                && person.attributes.LAST_NAME == this.newPerson.attributes.LAST_NAME
                && person.attributes.PHONE_NUMBER == this.newPerson.attributes.PHONE_NUMBER
            ) {
                alert("Person already exists");
                this.personExists = true;
                return;
            }
        });
        if (!this.personExists){
            this.personService.create(this.newPerson)
                .then(returnedPerson => {
                    if (returnedPerson != null) {
                        //this.personList.push(returnedPerson as Person);
                        this.personExistsInList = true;
                        alert("Person successfully added!");
                        this.personList.push(this.newPerson);
                    }
                    else alert("Add failed.");
                });
        }
        this.filterPerson = this.newPerson;
        console.log("Filter person", this.filterPerson);
        this.personSelected = true;
        this.toggleNewPersonFlag = false;
        delete this.newPerson;
        this.newPerson = new Person();
        this.personExists = false;
    }

    updatePerson( person: Person ): void {
      this.personService.update( person )
          .then( returnedPerson => {
              if ( returnedPerson != null  ) {
                var i = this.personList.findIndex( person => person.attributes.PERSON_ID === returnedPerson.attributes.PERSON_ID );
                // remove 1 object at index i, replace it with returnedPerson
                this.personList.splice( i, 1, returnedPerson );
                alert( "successfully edited!" );
              }
              else alert( "Edit failed." );
          } );
    }

    deletePerson( id: number ): void {
      this.personService.delete( id ).then( isDeleted => {
          var msg = isDeleted ? "Person successfully deleted!" : "Delete failed";
          alert(msg);
          var i = this.personList.findIndex( person => person.attributes.PERSON_ID === id );
          // remove 1 object at index i
          this.personList.splice( i, 1 );
        });
    }

    private allFieldsValid( person: Person ) {
        if ( person == null )
            return false;
        return person.attributes != null &&
            person.attributes.LAST_NAME != null && person.attributes.LAST_NAME.length > 0 &&
            person.attributes.FIRST_NAME != null && person.attributes.FIRST_NAME.length > 0 &&
            person.attributes.PHONE_NUMBER != null && person.attributes.PHONE_NUMBER.length == 10;
    }

    savePerson() {
        this.findPerson();
    }

    cancelPersonEdit() {
        this.cancelEditor.emit();
    }

    ngOnInit(): void {
        //this.getPersons();
        this.addPersonToReport();
    }
}
