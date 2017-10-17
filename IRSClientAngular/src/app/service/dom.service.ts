import {
    Injectable,
    Injector,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    ComponentRef,
    ApplicationRef,
    ViewContainerRef
} from '@angular/core';
import { VehicleComponent } from '../component/vehicle.component';

@Injectable()
export class DomService {

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector,
    ) {}

    // **** ADD DYNAMIC COMPONENTS HERE **** //

    addVehicle(divTag: string) {

        // 1. Create a component
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(VehicleComponent)
            .create(this.injector);

        console.log("component created");
        this.addToDom(componentRef, divTag);
        
        // 5. Save reference for later use
        componentRef.instance.reference = componentRef;
    }

    // **** END OF DYNAMIC COMPONENTS **** //



    private addToDom(componentRef: any, divTag: string) {

        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);
        
        // 3. Get DOM element from component
        const domElement = (componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;

        // 4. Append DOM element to the div
        let div = document.getElementById(divTag);
        div.appendChild(domElement);
    }
}