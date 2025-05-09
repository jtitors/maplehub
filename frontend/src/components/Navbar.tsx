import Link from 'next/link';

const Navbar = () => {
    return (
        <header className="bg-gray-800 text-white p-4 shadow">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Link href="/" className="text-2xl font-bold">MapleHub</Link>
                    <div>
                        <nav>
                            <ul className="flex space-x-6">
                                <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
                                <li><Link href="/" className="hover:text-gray-400">Characters</Link></li>
                                <li><Link href="/" className="hover:text-gray-400">Rankings</Link></li>
                                <li><Link href="/" className="hover:text-gray-400">Login</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Sign Up</Link>
                </div>
            </div>
        </header>

    );
}

export default Navbar;