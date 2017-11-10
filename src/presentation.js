// @ts-check
// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  CodePane,
  Fit,
  Fill
} from 'spectacle';
import 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'spectacle-theme-nova/syntax/prism-javascript';
import 'spectacle-theme-nova/syntax/prism.nova.css';
import createTheme from 'spectacle-theme-nova/bundle';
import jest from './images/jest.svg';

const theme = createTheme('avon');

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        theme={theme}
        progress="bar"
        transition={['fade']}
        transitionDuration={100}
      >
        <Slide bgColor="gray1">
          <Heading textColor="orange" size={2} textAlign="left">
            Testing React Applications:
          </Heading>
          <Heading
            textColor="orange"
            size={1}
            margin="10px 0 0"
            textAlign="left"
          >
            Tips & Tricks
          </Heading>
          <Heading
            size={4}
            textColor="blue"
            textAlign="left"
            margin="40px 0 0 0"
          >
            Axel Hernández (@axelhzf)
          </Heading>
        </Slide>
        <Slide>
          <Heading1>Summary</Heading1>
          <List>
            <ListItem>Testing React components</ListItem>
            <ListItem>Testing Redux applications</ListItem>
            <ListItem>End to end tests</ListItem>
            <ListItem>Testing React Native applications</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading1>Why you should test?</Heading1>
          <List>
            <ListItem>Ensure that code works as expected</ListItem>
            <ListItem>Add a new feature safely</ListItem>
            <ListItem>Refactoring safely</ListItem>
            <ListItem>Helps to understand existing code</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading1>Types of tests</Heading1>
          <Image src={require('./images/pyramid.png')} />
        </Slide>
        <Slide>
          <Heading1>Tools</Heading1>
        </Slide>
        <Slide>
          <Heading1>Jest</Heading1>
          <Image src={jest} width={300} />
        </Slide>
        <Slide>
          <Heading1>Why Jest?</Heading1>
          <List>
            <ListItem>Performance</ListItem>
            <ListItem>Watch mode</ListItem>
            <ListItem>Snapshot testing</ListItem>
            <ListItem>Constant improvement</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading1>Types of components</Heading1>
        </Slide>
        <Slide bgColor="gray1">
          <Heading1 textColor="green">Stateless component</Heading1>
          <JSPane>
            {`
export function Message() {
  return 'Hello world';
}
            `}
          </JSPane>
        </Slide>
        <Slide bgColor="gray1">
          <Heading1 textColor="green">Stateless using JSX</Heading1>
          <JSPane>
            {`
export function Message() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <h2>World</h2>
    </div>
  );
}
            `}
          </JSPane>
        </Slide>
        <Slide>
          <Heading1>What is JSX?</Heading1>
          <Text>
            <a
              target="_blank"
              href="https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=GYVwdgxgLglg9mABAYTgWwA4IKZigCgEpEBvAKEUQCdsoQql8LLEAeAExgDdEIAbAIYBnIQDkBabAF4ARBARQBMMNioyAfMxZsAFgEZ1ACWx8-cRAHc4VPu1YB6fZu2UO3dQBUdMIYh-IBRAApAGUADURsAA8JDD5sB04uZxZE90pmQgBuAEgMgF8gA&debug=false&circleciRepo=&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-2&targets=&version=6.26.0"
            >
              See how JSX is transpiled
            </a>
          </Text>
        </Slide>
        <Slide>
          <Heading1>react-test-renderer</Heading1>
          <Text>
            React renderer that can be used to render React components to pure
            JavaScript objects, without depending on the DOM or a native mobile
            environment
          </Text>
        </Slide>
        <Slide bgColor="gray1">
          <JSPane>
            {`
const ReactTestRenderer = require('react-test-renderer');

const renderer = ReactTestRenderer.create(
  <Link page="https://www.facebook.com/">Facebook</Link>
);

console.log(renderer.toJSON());
// { type: 'a',
//   props: { href: 'https://www.facebook.com/' },
//   children: [ 'Facebook' ] }
`}
          </JSPane>
        </Slide>
        <Slide bgColor="gray1">
          <Heading1 textColor="green">Snapshot testing</Heading1>
          <JSPane>
            {`
    const renderer = ReactTestRenderer.create(<Message />);
    expect(renderer.toJSON()).toMatchSnapshot();
`}
          </JSPane>
        </Slide>
        <Slide>
          <Image src={require('./images/snapshot-fail.png')} />
        </Slide>
        <Slide bgColor="gray1">
          <Heading1 textColor="green">Components with props</Heading1>
          <JSPane>
            {`
export class Button extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string
  };
  render() {
    const { disabled, label } = this.props;
    return <button disabled={disabled}>{label}</button>;
  }
}
          `}
          </JSPane>
        </Slide>
        <Slide bgColor="gray1">
          <Heading1 textColor="green">Components with state</Heading1>
          <JSPane>
            {`
export class Counter extends React.Component {
  state = { value: 0 };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ value: this.state.value + 1 });
    }, 1000);
  }
  render() {
    return <div>{this.state.value}</div>;
  }
}
`}
          </JSPane>
        </Slide>
        <Slide>
          <Heading1>Enzyme</Heading1>
          <Text>
            Enzyme is a JavaScript Testing utility for React that makes it
            easier to assert, manipulate, and traverse your React Components'
            output.
          </Text>
        </Slide>
        <Slide bgColor="gray1">
          <JSPane>
            {`

const wrapper = shallow(<MyComponent />);
expect(wrapper.find(Foo))
  .to.have.length(3);
expect(wrapper.find('.icon-star'))
  .to.have.length(1);
expect(wrapper.contains(<div className="unique" />))
  .to.equal(true);
wrapper.find('button').simulate('click');
          `}
          </JSPane>
        </Slide>
        <Slide>
          <Heading1>Shallow vs Mount</Heading1>
          <List>
            <ListItem>
              <strong>Shallow</strong>: Isolation, no children render
            </ListItem>
            <ListItem>
              <strong>Mount</strong>: Full DOM rendering
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="gray1">
          <Heading1 textColor="green">Components with user events</Heading1>
          <JSPane>
            {`
export class Counter extends React.Component {
  render() {
    return (
      <div onKeyPress={this.handleKeyPress}>
        <div>{this.state.value}</div>
        <button onClick={this.handleResetClick}>
          Reset
        </button>
      </div>
    );
  }
}
`}
          </JSPane>
        </Slide>
        <Slide bgColor="gray1">
          <JSPane>
            {`
wrapper.find('button').simulate('click');
wrapper.find('.container').simulate('keyPress', { key: 'r' });
      `}
          </JSPane>
        </Slide>
        <Slide bgColor="gray1">
          <Heading1 textColor="green">Components with render prop</Heading1>
          <JSPane>
            {`
export class Counter extends React.Component {
  render() {
    return (
      <div>
        {this.props.render({
          value: this.state.value,
          reset: this.handleResetClick
        })}
      </div>
    );
  }
}
`}
          </JSPane>
        </Slide>
        <Slide>
          <List>
            <ListItem>
              <Link
                href="https://github.com/paypal/downshift"
                title="paypal / downshift"
              />
            </ListItem>
            <ListItem>
              <Link
                href="https://www.youtube.com/watch?v=BcVAq3YFiuc"
                title="Michael Jackson - Never Write Another HoC"
              />
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="gray1">
          <Heading1 textColor="green">HoC</Heading1>
          <JSPane>
            {`
export default function withLabel(Component) {
  return class WithLabel extends React.Component {
    render() {
      const { label, ...other } = this.props;
      return (
        <div className="withLabel">
          <label>{this.props.label}</label>
          <div className="content">
            <Component {...other} />
          </div>
        </div>
      );
    }
  };
}
`}
          </JSPane>
        </Slide>
        <Slide>
          <Heading1>Redux</Heading1>
          <img src={require('./images/redux.gif')} style={{ width: '80%' }} />
        </Slide>
        <Slide>
          <Heading1>Testing Redux</Heading1>
        </Slide>
        <Slide>
          <Heading1>Testing Redux Async Actions</Heading1>
        </Slide>
        <Slide>
          <Heading1>End to end tests</Heading1>
        </Slide>
        <Slide>
          <Image src={require('./images/cypress.png')} />
        </Slide>
        <Slide>
          <Heading1>Why cypress?</Heading1>
          <List>
            <ListItem>Time travel</ListItem>
            <ListItem>Debuggability</ListItem>
            <ListItem>Real time reload</ListItem>
            <ListItem>Automatic waiting</ListItem>
            <ListItem>No more selenium</ListItem>
          </List>
        </Slide>
        <Slide bgColor="gray1">
          <JSPane>
            {`
cy.visit('http://todomvc.com/examples/react')
cy.get('.new-todo').type('TODO 1').type('{enter}');
cy.get('.view').should('have.length', 3);
cy.get('.view').last().find('.toggle').click();
cy.get('.completed').should('have.length', 1);
cy.get('.todo-count').should('contain', '2 items left');
            `}
          </JSPane>
        </Slide>
        <Slide>
          <Heading1>React native</Heading1>
        </Slide>
        <Slide>
          <Heading1>Unit testing in react native</Heading1>
        </Slide>
        <Slide>
          <Heading1>E2E in react native</Heading1>
          <List>
            <ListItem>
              <Link href="https://github.com/wix/detox" title="wix/detox" />
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading1>Style guide testing</Heading1>
          <List>
            <ListItem>
              <Link
                href="https://github.com/styleguidist/react-styleguidist"
                title="styleguidist/react-styleguidist"
              />
            </ListItem>
            <ListItem>
              <Link
                href="https://github.com/styleguidist/snapguidist"
                title="snapguidist"
              />
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}

const Heading1 = props => <Heading size={2} textColor="primary" {...props} />;

const JSPane = ({ children }) => (
  <CodePane textSize="1.5rem" lang="javascript" source={children} />
);

const Link = ({ href, title }) => (
  <a href={href} target="_blank">
    {title || href}
  </a>
);
