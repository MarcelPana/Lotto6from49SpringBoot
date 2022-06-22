//-------------------------------------------------------------------------------------------------------------
//ANGULAR = framework open surce MVC/MVVM for java Script for building web application.
//        - se ocupa de functionalitatile de baza ale unui proiect cum ar fi compatibilitati, dependinte si altele.
//        - CLI(command line interface) = documentatie foarte buna
//        - este un design pattern
//        - este scris in TypeScript ( typeScript este un superset pentru JS)ceea ce il duce mai aproape de Java sau C#
//        - este modular si organizat
//
// ----Package.json------
// in acest fisier gasim toate dependintele, echivalent cu POM in srpingBoot
//---Metadata---------------
//Metadata = in Angular is defined to determine how the framework processes a given class.
//
//---Decorator Class------------
//Decorator class is used to define metadata about the class. Adica sa stie ce sa faca cu o clasa care are un decorator,
// spre exemplu "@Component".
// Similar cu Java = Adnotari
//
//@Comment({
//    selector: 'my-app', templateUrl: 'app/app.component.html'
//})
//
//---Modules---------------
//In general modules are used to group treated classes together to achieve a given functionality
//NgModule metadata does the following:
//Declares which components, directives, and pipes belong to the module
//Makes some of those components, directives, and pipes public so that other module's component templates can use them
//Imports other modules with the components, directives, and pipes that components in the current module need
//Provides services that other application components can use
//Every Angular application has at least one module, the root module. You bootstrap that module to launch the application.
//
//
//// imports
//import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
//
//import { AppComponent } from './app.component';
//
//// @NgModule decorator with its metadata
//@NgModule({
//    declarations: [AppComponent],
//    imports: [BrowserModule],
//    providers: [],
//    bootstrap: [AppComponent]
//})
//export class AppModule {}
//
//At the top are the import statements. The next section is where you configure the @NgModule by stating
//what components and directives belong to it (declarations) as well as which other modules it uses (imports).
//For more information on the structure of an @NgModule, be sure to read Bootstrapping.
//
//--Components-----------
//        - Are the key role in Angular.
//        - Avery Angular project must have at least one component. Represents a specific part of the user interface(UI).
//        - each component contains a selector thet represents the Html code associated with that component.
//        - to make class component, add the @Component({})decorator.
//        Components are the building blocks of a UI in an Angular application.
//        These components are associated with a template and are subsets of directives.
//         A single webpage can have many such components.
//         Each component focuses on a section of a page and is independent of others.
//         Components can have child components and parent components.
//
//        Here are some of the features of an Angular Component:
//
//        Components are typically custom HTML elements, and each of these elements can instantiate only one component.
//        A TypeScript class is used to create a component. This class is then decorated with the @Component decorator.
//        The decorator accepts a metadata object that contains information about the component.
//        For a component to be usable by another component or application, it must belong to the NgModule.
//        A component’s runtime behavior is controlled by its life-cycle hooks.
//        Sharing data between a parent component and one or more child components is a common pattern in Angular.
//        You can implement this pattern by using the @Input() and @Output() decorators.
//Component inputs
//An Angular Component has Inputs—these are the properties or attributes that can be passed to them from the outside.
//In the web component form, inputs are translated to HTML attributes and read as strings, so extra parsing is usually
// required (we ship a set of decorators for most commonly used parsing types, such as @ToJson, ToBoolean).
//                @Input()list: string[];
//To define the input, you have to use @Input angular decorator, which marks a class field as an input property and
//provides configuration metadata. The input property is bound to a DOM property in the template.
//During change detection, Angular automatically updates the data property with the DOM property’s value.
//
//Component outputs
//Angular Component has Outputs—these are the events that the component can emit to the outside at any time.
//In the web component, form outputs are translated to DOM Custom Events.
//                @Output
//To define output, you have to use @Output angular decorator, which marks a class field as an output property
//and supplies configuration metadata. Each time output is emitted, the callback method associated with the
//output property is invoked.
//


