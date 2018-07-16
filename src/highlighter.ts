import * as Monaco from 'monaco-editor'

import tokenizer from './tokenizer'

export let monaco: typeof Monaco

export interface Options {
  monaco: typeof Monaco
  editor: Monaco.editor.IStandaloneCodeEditor
}

class TemplateSyntax {
  private readonly editor: Monaco.editor.IStandaloneCodeEditor

  constructor(options: Options) {
    monaco = options.monaco
    this.editor = options.editor

    this.attachCommands()
  }

  public attachCommands() {
    monaco.languages.setMonarchTokensProvider('typescript', {tokenizer} as any)
    monaco.languages.setMonarchTokensProvider('javascript', {tokenizer} as any)
  }
}

export default TemplateSyntax
