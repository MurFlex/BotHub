import TelegramBot from 'node-telegram-bot-api'
import { getBlockHandler } from './utils/getBlockHandler'
import { AbstractBotBlock } from '../../types/botService.interface'
import { blockHandlers } from './blockHandlers/blockHandlers'

class BotService {
    public bot: TelegramBot
    private currentNode: string = ''
    private readonly blocks: Record<string, AbstractBotBlock> = {}

    constructor(token: string, blocksConfig: Record<string, AbstractBotBlock>, startNode = 'start') {
        this.bot = new TelegramBot(token, { polling: true })
        this.blocks = blocksConfig
        this.currentNode = startNode

        this.bot.on('message', async (msg) => {
            const chatId = msg.chat.id
            const userInput = msg.text || ''
            await this.processBlock(chatId, userInput)
        })

        this.bot.on('callback_query', async (query) => {
            if (!query.message?.chat.id) {
                await this.bot.sendMessage(
                    query.message?.chat?.id ?? 0,
                    'Не удалось определить чат ID.'
                ) // TODO: Нужно заменить на отправку логов куда-нибудь
                return
            }

            const chatId = query.message.chat.id
            const userInput = query.data!
            await this.processBlock(chatId, userInput)
        })
    }

    public setupWebhook(url: string): void {
        this.bot.setWebHook(url)
    }

    private async processBlock(chatId: number, userInput: string): Promise<void> {
        const block = this.blocks[this.currentNode]

        if (!block) {
            await this.bot.sendMessage(chatId, 'Сценарий завершен.')
            return
        }

        const handler = getBlockHandler(block.type)
        const isValid = blockHandlers[block.type]?.isValidBlock

        if (!handler || !isValid || !isValid(block)) {
            await this.bot.sendMessage(chatId, 'Неизвестный или некорректный блок.')
            return
        }

        const nextBlockId = await handler(this.bot, chatId, block, userInput)

        if (nextBlockId) {
            this.currentNode = nextBlockId
            await this.processBlock(chatId, '')
        } else if (block.next && typeof block.next === 'string') {
            this.currentNode = block.next
            await this.processBlock(chatId, '')
        }
    }

}

export default BotService
