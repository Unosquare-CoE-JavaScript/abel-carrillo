package main

import (
	"fmt"
	"sync"
	"time"
)

var wg sync.WaitGroup

/* func say(s string) {
	for i := 0; i < 3; i++ {
		fmt.Println(s)
		time.Sleep(time.Millisecond * 300)
	}
} */

func handlePanic() {
	if r := recover(); r != nil {
		fmt.Println("PANIC")
	}
}

func print() {
	defer wg.Done()
	defer handlePanic()
	for i := 0; i < 3; i++ {
		fmt.Println(i)
		time.Sleep(time.Millisecond * 300)
	}
}
func main() {
	/* go say("Hello")
	say("There") */
	wg.Add(1)
	go print()
	wg.Wait()
}