//Component lifecycle
//Hooks for the component
// - LifeCycle Hooks - sunt functii/metode ce le putem folosi pentru a intercepta momente din viata unei componente (lifecycle).
//constructor
//It is invoked when Angular creates a component or directive by calling new on the class.
//
//ngOnChanges
//Every time an input property of the component is changed, this method is called.
//
//ngOnInit
//Invoked when the given component has been initialized. This hook is only called once after the first ngOnChanges.
//
//ngDoCheck
//Invoked when the change detector of the given component is invoked. It lets you implement your own change detection algorithm for the given component.
//
//ngOnDestroy
//This method is invoked just before Angular destroys the component. Use this hook to unsubscribe observables and detach event handlers to avoid memory leaks.
//
//Hooks for the component’s children
//ngAfterContentInit
//Invoked after Angular performs any content projection into the component’s view (see the previous lecture on Content Projection for more info). To get more info about content query, see the official documentation ContentChildren, ContentChild.
//
//ngAfterContentChecked
//Invoked each time the content of the given component has been checked by Angular’s change detection mechanism.
//
//ngAfterViewInit
//Invoked when the component’s view has been fully initialized. To get more info about the content query see official documentation ViewChildren, ViewChild.
//
//ngAfterViewChecked
//Invoked each time the view of the given component has been checked by Angular’s change detection mechanism.
//
//Component metadata
//The @Component decorator identifies the class immediately below it as a component class, and specifies its metadata. Component metadata tells Angular where to find the major building blocks it needs to create and present the component and its view. In particular, it associates a template with the component, either directly with inline code, or by reference. Together, the component and its template describe a view.
//
//In addition to containing or pointing to the template, the @Component metadata configures, for example, how the component can be referenced in the HTML and what services it requires.
//
//Main properties
//selector
//It is the CSS selector that identifies the component in a template. It corresponds to the HTML tag that is included in the parent component. You can create your own HTML tag. However, the same has to be included in the parent component.
//
//template
//It is an inline-defined template for the view. The template defines some markup. The markup could typically include some headings or paragraphs that are displayed in the UI.
//
//templateUrl
//It is the URL for the external file containing the template for the view.
//
//styles
//These are inline-defined styles to be applied to the component’s view.
//
//styleUrls
//List of URLs to the stylesheets to be applied to the component’s view.
//
//providers
//It is an array where certain services for the component can be registered.
//
//animations
//Animations for the components can be listed.
//
//You can find a full list of component metadata properties in the official documentation.
//
//Component creation
//To create a new component, a CLI tool NX can be used to scaffold boilerplate code:
//
//nx generate component [my-component-name] --path=path/to/the/module
//
//-----------------------
//
//
// A component contains: - Template = HTML + Custom tTags + Angular Expresion       {{interpolated_value | pipe_name}}  <--- "property biding" sau "pipe"
//                         - Style = css              { style   }
//                         - Controller               { service   }
//
//
//
//
//
//Below, you can find an example of the typical component:
//
//import { Component} from '@angular/core';
//
//@Component({
//    selector: 'spy-example',                            <------  cu acest selector accesam aceasta componenta, el devenind tag de Html
//    templateUrl: './path-to-example.component.html',    <------  ne spune unde se gaseste templateul html pt aceasta componenta
//    styleUrls: ['./path-to-example.component.less'],    <------  este un array de styleUrls pentru ca putem avea mai multe pagini de style
//
//})
//export class ExampleComponent implements OnInit {
//    @Input() exampleInput = '';
//    @Input() @ToBoolean() exampleBooleanInput = false;
//
//    @Output() exampleOutput = new EventEmitter<void>();
//
//    ngOnInit() {
//        // Logic that has to be done when component will be created
//    }
//
//    componentSpecificMethod() {}
//------------------------------------
//
//-------Template example---------
//
//<h2> Products</h2>
//
//<div>
//    *ngfor="let product of products"       // folosim elementele si functiile din JS direct in html
//    <h3>
//        <a [title]="product.name + ' details '"></a>
//    </h3>
//
//<p>
//    *ngif="product.description"
//    Description: {{ product.description }}      // property binding
//</p>
//
//<button (click)=" share()">
//<div>
//-------------------------------------------------
//
//-----Data binding----------
//Is used to bind the data from the component to the class template
//-----String Interpolation  {{  }} Mustache syntax ----------
//Angular process expresions/variables inside {{  }}  and puts them as a result in Html
//            <p> Hello, my name is {{ name}}!</p>
//-----Property binding----------
//Allows you to bind an attribute of an Html element.
//          <img [src]="image Url (aici poate fi si o variabila a componentei) " [alt]="imageAlt">     //  parantezele patrate ne arata ca este un property binding,
//                                                                                                         adica facem un bind pe o anumita proprietate, atribut
//                                                                                                        pe care l avem pe un anumit tag
//-----Event binding----------
//One-way data binding, binds data from a component to a view to a component
//        <button (click)=" clickHandler()">Click me</button>    // in angular se foloseaste doar click intre paranteze spre deosebire
//                                                                    de Js unde este onClick.
//------------------------------------------------------------------------------------------------------------------------------------
//
//GENERALE ANGULAR:
//    - Angullar CLI - este o aplicatie separata de Angular ce ne da acces la aplicatia Angular si ne pune la dispozitie
//mai multe comenzi cu care putem initia activitati in Angular.
//    Singura comanda pura Angular este "ng serv" ce porneste aplicatia Angular, restul sunt din Cli.
//
//MVC (Model View Controller).............
//MVVM  (MOdel View View Model ).............
//
//- Pachetul package.json este ca pom.xml in Java unde gasim toate licrariile si dependentele proiectului
//
//- Directive Structurale:  ( sunt echivalentele functiilor din Java for/if/switch)
//ngfor =
//ngif =
//ngswitch =
//
//    - LifeCycle Hooks - sunt functii/metode ce le putem folosii pentru a intercepta momente din viata unei componente (lifecycle).
//- ca sa poti instala angular trebuie sa ai instalat deja Git si NodeJs
//- creezi un folder
//- te pozitionezi/selectezi in bara de url a fisierului
//- tastezi CMD pentru al deschide (cmd ul) sau deschizi GitBsh (click dreapta  in interiorul folderului / gitbash here )
//-- scrii comanda:
//    - npm install -g @angular/cli si dai enter ( pentru a instala Angular Cli daca nu il ai instalat) sau  npm install -g @angular/cli -f ( unde f = force)
//- ng new numedeproiectdorit ( pentru a crea un proiect nou)
//- ng serv ( pentru a porni aplicatia )( fereastra/terminalul cmd/gitBush trebuie sa ramana deschis cat lucrezi in aplicatie )
//- node --version (daca vrei sa vezi versiunea de Angular)
//- pwd ( print working directory) iti arata in ce director te afli
//- cd numedirector (intrii in directorul dorit)
//- ls (iti arata fisierul )
//- cd desktop
//- in search ul din bara de windows de jos, scrii cmd apesi enter/click dreapta/run as administrator (daca vrei sa lucrezi ca si Admin)
//- in browserul web scrii localhost:4200 (accesezi aplicatia Angular ce ruleaza pa portul localhost:4200)
//- deschizi aplicatia cu Compilerul (intelij/visualStudio)
// folderul package.json - este folderul de dependinte
// node_modules - nu se comite niciodata pe gitBush
// e2e - aici sunt testele automate
// src - este aplicatia noastra
// index.html
// styles.css
// app   este format din:
//    - app.component.css
//    - app.component.html (aici scriem codul html)(stergem tot codul initial din el si scriem codul dorit de noi )
//- app.component.spec.ts (fisierul de testare)
//- app.component.ts ( este o clasa "export class AppComponent" cu un  decorator @Componenet)
//Ex:			import { Component } from '@angular/core';
//
//@Component({
//    selector: 'app-root',
//    templateUrl: './app.component.html',
//    styleUrls: ['./app.component.scss']
//})
//export class AppComponent {
//    title = 'Hello SDA Students';
//}
//
//export class AppComponent {
//    title = 'Hello SDA Students';)
//
//- app.module.ts (este desine statator)
//
//    COMPONENTS:
//
//        Components = Directives
//        - Comanda  ng g c list-component iti genereaza o noua componenta
//
//    New Component/List component ( Componenta ):
//- deschizi un nou terminal in folderul aplicatiei sau terminalul compilerului
//    * executi comanda 		ng g c list-component  ( care iti creaza niste fisiere si in folderul app apare un nou folder "list_component" adica
//    creem o noua componenta ce contine deasemenea 	- list.component.component.css
//- list.component.component.html
//- list.component.component.spec.ts
//- list.component.component.ts
//    si creaza deasemenea un nou NgModule in app.module.ts
//    "list_component" este un segment de cod ce poate fi utilizat ca si un tot de mai multe ori in aplicatie acolo unde codul se repeta, este cam acelasi lucru cu
//    utilizarea metodelor in java.
//
//    "list_component" = componenta    - o componenta este compusa din trei fisiere:
//- list.component.component.css   este style ingul
//- list.component.component.html  este template ul
//    list.component.component.spec.ts  asta nu ne foloseste, de obicei se sterge
//- list.component.component.ts    este controllerul (type script)
//
//- Decoratorul este acelasi lucru cu Adnotarile in JAVA.
//    EX:			@Component({
//        selector: 'app-root',  ( in selector dam denumirea componentei ce vrem sa o folosim)
//    templateUrl: './app.component.html',   ( in templateUrl scriem calea catre template ul html )
//    styleUrls: ['./app.component.scss']   ( calea catre fisierele de styling css si este un array deoarece putem avea mai multe fisiere )
//})
//
//- Module = un modul reprezinta	locul in care noi alaturam 	anumite sectiuni de bussiness similare si le separam in diferite module de business
//-App Module  - tine modulele aplicatiei.
//    Ex:      @NgModule({
//    declarations: [      ( aici sunt componentele pe care le declara)
//AppComponent,
//    ListComponentComponent
//],
//imports: [			 ( aici sunt CELEALTE MODULE CE AU NEVOIE DE declaratii)
//BrowserModule,
//    AppRoutingModule
//],
//providers: [],			 ( aici sunt serviciile pe care le vom folosi)
//bootstrap: [AppComponent]   ( aici este punctul din care pleaca aplicatia noastra)
//})
//export class AppModule { }
//
//
//
//SERVICES:
//    - Comanda  ng g s  demo-service  iti creaza un serviciu
//
//Sunt clase in care avem serviciile ( metode de comunicare intre doua componente, serviciile Api, legaturile cu backendul, etc)
//Ex:			import { Injectable } from '@angular/core';
//
//@Injectable({
//    providedIn: 'root'
//})
//export class DemoServiceService {
//
//    constructor() { }
//}
//
//APP ROUTING MODULE:
//    - Comanda    ng generate module app-routing --flat --module=app   creaza un nou modul re routing in cazul in care nu ai ales sa ti l creeze Angularul la crearea aplicatiei.
//
//
//
//    Deschiderea unui proiect pe un alt port decat 4200:
//- Comanda ngserve --port 4201 (sau ce alt port doresti tu)      iti deschide proiectul pe alt port in caz ca 4200 este ocupat
//
//
//Comenzi utile:
//    - Comanda  npm install    ruleaza din nou proiectul si iti instaleaza librariile nou adaugate
//- Comanda  npm adit fix		iti fixeaza erorile de diferenta de variante de librarii si face update la acestea pt a fi compatibile intre ele
//
//
//CREARE PROIECT ANGULAR:
//    - mergi in folderul in care ai proiectul de BackEnd SpringBoot
//- te pozitionezi/selectezi in bara de url a fisierului
//- tastezi CMD pentru al deschide (cmd ul) sau deschizi GitBsh (click dreapta  in interiorul folderului / gitbash here )
//- scrii comanda:
//    - npm install -g @angular/cli si dai enter ( pentru a instala Angular Cli daca nu il ai instalat)
//- ng serv
/*
----------------------------------------------------------------------------------------------------------
-------DATA BINDING-------------
        - bind data from the component class to the template   HTML component = <h1>Hello {{title}}</h1>      Ts component = title = 'Game Lovers';
-------String interpolation -------------
        Means, angular processes/variables and puts them into html    Ex: HTML component = <h1>Hello {{title}}</h1>      Ts component = title = 'Game Lovers';
-------Property binding -------------
      Allows you to bind an attribute of an Html element   Ex: HTML component =   h<img [src]="urlToimagne" [alt]="altForImagine">   Ts component =   urlToimagne: string = "https://www.google.com/imgres?imgurl=https%3A%2F"      altForImagine: string = "photo masina"
-------Event binding -------------
       Ex: HTML component=      <button (click)="clickUtilizator(itemNou)"></button>        Ts component=   clickUtilizator(item){ alert('USER CLICK' + ' pe ' + item)!}
-------one way binding -------------
Ex: HTML component =
<label for="userInput">Type Here</label>
<input id="userInput" type="text" [(ngModel)]="userInput">      <!-- two ways data binding [(ngModel)]-->
<h1>{{userInput}}</h1>

   Ts component=  userInput: string;

-------Two ways binding -------------
Ex: HTML component =
<label for="secondUserInput">Type Here</label>
<input id="secondUserInput" type="text" [value]="secondUserInput">      <!-- one way data binding [(ngModel)]-->
<h1>{{secondUserInput}}</h1>

Ts component=   secondUserInput: string = "one way data binding";

App.Module.ts=   imports:[ AppRoutingModule ] (you must do this)

---------------------------------------------------------------------------------------------------------
--DIRECTIVES -------------
    They can change the page layout by adding/removing Html elements.


--------Structural Directives-------------
    Are preceded by a "*" sign.   Ex:   <div *ngIf="hero" class="name">{{hero.name}}</div>
                                  Ex:   <div *ngFor="let hero of heroes; let i=index; let odd=odd; trackBy: trackById" [class.odd]="odd">({{i}}) {{hero.name}}</div>

--------Attribute Directives-------------
    Provide additional behaviour or modify the appearance of Html elements.

 Ex:
HTML component
<ul>
	<li *ngFor="let mark of marks">
		<div [ngClass]="getClass(mark)">{{ mark }}</div>
	</li>
</ul>

TS component
import { Component } from '@angular/core';
import moment from 'moment'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  marks = [10, 20, 30, 40 , 50 , 60 , 70 , 80, 90, 100, 110, 120];

  getClass(mark){
    if(mark <= 30)
    return 'beginner';
    else if (mark <= 75)
    return 'intermediate';
    else if (mark <= 100)
    return 'expert';
    else return 'other';
  }
}

--------------------------------------------------------------------------------------------------------------
-------SERVICES---------
 Un serviciu este ( o clasa in care avem business logicul )locul in care din mai multe componente putem sa comunicam si la luam mai multe date.
 Putem folosi acelasi dserviciu pentru a aducecsi trimite date.
Service is a broad category encompassing any value, function, or feature that an application needs.
A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well.
Exemplu:

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

interface Post {
  id: number;
  title: string;
  body: string;
}

@Injectable({ providedIn: 'root'})
export class DemoServiceService {

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<any> {
    return this.http.get('https:jsonplaceholder.typicode.com/posts')
  }

  getPost(): Observable<any> {
    return this.http.get('https:jsonplaceholder.typicode.com/posts/${id}')
  }
}
-----------------------------------------------------------------------------------------
----@Injectable()----
Decorator that marks a class as available to be provided and injected as a dependency.
 Marking a class with @Injectable ensures that the compiler will generate the necessary metadata to create
  the class's dependencies when the class is injected.


----- ngOnInit(): void {};----------------
Lifecycle Hooks

When Angular creates a Component,
        Renders it
        Creates and renders its children
        Destroys a component
These are lifecycle events. Angular will call specific methods if they are defined. One of its methods is  called ngOnInit.
Technically we don’t need to implement OnInit interface on the top as long as we have a method called ngOnInit()
defined in our class. Angular will automatically call this when it initializes our component but we use implement
 OnInt interface to add compile time checking, so when we define implement OnInit interface typescript ensures that
  we have a method called ngOnInit.

  So the lesson is, o not call the http services inside constructors. If you want initialization then do that in ngOnInit method.

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 posts: any[];
 private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http)
  {

  }

  ngOnInit() {
    this.http.get(this.url)
    .subscribe(response=> {
    console.log(response.json());
      this.posts = response.json();
    });
  }
 }
---------------------------------------------------------------------------------------------------
-------- Dependency Injection ---------------
 - is the process of injecting dependent object into a class from an external class
 - dependencies are services or objects that a given class must have to fulfill its function
 -angular can inject a dependency into a class's constructor by specifying a constructor parameter
    along with the dependency type

 Ex:
export class ListComponentComponent implements OnInit {

@Input()
list: string[];
postList:[] = [];

urlToimagne: string = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.vezicatface.ro%2Fimg%2FArticole%2FMASINA%2520mini%2520roz-min2.png&imgrefurl=https%3A%2F%2Fwww.vezicatface.ro%2Farticole%2Fmasini-second-hand-recomandate-pentru-femei&tbnid=07zHmVCdlq7TFM&vet=12ahUKEwi2-pOw1-X3AhXOt6QKHcC7BJkQMygFegUIARC9Ag..i&docid=vDM1xGglVC-0_M&w=1280&h=640&q=masina&ved=2ahUKEwi2-pOw1-X3AhXOt6QKHcC7BJkQMygFegUIARC9Ag"
altForImagine: string = "photo masina"

  constructor(private service: DemoServiceService) { }

  ngOnInit(): void {
  this.service.getPosts().subscribe(rezultat => { this.postList = rezultat} )
    console.log(this.postList)
  }

}
-------------------------------------------------------------------------------------------------------------

---ANGULAR ROUTING-------------
Allows you to build Single Page Application with multiple states and views using routes and components and allows
you to navigate on the client side and route between different components. The router is included in the @angular/router package.
A route is an object that provides information about which component maps specific path. Ex: https://www.w3schools.com/sass/sass_installation.php
the set of routes defines the configuration of the router.

In fisierul app-routing.module.ts se seteaza configurarile si rutele.
Ex:
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


---- Router-Outlet ------------------
Is a directive that is available in the router library, where router inserts a component that will be
 matched based on the current url browser.
Ex:
    <router-outlet></router-outlet>

--- Navigation Directives------
An angular router provides two navigation directives:
        - routerLink - Replaces the href attributr in <a> tags.
        - routerLinkActive - for marking the active link
Ex:   <a [routerlink]="'/students'">Students</a>


--- HTTP CLIENT------------
Angular provides a simplified HTTP client - HttpClient, which is used to communicate with the server and
allows you to download or upload data and access backend services







 */
/* and end with */

/* and end with */




























