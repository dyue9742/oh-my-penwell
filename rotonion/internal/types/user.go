package types

import (
	"encoding/json"
	"net/http"
	"time"
)

type PushUser struct {
	CreatedAt time.Time `json:"created_at"`
	Fullname  string    `json:"fullname"`
	Username  string    `json:"username"`
	Password  string    `json:"password"`
	Email     string    `json:"email"`
}

func NewUser(fullname, username, password, email string) *PushUser {
	return &PushUser{
		CreatedAt: time.Now().UTC(),
		Fullname:  fullname,
		Username:  username,
		Password:  password,
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
	LastAccess time.Time `json:"last_access"`
	Fullname   string    `json:"fullname"`
	Username   string    `json:"username"`
	Password   string    `json:"password"`
	Email      string    `json:"email"`
	Id         uint64    `json:"id"`
}

func GetUser(last_access time.Time, fullname, username, password, email string, id uint64) *PullUser {
	return &PullUser{
		LastAccess: last_access,
		Fullname:   fullname,
		Username:   username,
		Password:   password,
		Email:      email,
		Id:         id,
	}
}

func (user *PullUser) Read(r *http.Request) error {
	return json.NewDecoder(r.Body).Decode(&user)
}

func (user *PullUser) Write(w http.ResponseWriter) error {
	return json.NewEncoder(w).Encode(user)
}

type RelocateFileType struct {
	From string `json:"From"`
	To   string `json:"To"`
}
