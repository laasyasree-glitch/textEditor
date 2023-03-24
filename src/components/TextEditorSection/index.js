import {Component} from 'react'
import {AiOutlineUnderline} from 'react-icons/ai'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {Button, Container, Content} from './styledComponents'

class TextEditorSection extends Component {
  state = {
    bold: false,
    italic: false,
    underLine: false,
  }

  ClickBold = () => this.setState(ps => ({bold: !ps.bold}))

  ClickItalic = () => this.setState(ps => ({italic: !ps.italic}))

  ClickUnderline = () => this.setState(ps => ({underLine: !ps.underLine}))

  renderText = () => {
    const {bold, italic, underLine} = this.state

    return (
      <Content
        isBold={bold}
        isItalic={italic}
        isUnderLine={underLine}
        type="text"
      />
    )
  }

  render() {
    const {bold, italic, underLine} = this.state
    return (
      <Container>
        <h1>Text Editor</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
          alt="text editor"
        />
        <ul>
          <li>
            <Button data-testid="bold" isActive={bold} onClick={this.ClickBold}>
              <VscBold size={25} />
            </Button>
          </li>
          <li>
            <Button
              data-testid="italic"
              isActive={italic}
              onClick={this.ClickItalic}
            >
              <GoItalic size={25} />
            </Button>
          </li>
          <li>
            <Button
              data-testid="underline"
              isActive={underLine}
              onClick={this.ClickUnderline}
            >
              <AiOutlineUnderline size={25} />
            </Button>
          </li>
        </ul>
        {this.renderText()}
      </Container>
    )
  }
}

export default TextEditorSection
