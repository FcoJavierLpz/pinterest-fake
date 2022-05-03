const SearchBox = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      name="query"
      className="sm:inline-block flex-1 py-1.5 px-4 mx-4 text-gray-700 bg-gray-100 rounded-full border border-gray-100 transition focus:outline-none focus:bg-white focus:border-gray-700"
      placeholder="Search"
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
    />
  )
}

export default SearchBox
