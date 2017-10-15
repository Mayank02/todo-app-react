import React from 'react';
import { connect } from 'react-redux';
import { postNewTask } from '../redux/reducers/reducer';

const Header = (props) => {
  return (
    <header id="header">
      <div className="content col-sm-12 col-md-12 col-lg-6 text-center">
        <h2>To-Do App!</h2>
        <form onSubmit={evt => {
          evt.preventDefault();
          props.postNewTask(evt.target.taskName.value);
          evt.target.taskName.value = "";
        }
        }>
          <div className="form-group">
            <label for="exampleInputEmail1">Add New To-Do</label>
            <input autoComplete="off" className="form-control input-lg" name="taskName" placeholder="Enter new task" />
          </div>
          <button type="submit">Add Task</button>
        </form>
      </div>
    </header>
  );
};


const mapDispatch = {postNewTask};
export default connect(null, mapDispatch)(Header);
