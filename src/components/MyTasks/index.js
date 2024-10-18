import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import OptionItem from '../OptionItem'
import TaskItem from '../TaskItem'
import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    tagList: tagsList,
    tagType: tagsList[0].displayText,
    taskInput: '',
    taskList: [],
    activeTag: 'INITIAL',
  }

  gettingTaskInput = e => {
    this.setState({
      taskInput: e.target.value,
    })
  }

  gettingTag = e => {
    this.setState({
      tagType: e.target.value,
    })
  }

  renderTasks = e => {
    e.preventDefault()
    const {tagType, taskInput} = this.state
    const task = {id: uuidv4(), taskName: taskInput, taskType: tagType}

    this.setState(prevState => ({
      taskList: [...prevState.taskList, task],
      taskInput: '',
      tagType: tagsList[0].displayText,
    }))
  }

  renderCreateTask = () => {
    const {tagList, taskInput, tagType} = this.state
    return (
      <div className="create-task-container">
        <h1 className="create-task-heading">Create a task!</h1>
        <form className="form-container" onSubmit={this.renderTasks}>
          <div className="form-container">
            <label htmlFor="task" className="label-text">
              Task
            </label>
            <input
              id="task"
              placeholder="Enter the task here"
              className="text-input"
              value={taskInput}
              onChange={this.gettingTaskInput}
            />
          </div>
          <div className="form-container">
            <label htmlFor="tags" className="label-text">
              tags
            </label>
            <select
              id="tags"
              className="select-option"
              onChange={this.gettingTag}
              value={tagType}
            >
              {tagList.map(eachItem => (
                <option value={eachItem.optionId} key={eachItem.optionId}>
                  {eachItem.displayText}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="task-button">
            Add Task
          </button>
        </form>
      </div>
    )
  }

  renderAciveTab = id => {
    this.setState(prevState => ({
      activeTag: prevState.activeTag === id ? 'INITIAL' : id,
    }))
  }

  renderdisplayTask = () => {
    const {tagList, taskList, activeTag} = this.state
    const filterTaskList =
      activeTag === 'INITIAL'
        ? taskList
        : taskList.filter(each => each.taskType === activeTag)
    return (
      <div className="dispay-text-container">
        <h1 className="tag-heading">Tags</h1>
        <ul className="option-tags">
          {tagList.map(eachItem => (
            <OptionItem
              key={eachItem.optionId}
              eachItem={eachItem}
              renderAciveTab={this.renderAciveTab}
              isActive={activeTag === eachItem.displayText}
            />
          ))}
        </ul>
        <h1 className="tag-heading">Tasks</h1>
        {filterTaskList.length === 0 ? (
          <div className="no-task-container">
            <p className="no-task-heading">No Tasks Added Yet</p>
          </div>
        ) : (
          <ul className="task-container">
            {filterTaskList.map(eachItem => (
              <TaskItem key={eachItem.id} eachItem={eachItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }

  render() {
    return (
      <div className="my-task-container">
        {this.renderCreateTask()}
        {this.renderdisplayTask()}
      </div>
    )
  }
}

export default MyTasks
