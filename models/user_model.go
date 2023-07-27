package models

type User struct {
	name     string `json:"name"`
	dpto     int    `json:"dpto"`
	celular  string `json:"celular"`
	email    string `json:"email"`
	password string `json:"password"`
}
