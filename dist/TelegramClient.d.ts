import { TelegramModuleOptionsFactory } from './TelegramModuleOptionsFactory';
import { Chat } from 'telegraf/typings/telegram-types';
export declare class TelegramClient {
    private telegram;
    constructor(factory: TelegramModuleOptionsFactory);
    sendMessage(chatId: string | number, text: string): Promise<void>;
    sendMarkdown(chatId: string | number, markdown: string): Promise<void>;
    getChat(chatId: string | number): Promise<Chat>;
}
