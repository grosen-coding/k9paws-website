import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
// import { FaQuestionCircle, FaTicketAlt} from 'react-icons/fa'

function MainReportsPage() {
  const [userSearchInput, setUserSearchInput] = useState("");
  const [initialBreedInfo, setInitialBreedInfo] = useState([]);
  const [breedSearchResult, setBreedSearchResult] = useState();
  const [displayBreedInfo, setDisplayBreedInfo] = useState();

  useEffect(()=>{
    axios({
        method: `GET`,
        dataResponse: "json",
        url: `https://api.thedogapi.com/v1/breeds`,
        params: {
          header: { "x-api-key": "87b32cf2-45c7-420a-b1ff-ff8cac38bc2b" },
          // query: userSearchInput,
        },
      }).then((response) => {
        setInitialBreedInfo(response.data);
        
        console.log(response.data);
      });

  },[])

  const handleSearch = (event, userSearchInput) => {
    event.preventDefault();

    console.log(initialBreedInfo[0])

    const filteredBreedInfo = initialBreedInfo.filter((breed)=>{
        console.log(breed);
        return (breed.bred_for?.toLowerCase().includes(userSearchInput) || breed.breed_group?.toLowerCase().includes(userSearchInput) || breed.origin?.toLowerCase().includes(userSearchInput) || breed.name?.toLowerCase().includes(userSearchInput) || breed.temperament?.toLowerCase().includes(userSearchInput) || breed.description?.toLowerCase().includes(userSearchInput)) 
      })

      setBreedSearchResult(filteredBreedInfo)


    // axios({
    //   method: `GET`,
    //   dataResponse: "json",
    //   url: `https://api.thedogapi.com/v1/breeds`,
    //   params: {
    //     header: { "x-api-key": "8c75642c-ea48-42d1-90b0-273eed3ab258" },
    //     // query: userSearchInput,
    //   },
    // }).then((response) => {
    //   setBreedSearchResult(response);
    //   console.log(response);
    // });
    // setDisplayBreedInfo(true);
  };

  return (
    <>
      <section className="heading">
        <h1>Breed search</h1>
        <p>Please choose from an option below</p>
        <div className="breedSearchForm">
          <form
            onSubmit={(event) => {
              handleSearch(event, userSearchInput);
            }}
            action="search"
          >
            Search your favorite Breeds!
            <label htmlFor="searchBar"></label>
            <input
              onChange={(event) => {
                setUserSearchInput(event.target.value);
              }}
              value={userSearchInput}
              type="text"
              name="searchBar"
              id="searchBar"
              placeholder="Search"
              required
            />
            <button type="submit">Search</button>
          </form>
        </div>
        {breedSearchResult?.map((breedInfo) => {
                return (
                //   <Link to={`/blog/blog_list/${post.name.urlLink}`}>
                    <li key={breedInfo.id}>
                      <div className="blogPreviewCard">
                        <div>
                          <h3>{breedInfo.name}</h3>
                        </div>
                        <div>
                          <strong>bred for:</strong> {breedInfo.bred_for}
                        </div>
                        <div>
                          <strong>breed group:</strong> {breedInfo.breed_group}
                        </div>
                        <div>
                          <strong>life span:</strong> {breedInfo.life_span}
                        </div>
                        <div>
                          <strong>Image:</strong> <img src={breedInfo.image.url} alt="dog images" />
                        </div>
                      </div>
                    </li>
                //   </Link>
                );
              })}
      </section>
    </>
  );
}

export default MainReportsPage;
