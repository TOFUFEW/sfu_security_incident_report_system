import {
    Injectable,
    Injector,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    ComponentRef,
    ApplicationRef,
    ViewContainerRef
} from '@angular/core';
import { Location } from '../component/location/location';
import { LocationComponent } from '../component/location/location.component';
import { VehicleComponent } from '../component/vehicle/vehicle.component';
import { PersonComponent } from '../component/person/person.component';
import { AttachmentComponent } from '../component/attachment/attachment.component';
import { GenericElementComponent } from '../component/generic-element/generic-element.component';

@Injectable()
export class DomService {

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector,
    ) {}

    addComponent(component: any, targetDomId: string) {
        // 1. Create a component
        const componentRef = this.createComponent( component );

        this.addToDom(componentRef, targetDomId);

        // 5. Save reference for later use
        componentRef.instance.reference = componentRef;
    }

    private addToDom(componentRef: any, targetDomId: string) {

        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);

        // 3. Get DOM element from component
        const domElement = (componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;

        // 4. Append DOM element to the div
        let div = document.getElementById( targetDomId );
        div.appendChild(domElement);
    }

    private createComponent( componentName: string ) : ComponentRef<any> {
        if ( componentName === VehicleComponent.name ) {
            return this.componentFactoryResolver
            .resolveComponentFactory(VehicleComponent)
            .create(this.injector);
        }
        else if ( componentName === LocationComponent.name ) {
            return this.componentFactoryResolver
            .resolveComponentFactory(LocationComponent)
            .create(this.injector);
        }
        else if ( componentName === PersonComponent.name ) {
            return this.componentFactoryResolver
            .resolveComponentFactory( PersonComponent )
            .create( this.injector );
        }
        else if ( componentName === AttachmentComponent.name ) {
            return this.componentFactoryResolver
            .resolveComponentFactory( AttachmentComponent )
            .create( this.injector );
        }

        else if ( componentName === GenericElementComponent.name ) {
            return this.componentFactoryResolver
            .resolveComponentFactory( GenericElementComponent )
            .create( this.injector );
        }

    }
}
