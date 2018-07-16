const tokenizer = {
  root: [
    [/([@])\s*(Component)/, ['', { token: '', next: 'ngComponent' }]],
    [
      /(html(?:<.*?>?)?)?(`)/,
      ['', { token: '', nextEmbedded: 'html', next: '@endBacktick' }]
    ],
    [
      /(styled(?:\(.*?\)?)?|css|injectGlobal(?:<.*?>?)?)?(`)/,
      ['', { token: '', nextEmbedded: 'text/css', next: '@endBacktick' }]
    ]
  ],
  ngComponent: [
    [/\(/, { token: '', next: 'ngComponentProperties' }],
    [/\)/, { token: '', next: '@pop' }]
  ],
  ngComponentProperties: [
    [/\{/, { token: '', next: 'template' }],
    [/\}/, { token: '', next: '@pop' }]
  ],
  template: [
    [/^((?!(template|styles|}\))).)+$/, ''],
    [/template\s*:/, { token: '', next: 'ngTemplate' }],
    [/styles\s*:/, { token: '', next: 'ngStyleArray' }],
    [/}\)/, { token: '', next: '@popall' }]
  ],
  ngTemplate: [
    [
      /`/,
      {
        token: '',
        next: '@ngEndBacktick',
        nextEmbedded: 'html'
      }
    ]
  ],
  endBacktick: [
    [
      /`/,
      {
        token: '',
        switchTo: 'root',
        nextEmbedded: '@pop'
      }
    ]
  ],
  ngEndBacktick: [
    [
      /`/,
      {
        token: '',
        switchTo: 'template',
        nextEmbedded: '@pop'
      }
    ]
  ],
  ngStyleArray: [[/\[/, { token: '', next: 'ngStyle' }]],
  ngStyle: [
    [
      /`/,
      {
        token: '',
        next: 'ngEndBacktickStyle',
        nextEmbedded: 'text/css'
      }
    ]
  ],
  ngEndBacktickStyle: [
    [
      /\]/,
      {
        token: '',
        switchTo: 'template',
        nextEmbedded: '@pop'
      }
    ],
    [/`/, { token: '', next: '@pop' }]
  ]
}

export default tokenizer
