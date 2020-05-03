/// <reference types="node" />
import { ModuleRef } from '@nestjs/core';
import { TelegramModuleOptionsFactory } from './TelegramModuleOptionsFactory';
import { InputFile } from 'telegraf/typings/telegram-types';
export declare class TelegramBot {
    private readonly sitePublicUrl?;
    private readonly bot;
    private ref;
    constructor(factory: TelegramModuleOptionsFactory);
    init(ref: ModuleRef, devMode?: boolean): void;
    getMiddleware(path: string, cert?: InputFile): (req: import("http").IncomingMessage, res: import("http").ServerResponse) => void;
    startPolling(): void;
    private createHandlers;
    private setupOnStart;
    private setupOnMessage;
    private setupOnCommand;
    private adoptHandle;
    private createCatch;
}
