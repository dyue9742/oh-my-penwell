package types

import (
	"encoding/json"
	"net/http"
	"time"
)

type PushUser struct {
	CreatedAt time.Time `json:"created_at"`
	Firstname string    `json:"first_name"`
	Lastname  string    `json:"last_name"`
	Username  string    `json:"username"`
	Email     string    `json:"email"`
}

func NewUser(firstname, lastname, username, email string) *PushUser {
	return &PushUser{
		CreatedAt: time.Now().UTC(),
		Firstname: firstname,
		Lastname:  lastname,
		Username:  username,
		Email:     email,
	}
}

func (user *PushUser) Read(r *http.Request) error {
	return json.NewDecoder(r.Body).Decode(&user)
}

func (user *PushUser) Write(w http.ResponseWriter) error {
	return json.NewEncoder(w).Encode(user)
}

type PullUser struct {
	CreatedAt time.Time `json:"created_at"`
	Firstname string    `json:"first_name"`
	Lastname  string    `json:"last_name"`
	Username  string    `json:"username"`
	Email     string    `json:"email"`
	Id        uint64    `json:"id"`
}

func GetUser(created_at time.Time, firstname, lastname, username, email string, id uint64) *PullUser {
	return &PullUser{
		CreatedAt: created_at,
		Firstname: firstname,
		Lastname:  lastname,
		Username:  username,
		Email:     email,
		Id:        id,
	}
}

func (user *PullUser) Read(r *http.Request) error {
	return json.NewDecoder(r.Body).Decode(&user)
}

func (user *PullUser) Write(w http.ResponseWriter) error {
	return json.NewEncoder(w).Encode(user)
}

type RelocateFileType struct {
	From string `json:"from"`
	To   string `json:"to"`
}
