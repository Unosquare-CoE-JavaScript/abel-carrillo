package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

// Planet is a planet type
type Planet struct {
	Name       string `json:"name"`
	Population string `json:"population"`
	Terrain    string `json:"terrain"`
}

// Person is a person type
type Person struct {
	Name         string `json:"name"`
	HomeworldURL string `json:"homeworld"`
	Homeworld    Planet
}

// AllPeople is a collection of Person types
type AllPeople struct {
	People []Person `json:"results"`
}

// Create a route for /people
// Write a function that uses fmt.Fprint that indicates the request was successful

// BaseURL is the base endpoint for the star wars API
const BaseURL = "https://swapi.dev/api/"

func (p *Person) getHomeworld() {
	res, err := http.Get(p.HomeworldURL)
	if err != nil {
		log.Print("Error fetching homeworld", err)
	}

	var bytes []byte

	if bytes, err = ioutil.ReadAll(res.Body); err != nil {
		log.Print("Error reading response body", err)
	}

	json.Unmarshal(bytes, &p.Homeworld)
}
func getPeople(w http.ResponseWriter, r *http.Request) {
	// fmt.Fprint(w, "Getting people")

	res, err := http.Get(BaseURL + "people")
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		log.Print("Failed to request star wars people")
	}

	fmt.Println(res)

	bytes, err := ioutil.ReadAll(res.Body)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		log.Print("Failed to parse request body")
	}

	var people AllPeople

	fmt.Println(bytes)
	if err := json.Unmarshal(bytes, &people); err != nil {
		fmt.Println("Error parsing JSON", err)
	}

	fmt.Println(people)

	for _, person := range people.People {
		person.getHomeworld()
		fmt.Println(person)
	}

}

func main() {
	fmt.Println(BaseURL)

	http.HandleFunc("/people", getPeople)
	fmt.Println("Serving on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
