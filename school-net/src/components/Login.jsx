import React, { useState } from "react";

const Login = ({setIsAuth}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)
  const handleAuth = () => {
    if(!username && !password){
        setError("Username && Password Required")
        return
    }
    if(!username){
        setError("Username Required")
        return
    }
    if(!password){
        setError("Password Required")
        return
    }
    localStorage.setItem(
      `game-user`,
      JSON.stringify({ username, password })
    );
    setIsAuth(true)
  };
  return (
    <div className="bg-[#222d5b] m-auto mb-20 text-white rounded-lg p-8 shadow-lg w-full max-w-lg">
      <h1 className="text-3xl font-bold mb-4 text-card-foreground">
        Rock Paper Scissors
      </h1>
      <div className="text-start">
        <div className="mb-4">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full text-black p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-black p-2"
          />
        </div>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <div className="flex justify-between">
          <button
            className="w-[150px] h-[50px] rounded-xl text-white font-bold bg-[#5983ac] hover:bg-[#cdd2d7] hover:text-[#5983ac]   "
            onClick={handleAuth}
          >
            Login / Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
