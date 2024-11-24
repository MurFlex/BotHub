export interface AbstractBotBlock {
    type: string,
    next?: string | Record<string, string> | null;
}

export interface MessageBlock extends AbstractBotBlock {
    type: 'sendMessage',
    message: string
}

export interface AskBlock extends AbstractBotBlock {
    type: 'askQuestion',
    question: string,
    options: string[]
}