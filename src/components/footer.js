import React from "react"

export default function Footer() {
    return(
    <footer class="p-4 rounded-lg shadow items-center p-6 text-center justify-content-center">
        <a href="https://twitter.com/macintushar" target="_blank" rel="noopener noreferrer">
            <button type="button">
                <img className="h-10 mr-2" src="./images/twitter.png" alt="Twitter Logo"></img>
            </button>
        </a>

        <a href="https://github.com/macintushar/" target="_blank" rel="noopener noreferrer">
            <button type="button">
                <img className="h-10 mr-2" src="./images/github.png" alt="Twitter Logo"></img>
            </button>
        </a>
        
        <a href="https://www.linkedin.com/in/tushar-selvakumar-2aa6ba1b5/" target="_blank" rel="noopener noreferrer">
            <button type="button">
                <img className="h-10 mr-2" src="./images/linkedin.png" alt="Twitter Logo"></img>
            </button>
        </a>
        <h3 class="text-sm text-center text-gray-400 mt-2">
            Designed and Built by Tushar Selvakumar.    
        </h3>
        <h3 class="text-sm text-center text-gray-400 mt-2">
            Built with <a href="https://reactjs.org/">ReactJS</a> and <a href="https://flowbite.com/#components">Flowbite Components</a>.    
        </h3>
    </footer>
    )
}