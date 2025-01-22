import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateNewProjectComponent } from './topics/create-new-project/create-new-project.component';
import { TemplateBasicsComponent } from './topics/template-basics/template-basics.component';
import { ControlFlowComponent } from './topics/control-flow/control-flow.component';
import { ComponentCommunicationComponent } from './topics/component-communication/component-communication.component';
import { RoutingComponent } from './topics/routing/routing.component';
import { FormsDataComponent } from './topics/forms-data/forms-data.component';
import { DataFormattingComponent } from './topics/data-formatting/data-formatting.component';
import { WeatherComponent } from './weather/weather.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Learning Angular',
    component: HomeComponent
  },
  {
    path: 'topics',
    children: [
      {
        path: 'create-new-project',
        title: 'Create a New Project',
        component: CreateNewProjectComponent
      },
      {
        path: 'template-basics',
        title: 'Template Basics',
        component: TemplateBasicsComponent
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        component: ControlFlowComponent
      },
      {
        path: 'component-communication',
        title: 'Component Communication',
        component: ComponentCommunicationComponent
      },
      {
        path: 'routing',
        title: 'Routing & Navigation',
        component: RoutingComponent
      },
      {
        path: 'forms-data',
        title: 'Forms & Data',
        component: FormsDataComponent
      },
      {
        path: 'data-formatting',
        title: 'Data Formatting',
        component: DataFormattingComponent
      }
    ]
  },
  {
    path: 'weather',
    title: 'Weather',
    component: WeatherComponent
  },
  {
    path: 'contact-me',
    title: 'Contact Me',
    component: ContactMeComponent
  }
];
