export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
            <div className="text xl font-bold">MapleHub</div>
            <ul className="flex space-x-6">
                <li><a href="#" className="hover:text-yellow-300">Home</a></li>
                <li><a href="#" className="hover:text-yellow-300">Characters</a></li>
                <li><a href="#" className="hover:text-yellow-300">Rankings</a></li>
                <li><a href="#" className="hover:text-yellow-300">Login</a></li>
            </ul>
        </nav>
    );
}