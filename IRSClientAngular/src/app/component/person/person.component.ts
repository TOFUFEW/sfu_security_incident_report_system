import { Component, Input, OnInit } from '@angular/core';
import { IncidentElement } from '../report/incident-element';
import { Person } from '../person/person';
import { PersonService } from '../../service/person.service';
import { Router, RouterModule } from '@angular/router';
import { NewReportService } from '../../service/new-report.service';
import { Config } from '../../util/config.service';
@Component({
    selector: 'person-component',
    templateUrl: './person.component.html'
})

export class PersonComponent implements OnInit {
    private reference: any;
    personList: Person[] = [];
    filterList: Person[] = [];
    newPerson: Person = new Person();
    filterPerson: Person = new Person();
    phoneNumber1: string = "";
    phoneNumber2: string = "";
    phoneNumber3: string = "";
    toggleNewPersonFlag: boolean = false;
    personSelected: boolean = false;
    personExists: boolean = false;

    constructor( 
        private personService: PersonService,
        private reportService: NewReportService
    ){
        this.filterPerson.attributes.FIRST_NAME = "";
        this.filterPerson.attributes.LAST_NAME = "";
        this.filterList = this.personList;
    };

    addPersonToReport(): void {
        this.reportService.addIncidentElement( this.newPerson );
    }

    removePersonFromReport(): void {
        if ( this.reference == null ) {
            console.log("must have a person involved!");
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
        this.newPerson = person;

    
        this.filterPerson.attributes.FIRST_NAME = person.attributes.FIRST_NAME;
        this.filterPerson.attributes.LAST_NAME = person.attributes.LAST_NAME;
        this.filterPerson.attributes.PHONE_NUMBER = person.attributes.PHONE_NUMBER;
        
        var phoneNumber = person.attributes.PHONE_NUMBER.toString();

        this.phoneNumber1 = phoneNumber.slice(0, 3);
        this.phoneNumber2 = phoneNumber.slice(3, 6);
        this.phoneNumber3 = phoneNumber.slice(6);

        this.personSelected = true; 
    }

    getPersons(): void {
        this.personService.getPersons().then( returnedPersons => {
            this.personList = returnedPersons;
        } )
        .then( () => {
            this.copyPersonLst();
            //this.filterPerson = new Person();
        });   
    }

    copyPersonLst() : void {
        Object.assign(this.filterList , this.personList);
        console.log(this.filterList);
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
                        console.log(returnedPerson);
                        this.personList.push(returnedPerson as Person);
                        alert("Person successfully added!");
                    }
                    else alert("Add failed.");
                });
        }
        this.filterPerson = this.newPerson;
        this.personSelected = true;
        this.toggleNewPersonFlag = false;
        delete this.newPerson;
        this.newPerson = new Person();
        this.personExists = false;
    }

    findPerson(): void {
        this.personSelected = false;
        console.log(this.filterPerson);
        this.personService.filter(this.filterList, this.personList, this.filterPerson);   
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

    ngOnInit(): void {
        this.getPersons();
        this.addPersonToReport();
    }
}