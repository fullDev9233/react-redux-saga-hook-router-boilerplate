import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList';

const mapStateToProps = state => {
    console.log(state.toDoList);
    return {
        toDoList: state.toDoList
    };
};

const ToDoListContainer = connect(mapStateToProps)(ToDoList);

export default ToDoListContainer;