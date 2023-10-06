import { create } from 'zustand';

export const useTodoStore = create((set) => ({
  taskList: {
    todo: {
      title: 'POR HACER',
      listName: 'todo',
      id: 1,
      tasks: [],
    },
    inProgress: {
      id: 2,
      listName: 'inProgress',
      title: 'EN CURSO',
      tasks: [],
    },
    done: {
      id: 1,
      listName: 'done',
      title: 'LISTO',
      tasks: [],
    },
  },
  addTask: (listId, task) => set((state) => {
    const existingTasks = state.taskList[listId].tasks;
    const isDuplicate = existingTasks.some((existingTask) => existingTask.id === task.id);
    if (!isDuplicate) {
        const updatedTasks = [...existingTasks, task];
        return {
            ...state,
            taskList: {
                ...state.taskList,
                [listId]: {
                ...state.taskList[listId],
                tasks: updatedTasks,
                },
            },
        };
    }
    return state;
  }),
  setTaskList: (updatedTaskList) =>
    set((state) => ({
      ...state,
      taskList: updatedTaskList,
    })),
  removeTask: (listId, taskId) => set((state) => {
    const updatedTasks = state.taskList[listId].tasks.filter((task) => task.id !== taskId);
    return {
      ...state,
      taskList: {
        ...state.taskList,
        [listId]: {
          ...state.taskList[listId],
          tasks: updatedTasks,
        },
      },
    };
  }),
}));
