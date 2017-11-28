import { Incident } from '../report/incident';

export class Timer {
    incident: Incident;
    TIMER_START: number;
    TIMER_END: number;
    TIME_REMAINING: number;
    modify: boolean = false;
}