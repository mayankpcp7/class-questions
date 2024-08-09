export const FAQ_DATA = [
  {
    question: "1. What is HTML?",
    answer:
      "HTML, which stands for HyperText Markup Language, is the standard markup language used to create and structure content on the web. It provides the basic building blocks for web pages, allowing developers to define elements such as headings, paragraphs, links, images, and more. These elements are represented by tags, and the browser interprets these tags to display the content correctly to users.",
  },
  {
    question: "2. What is CSS?",
    answer:
      "CSS (Cascading Style Sheets) is a stylesheet language used for describing the presentation and visual appearance of a document written in HTML or XML. CSS defines how elements on a web page are displayed, including layout, colors, fonts, and other visual effects. It allows developers to create visually engaging web pages by separating the content from its design, enabling consistent styling across multiple pages.",
  },
  {
    question: "3. What is a function?",
    answer:
      "A function is a block of organized, reusable code that performs a specific task within a program. Functions are fundamental building blocks in many programming languages, allowing developers to divide a program into smaller, modular parts.",
  },
  {
    question: "4. How many types of components are available?",
    answer:
      "There are two types of components:\n\n1. Functional Components:\n   - Definition: These are stateless components that are typically written as JavaScript functions. They accept props as an argument and return JSX (in React) or a template (in Vue).\n   - Use Cases: Best suited for UI elements that do not require internal state management.\n\n2. Class Components:\n   - Definition: These are stateful components in React that are created using ES6 classes. They have lifecycle methods and can manage their own state.\n   - Use Cases: Used when a component needs to manage its own state or utilize lifecycle methods.",
  },
  {
    question: "5. what is hooks ?",
    answer:
      "In React, hooks are functions that let you use state and other React features without writing a class. They allow you to hook into React’s state and lifecycle features from function components. Hooks were introduced in React 16.8 to provide a more straightforward and functional way of managing state and side effects.",
  },
  {
    question: "6. How many types of hooks?",
    answer:
      "State Hook (<b>useState</b>): Allows you to add state to a functional component. You can manage state and update it in response to user actions or other events.<br/><br/>Effect Hook (<b>useEffect</b>): Lets you perform side effects in function components, such as fetching data, subscribing to events, or manually changing the DOM. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.<br/><br/>Context Hook (<b>useContext</b>): Provides a way to access context values without needing to wrap your components in a <Context.Consumer> component.<br/><br/>Reducer Hook (<b>useReducer</b>): An alternative to useState for more complex state logic, where the state depends on previous state and actions. It is similar to the reducer concept in Redux.<br/><br/>Memoization Hooks (<b>useMemo</b> and <b>useCallback</b>): Optimize performance by memoizing values or functions so that they are only recalculated or recreated when their dependencies change.<br/><br/>Ref Hook (<b>useRef</b>): Allows you to persist values between renders and access DOM elements directly.",
  },
  {
    question: "7. What is Lifecycle",
    answer:
      "In the context of React (and other frameworks), the term. lifecycle refers to the series of stages or phases that a component goes through from its creation to its removal from the DOM. Understanding the lifecycle of a component is crucial for effectively managing component behavior and performing various tasks at appropriate times.",
  },
 
];
