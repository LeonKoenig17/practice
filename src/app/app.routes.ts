import { Routes } from '@angular/router';
import { App } from './app';
import { Todo } from './categories/header/todo/todo';
import { Calendar } from './categories/header/calendar/calendar';
import { Weather } from './categories/header/weather/weather';
import { Countdown } from './categories/header/countdown/countdown';
import { ExpenseTracker } from './categories/finance/expense-tracker/expense-tracker';
import { Budget } from './categories/finance/budget/budget';
import { Subscriptions } from './categories/finance/subscriptions/subscriptions';
import { GroceryList } from './categories/groceries/grocery-list/grocery-list';
import { Notes } from './categories/groceries/notes/notes';
import { Recipes } from './categories/groceries/recipes/recipes';
import { WeightTracker } from './categories/travel/weight-tracker/weight-tracker';
import { FlightTracker } from './categories/travel/flight-tracker/flight-tracker';
import { HotelTracker } from './categories/travel/hotel-tracker/hotel-tracker';
import { Projects } from './categories/data/projects/projects';
import { HomeInventory } from './categories/data/home-inventory/home-inventory';
import { Library } from './categories/data/library/library';
import { Knowledge } from './categories/data/knowledge/knowledge';
import { SmartControl } from './categories/data/smart-control/smart-control';
import { PhoneMonitoring } from './categories/data/phone-monitoring/phone-monitoring';
import { Home } from './home/home';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'todo', component: Todo},
    {path: 'calendar', component: Calendar},
    {path: 'weather', component: Weather},
    {path: 'countdown', component: Countdown},
    {path: 'expense-tracker', component: ExpenseTracker},
    {path: 'budget', component: Budget},
    {path: 'subscriptions', component: Subscriptions},
    {path: 'grocery-list', component: GroceryList},
    {path: 'notes', component: Notes},
    {path: 'recipes', component: Recipes},
    {path: 'weight-tracker', component: WeightTracker},
    {path: 'flight-tracker', component: FlightTracker},
    {path: 'hotel-tracker', component: HotelTracker},
    {path: 'projects', component: Projects},
    {path: 'home-inventory', component: HomeInventory},
    {path: 'digital-library', component: Library},
    {path: 'personal-knowledge', component: Knowledge},
    {path: 'smart-home-control', component: SmartControl},
    {path: 'phone-usage-monitoring', component: PhoneMonitoring},
];
