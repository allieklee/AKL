export const Header = () => {
  return (
    <div className="bg-[url('/floral.png')] p-6">
      <nav className="relative max-w-7xl mx-auto flex flex-col grid justify-items-center" aria-label="Global">
        <div>
          <img src="./logo.png" className="w-20 rounded outline outline-double outline-gray-600"/>
        </div>
          <div className="space-x-8 pt-6">
            <a href="#" className="rounded px-3 py-2 bg-pink-100 outline outline-1 outline-gray-600 text-base font-medium font-serif text-gray-600 hover:text-gray-500">blog</a>

            <a href="#" className="rounded px-3 py-2 bg-pink-100 outline outline-1 outline-gray-600 text-base font-medium font-serif text-gray-600 hover:text-gray-500">about</a>

            <a href="#" className="rounded px-3 py-2 bg-pink-100 outline outline-1 outline-gray-600 text-base font-medium font-serif text-gray-600 hover:text-gray-500">shop</a>
          </div>
      </nav>
    </div>
  );
};
