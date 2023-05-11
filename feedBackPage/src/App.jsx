import './App.css'
import FeedBack from './components/FeedBack'

function App() {

  return (
    <>
      <h1>Feed Back Page using React</h1>
      <div className="card">
        <FeedBack />
      </div>
      <div>
        <h4 className="read-the-docs">
          Check github repo to see the code!
        </h4>
        <a href='https://github.com/jonriber/feed-back-page'>Here!</a>
      </div>
      
      <footer><strong>Jonatas Ribeiro</strong>. 2023 #</footer>
    </>
  )
}

export default App
