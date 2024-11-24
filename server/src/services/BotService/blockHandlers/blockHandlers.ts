import { sendMessageHandler } from './sendMessage'
import { askQuestionHandler } from './askQuestion'
import { AbstractBotBlock, MessageBlock, AskBlock } from '../../../types/botService.interface'
import TelegramBot from 'node-telegram-bot-api'

export const blockHandlers: Record<
    string,
    {
        handler: (bot: TelegramBot, chatId: number, block: AbstractBotBlock, userInput?: string) => Promise<string | void>
        isValidBlock: (block: AbstractBotBlock) => boolean
    }
> = {
    sendMessage: {
        handler: async (bot, chatId, block) => {
            if (isMessageBlock(block)) {
                await sendMessageHandler(bot, chatId, block)
            }
        },
        isValidBlock: (block): block is MessageBlock => block.type === 'sendMessage' && 'message' in block
    },
    askQuestion: {
        handler: async (bot, chatId, block, userInput) => {
            if (isAskBlock(block)) {
                return await askQuestionHandler(bot, chatId, block, userInput!)
            }
        },
        isValidBlock: (block): block is AskBlock => block.type === 'askQuestion' && 'question' in block && 'options' in block
    }
}

export function isMessageBlock(block: AbstractBotBlock): block is MessageBlock {
    return block.type === 'sendMessage' && 'message' in block
}

export function isAskBlock(block: AbstractBotBlock): block is AskBlock {
    return block.type === 'askQuestion' && 'question' in block && 'options' in block
}
