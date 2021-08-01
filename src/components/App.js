import Banner from './Banner'
import logo from '../assets/logo.png'
// import Cart from './Cart'
import ShoppingList from './ShoppingList'
import QuestionForm from './QuestionForm'
import Footer from './Footer'

function App() {
  function handleSubmit(e){
    e.preventDefault()
    alert(e.target['my_input'].value)
  }
	return (
		<div>
			<Banner>
				<img src={logo} alt='Jungle House' className='jh-logo' />
				<h1 className='jh-title'>Jungle House</h1>
			</Banner>
			{/* <Cart /> */}
			<ShoppingList />
			<Footer/>
		</div>
	)
}

export default App
