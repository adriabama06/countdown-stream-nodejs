/// <reference types="node" />
import { EventEmitter } from 'events';
export declare interface createFile {
    constructor(time: number, file: string, startmessage: string | boolean, endmessage: string | boolean): void;
    on(event: 'start', listener: (time: number, startmessage?: string) => void): this;
    on(event: 'time', listener: (time: string) => void): this;
    on(event: 'end', listener: (endmessage?: string) => void): this;
}
export declare class createFile extends EventEmitter {
    private data;
    constructor(time: number, file: string, startmessage: string | boolean, endmessage: string | boolean);
    main(time: number, file: string, startmessage?: string | boolean, endmessage?: string | boolean): Promise<void>;
}
export declare function timeArray(time: number, startmessage: string | boolean, endmessage: string | boolean): string[];
//# sourceMappingURL=index.d.ts.map