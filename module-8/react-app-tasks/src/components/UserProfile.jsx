import { useEffect, useState } from "react";

const UserProfile = () => {
  const [userId, setUserId] = useState(1);
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
        );
        const data = await response.json();
        // Delay is added to demonstrate the loading message
        setTimeout(() => {
          setProfile(data);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [userId]);
  const { street, suite, city, zipcode } = profile.address || {};
  return (
    <div className="container">
      <h2 className="mb-3">User Profile</h2>
      <div className="row">
        <div className="col-auto">
          <label htmlFor="userId" className="form-label">
            User ID
          </label>
        </div>
        <div className="col-2 mb-4">
          <select
            className="form-select"
            onChange={(event) => setUserId(event.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      {!isLoading && profile.name && (
        <div className="card col-4">
          <div className="card-img-top px-3 bg-light">
            <i className="bi bi-person-circle user-icon"></i>
          </div>
          <div className="card-body">
            <div className="card-title">{profile.name}</div>
            <div className="text-secondary text-lowercase text-size-2 mb-2">
              {profile.email}
            </div>
            {suite && street && (
              <div className="text-secondary text-size-2">
                {suite}, {street}
              </div>
            )}
            {city && zipcode && (
              <div className="text-secondary text-size-2">
                {city}, {zipcode}
              </div>
            )}
          </div>
        </div>
      )}
      {isLoading && (
        <div>
          <div className="text-secondary text-size-2">
            {" "}
            Please wait while we fetch the details..
          </div>
          <div className="card col-4" aria-hidden="true">
            <div className="card-img-top px-3 bg-light">
              <i className="bi bi-person-circle user-icon"></i>
            </div>
            <div className="card-body">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
