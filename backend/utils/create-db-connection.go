package utils

import (
	"database/sql"
	"fmt"

	"github.com/uptrace/bun"
	"github.com/uptrace/bun/dialect/pgdialect"
	"github.com/uptrace/bun/driver/pgdriver"
)

type DBConnInfo struct {
	User     string
	Password string
	DB       string
}

func CreateDBConnection(connInfo DBConnInfo) *bun.DB {
	fmt.Println("Establishing connection to DB")
	connectionString := fmt.Sprintf("user=%s password=%s dbname=%s host=localhost sslmode=disablel", connInfo.User, connInfo.Password, connInfo.DB)
	connector := pgdriver.NewConnector(
		pgdriver.WithDatabase(connectionString),
	)
	sqldb := sql.OpenDB(connector)
	db := bun.NewDB(sqldb, pgdialect.New())
	fmt.Println("Connection established")
	return db
}
