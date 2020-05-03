import { MiddlewareConsumer, NestModule, DynamicModule } from '@nestjs/common';
import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
import { TelegramModuleOptionsFactory } from './TelegramModuleOptionsFactory';
interface TelegramFactory extends Pick<ModuleMetadata, 'imports'> {
    useClass?: Type<TelegramModuleOptionsFactory>;
    inject?: any[];
}
export declare class TelegramModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void;
    static fromFactory(factory: TelegramFactory): DynamicModule;
}
export {};
