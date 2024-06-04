import { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUsers.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUsers = (props) => {    
    // const [enteredUserName, setEnteredUserName] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const inputNameRef = useRef();
    const inputAgeRef = useRef();

    const addUserHandler = (event) => {
        event.preventDefault();
        const inputUserName = inputNameRef.current.value;
        const inputUserAge = inputAgeRef.current.value;

        console.log(inputNameRef.current.value);
        console.log(inputAgeRef.current.value);
        if(inputUserName.trim().length === 0 || inputUserAge.trim().length ===0){
            setError({
                title : 'Invalid input',
                message : 'please enter valid username and age (non-empty) values',
            });
            return;
        }
        if(+inputUserAge < 1){
            setError({
                title : 'Invalid input',
                message : 'please enter valid age (> 0) values',
            });
            return;
        }
        props.onAddUser(inputUserName,inputUserAge);
        // console.log(enteredUserName,enteredAge);
        // setEnteredUserName('');
        // setEnteredAge('');

        inputNameRef.current.value='';
        inputAgeRef.current.value='';
    };

    // const userNameInputHandler = (event) => {
    //     setEnteredUserName(event.target.value);
    //     console.log(event.target.value);
    // }
    // const ageInputHandler = (event) => {
    //     setEnteredAge(event.target.value);
    //     console.log(event.target.value);
    // }
    const inputErrorHandler = () => {
        setError(null);
    }
    return(
        <div>
            {error && <ErrorModal onConfirm={inputErrorHandler} title={error.title} message={error.message}/>}
                <Card className={classes.input}>
                    <form onSubmit={addUserHandler}>
                        <label htmlFor="userName">Name</label>
                        <input id="userName" ref={inputNameRef} type="text" />
                        <label htmlFor="age">Age(Years)</label>
                        <input id="age" type="number" ref={inputAgeRef} />
                        <Button type="submit">Add User</Button>
                    </form>
                </Card>    
        </div>        
    );
}

export default AddUsers