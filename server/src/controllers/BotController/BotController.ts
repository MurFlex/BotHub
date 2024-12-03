import { AbstractController } from '../AbstractController'
import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'
import BotService from '../../services/BotService/BotService'
import { AskBlock, MessageBlock } from '../../types/botService.interface'

const mockBlocks: Record<string, MessageBlock | AskBlock> = {
    start: {
        type: 'sendMessage',
        message: 'Добро пожаловать! Какой ваш выбор?',
        next: 'question'
    },
    question: {
        type: 'askQuestion',
        question: 'Выберите действие:',
        options: ['Один', 'Два'],
        next: {
            'Один': 'sendOne',
            'Два': 'sendTwo'
        }
    },
    sendOne: {
        type: 'sendMessage',
        message: 'Вы выбрали первый вариант.',
        next: null
    },
    sendTwo: {
        type: 'sendMessage',
        message: 'Вы выбрали второй вариант.',
        next: null
    }
}

class BotController extends AbstractController {
    private botService: BotService

    constructor() {
        super()
        this.botService = new BotService(process.env.BOT_TOKEN!, mockBlocks)
    }

    public startBot = asyncHandler(
        async (req: Request, res: Response): Promise<void> => {
            this.botService.setupWebhook(process.env.WEBHOOK_URL!)
            res.sendStatus(200)
        }
    )

    public handleTelegramRequest = asyncHandler(
        async (req: Request, res: Response): Promise<void> => {
            this.botService.bot.processUpdate(req.body)
            res.sendStatus(200)
        }
    )
}

export default new BotController()