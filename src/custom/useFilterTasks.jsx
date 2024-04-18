import {useEffect} from 'react'

function useFilterTasks(setTasks, filter, tasks) {

    useEffect(() => {
        if (filter === "all") {
            setTasks(tasks)
        } else {
            setTasks(
                tasks.filter(task => task.completed === true)
            )
        }

    }, [setTasks, filter, tasks])


}

export default useFilterTasks
