package main

import (
	"net/http"
	"test/handlers"
)

func main() {
	http.HandleFunc("/", handlers.GetCharacter)

	http.ListenAndServe(":3000", nil)
}
