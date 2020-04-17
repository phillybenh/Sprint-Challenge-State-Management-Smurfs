- [x] What problem does the context API help solve?

      The Context API eliminates the indeed for prop-drilling by allowing us to retrieve our data via the context object instead of props. 

- [x] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

      *Actions* - Actions JavaScript objects that include a type and payload. They send data from your application to your store (via the reducers)
      *Reducers* - Reducers specify how the application's state changes in response to actions
      *Store* - The store is an object that controls your applications state and can only be changed with `dispatch`. It’s known as the ‘single source of truth’ because the store object is the only singular location where state is stored in an immutable object tree. 

- [x] What is the difference between Application state and Component state? When would be a good time to use one over the other?

      Application state is global to your app, and component state is local to that component. The application state (like with Redux) is available anywhere in your app, but component state is only available to that component (or its children if passed down as props). A good time to use component state is with small apps or when the state isn’t needed elsewhere. Application state is preferred in larger applications when a lot of state needs to be managed. 

- [x] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

      Redux-thunk is middleware that allows us to interact with the store asynchronously. Middleware sits between our action creators and our reducers. Thunk makes the flow asynchronous and allows us to make API calls from our action creators.  

- [x] What is your favorite state management system you've learned and this sprint? Please explain why!

      Async Redux is my favorite. It was confusing to use at first, but seems to open up the most possibilities.