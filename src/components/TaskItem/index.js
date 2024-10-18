import './index.css'

const TaskItem = props => {
  const {eachItem} = props
  return (
    <li className="list-item">
      <p className="task-name">{eachItem.taskName}</p>
      <p className="task-type">{eachItem.taskType}</p>
    </li>
  )
}

export default TaskItem
