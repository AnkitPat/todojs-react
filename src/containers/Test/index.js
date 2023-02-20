import { useEffect, useState } from "react"

export default function Test() {
    const [value, setValue ]= useState('')

    useEffect(() => {
        fetch('/todos')
      .then(response => response.json())
      .then(json => console.log(json))

      fetch('ankitpatidar030g.korconnect.io/Search-Api') .then(response => response.json())
      .then(json => console.log(json))
    },[])
    return (
        <div>adfasf

            <input id=";asdfasf" value={value} />
            <button onClick={() => setValue('">"""""x><script>alert(%27xss%27)</script>')}>click me</button>
        </div>
    )
}