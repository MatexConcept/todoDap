import './config/Connection'
import Layouts from './components/Layouts'
import CreateTodoModal from './components/CreateTodoModal'

const App = () => {
  return (
    <Layouts>
      <CreateTodoModal/>
    </Layouts>
  )
}

export default App
