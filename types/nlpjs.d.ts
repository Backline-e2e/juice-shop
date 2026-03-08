declare module '@nlpjs/core-loader' {
  export function containerBootstrap (): Promise<any>
}

declare module '@nlpjs/nlp' {
  export class Nlp {
    settings: {
      languages?: string[]
      nlu?: any
      autoSave?: boolean
      autoLoad?: boolean
      modelFileName?: string
    }
    addDocument (locale: string, utterance: string, intent: string): void
    addAnswer (locale: string, intent: string, answer: any): void
    train (): Promise<void>
    process (locale: string, query: string): Promise<any>
  }
}
