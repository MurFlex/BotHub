import TelegramBot from 'node-telegram-bot-api'
import { AbstractBotBlock } from '../../../types/botService.interface'
import { blockHandlers } from '../blockHandlers/blockHandlers'

export function getBlockHandler(
    type: string
): ((bot: TelegramBot, chatId: number, block: AbstractBotBlock, userInput?: string) => Promise<string | void>) | undefined {
    const blockConfig = blockHandlers[type]
    return blockConfig?.handler
}