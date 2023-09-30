import "./user-overview.scss";

const UserOverviewApp = ({ filter, total }: any) => {
  return (
    <div className="user-overview-app">
      <div className="row search-body">
        <div className="col-lg-12">
          <div className="search-result">
            <div className="result-header">
              <div className="row">
                <div className="col-lg-6 flex-center">
                  <div className="records">
                    Showing:
                    <b>
                      {" " + (filter?.Skip + 1)} - {filter?.PageSize + " "}
                    </b>
                    of <b> {total}</b> result
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="result-actions">
                    <div className="result-sorting">
                      <span>Sort By:</span>
                      <select
                        className="form-control border-0"
                        id="exampleOption"
                      >
                        <option value="1">Relevance</option>
                        <option value="2">Names (A-Z)</option>
                        <option value="3">Names (Z-A)</option>
                      </select>
                    </div>
                    <div className="result-views">
                      <button
                        type="button"
                        className="btn btn-soft-base btn-icon"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="feather feather-list"
                        >
                          <line x1="8" y1="6" x2="21" y2="6"></line>
                          <line x1="8" y1="12" x2="21" y2="12"></line>
                          <line x1="8" y1="18" x2="21" y2="18"></line>
                          <line x1="3" y1="6" x2="3" y2="6"></line>
                          <line x1="3" y1="12" x2="3" y2="12"></line>
                          <line x1="3" y1="18" x2="3" y2="18"></line>
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="btn btn-soft-base btn-icon"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="feather feather-grid"
                        >
                          <rect x="3" y="3" width="7" height="7"></rect>
                          <rect x="14" y="3" width="7" height="7"></rect>
                          <rect x="14" y="14" width="7" height="7"></rect>
                          <rect x="3" y="14" width="7" height="7"></rect>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOverviewApp;
