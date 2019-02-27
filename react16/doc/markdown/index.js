import './index.less'
import markdownit from 'markdown-it'
import React from 'react'
import ReactDOM from 'react-dom'
import hljs from 'highlight.js'

const md = new markdownit({
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs doc-code"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>'
      } catch (__) {}
    }

    return '<pre class="hljs doc-code"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
  }
})

export default class Markdown extends React.Component {
  componentDidMount () {
    fetch(`../${this.props.name}/${this.props.name}.md`)
      .then((res) => {
        return res.text()
      })
      .then((res) => {
        const node = ReactDOM.findDOMNode(this)
        $(node).html(md.render(res))
        $('.doc-code').addClass('md-show').on('click', function () {
          $(this).removeClass('md-show')
        })
      })
  }
  render () {
    return <div className='saas-markdown-code' />
  }
}
