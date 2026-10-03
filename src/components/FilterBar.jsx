export default function FilterBar() {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <button className="filter-pill">⧩ Filter</button>
        <button className="filter-pill">▤ Level</button>
        <button className="filter-pill">▦ Category</button>
      </div>
      <button className="filter-pill">☰ Most relevant</button>
    </div>
  )
}
