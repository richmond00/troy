import axios, { AxiosResponse } from 'axios';
import { Eventing } from "./Eventing";

export class Collection<T, K> {
    models: T[] = [];
    events: Eventing = new Eventing();

    constructor(public rootUrl: string, public deserialized: (json: K) => T) {}

    get on() {
        return this.events.on;
    }
    get trigger() {
        return this.events.trigger;
    }

    fetch(): void {
        axios.get(this.rootUrl).then((response: AxiosResponse) => {
            response.data.forEach((value: K) => {
                this.models.push(this.deserialized(value));
            });
            this.trigger('change');
        })
    }
}