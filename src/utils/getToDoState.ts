import { ToDoStateType } from '../common/types/todo-state.types'

export function getToDoState(pathname: string): ToDoStateType {
  if (pathname.includes('/all')) return 'all'
  if (pathname.includes('/undone')) return 'undone'
  if (pathname.includes('/done')) return 'done'

  return null
}
