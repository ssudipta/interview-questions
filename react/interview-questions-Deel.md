#### Question 1: What is the difference between Component and PureComponent? Give an example where it might break my app.

Components are the fundamental unit in react. React allows us to use and reuse components and contains the logic as well as the UI. It helps to build the application easier

Pure Components are class based components that does a shallow comparison of state and props. If there is a change in the state or props, it re-renders

Suppose the props or state is an object, so if there change in the nested structure of the object, it might not re-render because of shallow comparison, since we store the reference of the object and not the object. This can lead to unexpected behaviour.


#### Question 2: Context + ShouldComponentUpdate might be dangerous. Why is that?

A component subscribing to a Context doesn't receive updates through props directly. Basically it listens to changes in the Context value via a Context Provider.

If you implement shouldComponentUpdate, you typically check for changes in props or state to decide if a re-render is needed. When a component subscribes to a Context, changes in Context don't affect props or state directly. This creates a risk of the component not re-rendering when the Context value changes.


#### Question 3: Describe 3 ways to pass information from a component to its PARENT.

- Callback Functions: A child component can call a function passed from the parent to send data back.
- React Context or any state management library: If both parent and child are within the same context provider, the child can update the context, which can then be read by the parent. For any state management library, the parent can access the same store as the child, allowing communication through the shared state.
- Event Emitters: An event emitter  can be used to allow a child component to emit events that the parent component listens to. 


#### Question 4: Give 2 ways to prevent components from re-rendering.

- Memoization: Using React.memo or useMemo to avoid re-renders when props or data hasn't changed.
- useRef: If you have data or references that don't need to trigger a re-render, use useRef to keep them constant. This avoids re-renders due to state changes when you only need a stable reference.


#### Questionn 5: What is a fragment and why do we need it? Give an example where it might break my app.

A fragment is a wrapper whcih when wrapped around multiple components will not introduce additional DOM nodes.
Example of breakage: If in a scenario, where we need to have an event handler on the top level and not on the child, Fragment will not work. Example: 

```javascript
const GroupEvent = () => {
    return (
        <div onClick= {()=>console.log('Group Event clicked')}>
            <div>event 1</div>
            <div>event 2</div>
        </div>
    )
}
```
with React.Fragment, this event trigger is not possible.

Also, apart from this, we cannot style on the parent if we had used Fragment instead of div since Fragment does not support className or style.


#### Question 6: Give 3 examples of the HOC pattern.

- withRouter: Used to wrap components with routing-related props.
- withAuth: HOC that adds authentication-related functionality to a component.
- connect: It allows you to map redux state and dispatch actions to component props.


#### Question 7: What's the difference in handling exceptions in promises, callbacks and async...await?

- Promises: Use .catch() to handle exceptions. This approach allows for chaining asynchronous operations and handling errors in a centralized manner.
- Callbacks: Exception handling is achieved by checking the first argument in a callback for an error. 
- async...await: With try/catch, you can manage exceptions more naturally, resembling synchronous code. The code is more readable.


#### Question 8: How many arguments does setState take and why is it async.

It takes an object (new state) and an optional callback function which run after the state is updated.
setState is async in nature because it does not update immediately due to React's reconciliation process. This ensures efficiency in re-renders and batching of state updates.


#### Question 9: List the steps needed to migrate a Class to Function Component.

- Replace class with a function declaration.
- Remove the constructor and this references.
- Convert lifecycle methods to React hooks (like useEffect)
- Change setState to useState hook.
- Update event handlers and context usage to work with function components.


#### Question 10: List a few ways styles can be used with components.

We can use inline styles, CSS Modules or styled components.


#### Question 11: How to render an HTML string coming from the server.

We can use dangerouslySetInnerHTML, but I have to look more on this concept.