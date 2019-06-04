
In the project directory, you can run:

(make sure to npm install first!)

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Component Flow

* Presentational components (no app state) --> src/components/
* Stateful components --> src/containers/
* Action list --> src/constants/actionTypes
* Action logic --> src/actions/
* API calls --> src/services/

## Data Flow

`user-event -> action -> service -> response from api -> action -> reducer update -> component change`<br/>
(with api call)


`user-event -> action -> reducer update -> component change`<br/>
(without api call but using app state like for an update that affects multiple components listening to the same state slice/reducer)

## State Management

Reducers (src/reducers) listen for a dispatched action and update a slice of state. Reference that reducer in the mapStateToProps function/const for your connected component.

## Dispatching Actions

Actions get dispatched through a redux connected component in the mapDispatchToProps function/const or through passing the dispatch as props to a stateless component. They are listed in the constants/actionTypes file.
