import { BiSearch } from 'react-icons/bi'

export const MainSearch = ({ toggleSearch }) => {
  return (
    <section className="main-search">
      <button
        onClick={() => {
          toggleSearch()
        }}
      >
        <div className="anywhere">
          <h3 className="h3-border">Anywhere</h3>
        </div>
        <div className="any-week">
          <h3 className="h3-border"> Any week</h3>
        </div>
        <div className="add-guests">
          <h3>Add guests</h3>
        </div>
        <div className="btn btn-search-icon">
           <BiSearch className=" search-icon" />
        </div>
      </button>
    </section>
  )
}
