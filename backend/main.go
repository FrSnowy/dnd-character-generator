package main

import (
	"net/http"
	"test/handlers"
	"test/utils"
)

func main() {
	db := utils.CreateDBConnection(utils.DBConnInfo{
		DB:       "character-generator",
		User:     "root",
		Password: "root",
	})

	http.HandleFunc("/account", handlers.GetAccount(db))
	http.ListenAndServe(":3001", nil)
}
