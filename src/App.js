import logo from "./logo.svg"
import "./app.css"
import React, { useEffect, useState } from "react"

function App() {
	const [avatar, setAvatar] = useState("")
	const [name, setName] = useState("")
	const [userName, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [twitterUsername, setTwitterUsername] = useState("")
	const [userInput, setUserInput] = useState("")
	const [error, setError] = useState(null)

	return (
		<div className="bg-gray-100 min-h-screen font-sans antialiased">
			<div className="bg-gray-300 h-20 p-4">Git Hunter</div>
			<div className="grid grid-cols-1 gap-4 m-4">
				<div className="space-x-4">
					<input
						className="bg-white h-12 w-full rounded-lg border-solid border border-gray-200 p-4"
						placeholder="Search GitHub users"
					></input>
				</div>
			</div>
		</div>
	)
}

export default App
