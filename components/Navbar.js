import { MoonIcon } from '@heroicons/react/outline'

const Navbar = (props) => {
    return (
        <nav className="shadow p-4 bg-white dark:bg-gray-700 dark:shadow-md">
            <div className="max-w-6xl m-auto flex items-center justify-between">
                <h3 className="text-xl font-bold">Where in the world?</h3>
                <button className='flex items-center' onClick={() => props.themeHandler()}>
                    <MoonIcon className='h-5 mr-2' />
                    <span className="text-lg">Dark Mode</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar