import { useEffect} from 'react'

function useSaveToDatabase(keyName, keyValue) {

    useEffect(() => {
        console.log("render")
        function saveToDatabase(data) {
            localStorage.setItem(keyName, JSON.stringify(data))
        }

        saveToDatabase(keyValue)
    }, [keyName, keyValue]);
}

export default useSaveToDatabase
