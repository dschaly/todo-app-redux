import { Provider } from "react-redux"
import store from "./redux/store"


function App() {

  return (
    <Provider store={store}>
      <h1 className="text-5xl">aaa</h1>
    </Provider>
  )
}

export default App;