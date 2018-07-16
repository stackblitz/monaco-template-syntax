import * as Monaco from 'monaco-editor'

import TemplateSyntax from '../src'
import { source } from './mock-data'

const global = window as Window & {
  require: any
  monaco: typeof Monaco
}

const { require: $require } = global

// Set base path
$require.config({
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor/dev/vs'
  }
})

$require(['vs/editor/editor.main'], () => {
  const { monaco } = global

  const editor = monaco.editor.create(document.getElementById('demo'), {
    value: source,
    language: 'typescript'
  })
  monaco.editor.setTheme('vs-dark')

  const templateSyntax = new TemplateSyntax({ monaco, editor })
  ;(window as any).monaco = monaco
  ;(window as any).editor = editor
})
