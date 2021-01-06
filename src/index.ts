import * as fs from 'fs';
import { EventEmitter } from 'events';
async function sleep(ms = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

export declare interface createFile {
    constructor(time: number, file: string, startmessage: string | boolean, endmessage: string | boolean): void;
    on(event: 'start', listener: (time: number, startmessage?: string) => void): this;
    on(event: 'time', listener: (time: string) => void): this;
    on(event: 'end', listener: (endmessage?: string) => void): this;
};

export class createFile extends EventEmitter {
    private data: string[] = [];
    constructor(time: number, file: string, startmessage: string | boolean, endmessage: string | boolean) {
        super();
        
        this.main(time, file, startmessage, endmessage);
    };

    async main(time: number, file: string, startmessage: string | boolean = false, endmessage: string | boolean = false) {
        if(time >= 3600) {
            this.data.push(new Date(time * 1000).toISOString().substr(11, 8).toString());
            for(var i = 0; i < time; i++) {
                this.data.push(new Date((time - i) * 1000).toISOString().substr(11, 8).toString());
            };
        } else {
            this.data.push(new Date(time * 1000).toISOString().substr(14, 5).toString());
            for(var i = 0; i < time; i++) {
                this.data.push(new Date((time - i) * 1000).toISOString().substr(14, 5).toString());
            };
        };
        this.data.shift();
        if(typeof startmessage === 'string' && startmessage != "") {
            this.data.unshift(startmessage);
        };
        if(typeof endmessage === 'string' && startmessage != "") {
            this.data.push(endmessage);
        };
        this.emit('start', (this.data[1], startmessage));
        for(const t of this.data) {
            this.emit('time', t);
            fs.writeFileSync(file, t, { encoding: "utf-8" });
            await sleep(1000);
        };
        this.emit('end', endmessage);
    };
};

export function timeArray(time: number, startmessage: string | boolean, endmessage: string | boolean) {
    var data: string[] = [];
    if(time >= 3600) {
        data.push(new Date(time * 1000).toISOString().substr(11, 8).toString());
        for(var i = 0; i < time; i++) {
            data.push(new Date((time - i) * 1000).toISOString().substr(11, 8).toString());
        };
    } else {
        data.push(new Date(time * 1000).toISOString().substr(14, 5).toString());
        for(var i = 0; i < time; i++) {
            data.push(new Date((time - i) * 1000).toISOString().substr(14, 5).toString());
        };
    };
    data.shift();
    if(typeof startmessage === 'string' && startmessage != "") {
        data.unshift(startmessage);
    };
    if(typeof endmessage === 'string' && startmessage != "") {
        data.push(endmessage);
    };
    return data;
};