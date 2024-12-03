import TelegramBot from 'node-telegram-bot-api'
import { MessageBlock } from '../../../types/botService.interface'

export async function sendMessageHandler(
    bot: TelegramBot,
    chatId: number,
    block: MessageBlock
): Promise<void> {
    if (block.message) {
        await bot.sendMessage(chatId, block.message)
    }
}