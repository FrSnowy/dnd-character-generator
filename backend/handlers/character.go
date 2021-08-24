package handlers

import (
	"fmt"
	"net/http"
)

func GetCharacter(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "{\"test\": \"test\"}")
}
