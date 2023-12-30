package models

import (
	"encoding/json"
	"net/http"
	"time"
)

type CreateUserReq struct {
	Firstname string `json:"f_name"`
	Lastname  string `json:"l_name"`
	Email     string `json:"email"`
}

type User struct {
	CreatedAt time.Time `json:"created_at"`
	Firstname string    `json:"f_name"`
	Lastname  string    `json:"l_name"`
	Email     string    `json:"email"`
}

func NewUser(firstname, lastname, email string) *User {
	return &User{
		CreatedAt: time.Now().UTC(),
		Firstname: firstname,
		Lastname:  lastname,
		Email:     email,
	}
}

func (user *User) R(r *http.Request) error {
	err := json.NewDecoder(r.Body).Decode(&user)
	return err
}

func (user *User) W(w http.ResponseWriter) error {
	err := json.NewEncoder(w).Encode(user)
	return err
}
