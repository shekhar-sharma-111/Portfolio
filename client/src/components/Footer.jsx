import React from 'react';

export default function Footer() {
  return (
    <footer id='footer' className="bg-black py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center text-white mb-6">
          <h2 className="text-2xl font-semibold mb-4  hover:text-indigo-600">HiShekhar</h2>
          <p className="text-gray-300 mb-4">Feel free to reach out via email or connect with me on GitHub and other platforms.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-6">
          <div className="text-center">
            <a href="mailto:shekharsharma7206@gmail.com" className="text-white hover:text-indigo-500">
              <svg className="w-8 h-8 mx-auto mb-2 text-gray-300 hover:text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l9 6 9-6m-9 6V4m-6 4h12m-4 12v-6M4 12h16m0 0l-8 6-8-6" />
              </svg>
              <p>Email</p>
            </a>
          </div>
          <div className="text-center">
            <a href="https://github.com/shekhar-sharma-111?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-500">
              <svg className="w-8 h-8 mx-auto mb-2 text-gray-300 hover:text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 00-3.128 19.442c.495.093.678-.216.678-.48v-1.85c-2.782.605-3.377-1.348-3.377-1.348-.453-1.14-1.107-1.444-1.107-1.444-.906-.619.069-.606.069-.606 1 .071 1.615 1.02 1.615 1.02.889 1.523 2.334 1.084 2.901.828.093-.645.349-1.084.636-1.334-2.221-.252-4.556-1.112-4.556-4.949 0-1.093.39-1.989 1.032-2.693-.103-.252-.448-1.268.097-2.641 0 0 .846-.27 2.77 1.031.805-.223 1.67-.335 2.528-.339.854.004 1.721.116 2.522.339 1.918-1.308 2.764-1.031 2.764-1.031.547 1.373.2 2.389.098 2.641.642.704 1.032 1.6 1.032 2.693 0 3.844-2.338 4.593-4.563 4.849.359.308.679.916.679 1.845v2.736c0 .266.182.573.684.478A10 10 0 0012 2z" />
              </svg>
              <p>GitHub</p>
            </a>
          </div>
          <div className="text-center">
            <a href="https://x.com/Shekhar666k" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-500">
              <svg className="w-8 h-8 mx-auto mb-2 text-gray-300 hover:text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7c-1 0-1.57-.1-2.09-.29-.2.31-.29.67-.29 1.05 0 1.25.63 2.35 1.58 2.97-.58-.02-1.12-.18-1.58-.46v.05c0 1.02.73 1.87 1.7 2.07-.18.05-.37.08-.56.08-.14 0-.28-.01-.42-.04.28.87 1.1 1.51 2.08 1.53-1.05.82-2.37 1.3-3.79 1.3-.25 0-.49-.01-.73-.04 1.39.89 3.05 1.41 4.82 1.41 5.77 0 8.9-4.77 8.9-8.89 0-.14-.01-.28-.02-.41.61-.45 1.14-.97 1.57-1.6-.56.25-1.17.42-1.82.5.66-.39 1.18-.98 1.42-1.7-.62.37-1.31.64-2.03.79-.58-.6-1.41-.98-2.33-.98-1.77 0-3.21 1.44-3.21 3.22 0 .25.03.49.08.72-2.67-.13-5.04-1.41-6.62-3.35.31.54.49 1.17.49 1.83 0 1.26-.64 2.35-1.59 2.97-.59-.03-1.15-.18-1.67-.44.47 1.48 1.84 2.56 3.46 2.59-.65.54-1.44.87-2.32.87-.15 0-.29-.01-.43-.02.82.52 1.79.82 2.81.82 3.38 0 5.9-2.8 5.9-5.9 0-.09-.01-.18-.02-.27.41-.3.76-.65 1.04-1.05z" />
              </svg>
              <p>Twitter</p>
            </a>
          </div>
          <div className="text-center">
            <a href="https://www.linkedin.com/in/shekhar-sharma-3208a0232" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-500">
              <svg className="w-8 h-8 mx-auto mb-2 text-gray-300 hover:text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 00-12 0v8a6 6 0 0012 0V8zM9 10.5h3m-3 3h3m-3 2.5h3M6 6h12a6 6 0 00-12 0z" />
              </svg>
              <p>LinkedIn</p>
            </a>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Shekhar Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
