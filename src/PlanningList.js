import { Component } from 'react';
import icon from './icon.png'

export class PlanningList extends Component {
    state =  {
        userInput: "",
        userInputStorage: [],
    }

    // option 1
    // onChangeEvent(event) {
    //     console.log(event.target.value)
    // } 

    onChangeEvent(event) {
        this.setState({ userInput: event })
        console.log(event)
    }


    addItem(input) {
        if (input === '') {
            alert('Please enter an item')
        }

        else {
            let listArray = this.state.userInputStorage;
            listArray.push(input)
            this.setState({ userInputStorage: listArray, userInput: '' })
            console.log(listArray)
        }
    }

    deleteItem() {
        let listArray = this.state.userInputStorage;
        listArray = [];
        this.setState({ userInputStorage: listArray })
    }


    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }


    onFormSubmit(event) {
        event.preventDefault()
    }


    render() {
        return(
            <div>
                <form onSubmit={ this.onFormSubmit }>
                    <div className='container'>
                        <input type='text'
                            placeholder="Plans for the day..." 
                            // onChange={ this.onChangeEvent } option 1
                            onChange={ (event) => {this.onChangeEvent(event.target.value)} }
                            value={ this.state.userInput }
                            />
                    </div>

                    <div className='container'>
                        <button onClick={ () => this.addItem(this.state.userInput) } className='add'>Add</button>
                    </div>

                    <div className='container'>
                        <ul>
                        { this.state.userInputStorage.map((item, index) => (
                            <li onClick={ this.crossedWord } key={ index }>
                                <img src={ icon }/> { item }</li>
                        ))}
                        </ul>
                    </div>

                    <div className='container'>
                        <button onClick={ () => this.deleteItem() } className='delete'>Clear the List</button>
                    </div>
                </form>
            </div>
            
        )
    }
}

