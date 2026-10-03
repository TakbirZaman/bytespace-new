import { FilterIcon, LevelIcon, GridIcon, SortIcon } from './icons'
import { levels, allCategories } from '../data/courses'

const SORTS = ['Most relevant', 'Highest rated', 'Most students', 'Price: low to high', 'Price: high to low']

export default function FilterBar({ level, category, sort, onLevel, onCategory, onSort, onReset }) {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <button type="button" className="filter-pill" onClick={onReset}><FilterIcon size={15} /> Reset</button>
        <label className="filter-pill">
          <LevelIcon size={15} />
          <span className="sr-only">Level</span>
          <select value={level} onChange={e => onLevel(e.target.value)} aria-label="Filter by level">
            <option value="">Level: All</option>
            {levels.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </label>
        <label className="filter-pill">
          <GridIcon size={15} />
          <span className="sr-only">Category</span>
          <select value={category} onChange={e => onCategory(e.target.value)} aria-label="Filter by category">
            <option value="">Category: All</option>
            {allCategories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>
      </div>
      <label className="filter-pill">
        <SortIcon size={15} />
        <span className="sr-only">Sort</span>
        <select value={sort} onChange={e => onSort(e.target.value)} aria-label="Sort courses">
          {SORTS.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </label>
    </div>
  )
}
