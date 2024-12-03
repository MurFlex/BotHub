import TelegramBot from 'node-telegram-bot-api'
import { AskBlock } from '../../../types/botService.interface'

export async function askQuestionHandler(
    bot: TelegramBot,
    chatId: number,
    block: AskBlock,
    userInput: string
): Promise<string | void> {
    if (!userInput) {
        const options = block.options.map((option) => ({
            text: option,
            callback_data: option
        }))
        await bot.sendMessage(chatId, block.question, {
            reply_markup: {
                inline_keyboard: [options]
            }
        })
    } else if (block.next && typeof block.next === 'object') {
        const nextBlockId = block.next[userInput]
        if (nextBlockId) {
            return nextBlockId
        } else {
            await bot.sendMessage(chatId, 'Неверный ответ.')
        }
    }
}