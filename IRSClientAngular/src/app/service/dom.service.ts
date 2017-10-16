import {
    Injectable,
    Injector,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    ApplicationRef,
    ViewContainerRef
} from '@angular/core';

import { DynamicFormComponent } from '../component/dynamic-form.component';

@Injectable()
export class DomService {


    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector,
    ) { }

    appendComponentToDiv(component: any, tag: string) {

        // 1. Create a component reference from the component 
        const componentRef = this.componentFactoryResolver
        .resolveComponentFactory(component)
        .create(this.injector);

        /*
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        console.log("we are here");
        let rootViewContainer = viewContainerRef;
        rootViewContainer.clear();
        let componentRef = factory.create(rootViewContainer.parentInjector);
        */

        console.log("component created");
        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);

        // 3. Get DOM element from component
        const domElement = (componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;

        // 4. Append DOM element to the div
        let div = document.getElementById(tag);
        div.appendChild(domElement);
    }
}