package handlers

import (
	"fmt"
	"net/http"

	"github.com/uptrace/bun"
)

func GetAccount(db *bun.DB) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "{\"test\": \"test\"}")
	}
}
