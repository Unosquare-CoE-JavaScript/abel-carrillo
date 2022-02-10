package main

import "fmt"

// User is a user type
type User struct {
	ID                         int
	FirstName, LastName, Email string
}

// Group represents a set of users
type Group struct {
	role           string
	users          []User
	newestUser     User
	spaceAvailable bool
}

/* func describeUser(u User) string {
	desc := fmt.Sprintf("Name: %s %s, Email: %s", u.FirstName, u.LastName, u.Email)
	return desc
} */

/* func describeGroup(g Group) string {

	if len(g.users) > 2 {
		g.spaceAvailable = false
	}

	desc := fmt.Sprintf(
		"This user group has %d.\nThe newest user is %s %s. \nAccepting New Users: %t",
		len(g.users), g.newestUser.FirstName, g.newestUser.LastName, g.spaceAvailable)

	return desc
} */

func (u *User) describe() string {
	desc := fmt.Sprintf("Name: %s %s, Email: %s", u.FirstName, u.LastName, u.Email)
	return desc
}

func (g *Group) describe() string {

	if len(g.users) > 2 {
		g.spaceAvailable = false
	}

	desc := fmt.Sprintf(
		"This user group has %d.\nThe newest user is %s %s. \nAccepting New Users: %t",
		len(g.users), g.newestUser.FirstName, g.newestUser.LastName, g.spaceAvailable)

	return desc
}

/* func main() {
	user := User{ID: 1, FirstName: "Marilyn", LastName: "Monroe", Email: "marilyn.monroe@gmail.com"}

	//	desc := describeUser(user)
	desc := user.describe()
	fmt.Println(desc)
} */

func main() {
	u := User{
		ID:        1,
		FirstName: "Marilyn",
		LastName:  "Monroe",
		Email:     "marilyn.monroe@gmail.com",
	}

	u2 := User{
		ID:        2,
		FirstName: "John",
		LastName:  "Bogart",
		Email:     "john.bogart@gmail.com",
	}

	u3 := User{
		ID:        3,
		FirstName: "Vic",
		LastName:  "Bogart",
		Email:     "john.bogart@gmail.com",
	}

	g := Group{
		role:           "admin",
		users:          []User{u, u2, u3},
		newestUser:     u2,
		spaceAvailable: true,
	}

	/* fmt.Println(describeUser(u))
	fmt.Println(describeGroup(g)) */

	fmt.Println("1", g.describe())
	fmt.Println("2", u.describe())
	fmt.Println("3", g)
}
