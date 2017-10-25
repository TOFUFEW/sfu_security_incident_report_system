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
    personList: Person[];
    newPerson: Person = new Person();
    
    constructor( 
        private personService: PersonService,
        private reportService: NewReportService
    ){};

    addPersonToReport(): void {
        this.reportService.addIncidentElement( this.newPerson, Config.PersonTable );
    }

    getPersons(): void {
        this.personService.getPersons().then( returnedPersons => {
            this.personList = returnedPersons;
        } );    
    }

    addPerson(): void {
        this.personService.create(this.newPerson)
            .then(returnedPerson => {
                if (returnedPerson != null) {
                    this.personList.push(returnedPerson);
                    alert("Person successfully added!");
                }
                else alert("Add failed.");
            });
        delete this.newPerson;
        this.newPerson = new Person();
    }

    findPerson( type : string ): void {
        this.personService.searchList( type, this.personList );
    }

    updatePerson( person: Person ): void {
      this.personService.update( person )
          .then( returnedPerson => {
              if ( returnedPerson != null  ) {
                var i = this.personList.findIndex( person => person.PERSON_ID === returnedPerson.PERSON_ID );
                // remove 1 object at index i, replace it with returnedPerson
                this.personList.splice( i, 1, returnedPerson );
                alert( " successfully edited!" );            
              }
              else alert( "Edit failed." );  
          } );
    }

    deletePerson( id: number ): void {
      this.personService.delete( id ).then( isDeleted => {
          var msg = isDeleted ? "Person successfully deleted!" : "Delete failed";
          alert(msg);
          var i = this.personList.findIndex( person => person.PERSON_ID === id );
          // remove 1 object at index i
          this.personList.splice( i, 1 );
        });
    }

    ngOnInit(): void {
        this.getPersons();
        this.addPersonToReport();
    }
}