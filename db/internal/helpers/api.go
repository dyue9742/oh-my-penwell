package utils

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"strconv"

	D "4jFade/internal/database"
	M "4jFade/internal/models"

	"github.com/gorilla/mux"
)

type ApiFunc func(http.ResponseWriter, *http.Request) error

type ApiError struct {
	Error string
}

func WriteJSON(w http.ResponseWriter, status int, v any) error {
	w.WriteHeader(status)
	w.Header().Set("Content-Type", "application/json")
	return json.NewEncoder(w).Encode(v)
}

func makeHTTPHandleFunc(f ApiFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if err := f(w, r); err != nil {
			WriteJSON(w, http.StatusBadRequest, ApiError{Error: err.Error()})
		}
	}
}

type ApiServer struct {
	ctx        context.Context
	store      D.PostgreSql
	listenAddr string
}

func NewApiServer(listenAddr string, store D.PostgreSql, ctx context.Context) *ApiServer {
	return &ApiServer{
		listenAddr: listenAddr,
		store:      store,
		ctx:        ctx,
	}
}

func (s *ApiServer) Run() {
	router := mux.NewRouter()

	router.HandleFunc("/user", makeHTTPHandleFunc(s.handleUser))

	http.ListenAndServe(s.listenAddr, router)
}

func (s *ApiServer) handleUser(w http.ResponseWriter, r *http.Request) error {
	if r.Method == "GET" {
		return s.handleGetUserByID(w, r)
	}
	if r.Method == "POST" {
		return s.handleCreateUser(w, r)
	}
	if r.Method == "DELETE" {
		return s.handleDeleteUser(w, r)
	}

	return errors.New("only GET/POST/DELETE allowed")
}

func getID(r *http.Request) (int, error) {
	idStr := mux.Vars(r)["id"]
	id, err := strconv.Atoi(idStr)
	if err != nil {
		return id, fmt.Errorf("invalid id given: %s", idStr)
	}
	return id, nil
}

func (s *ApiServer) handleGetUserByID(w http.ResponseWriter, r *http.Request) error {
	id, err := getID(r)
	if err != nil {
		return err
	}

	user, err := s.store.GetUserByID(s.ctx, id)
	if err != nil {
		return err
	}

	return WriteJSON(w, http.StatusOK, user)
}

func (s *ApiServer) handleCreateUser(w http.ResponseWriter, r *http.Request) error {
	createUser := new(M.CreateUserReq)
	if err := json.NewDecoder(r.Body).Decode(createUser); err != nil {
		return err
	}
	user := M.NewUser(createUser.Firstname, createUser.Lastname, createUser.Email)
	if err := s.store.CreateUser(s.ctx, user); err != nil {
		return err
	}
	return WriteJSON(w, http.StatusOK, user)
}

func (s *ApiServer) handleDeleteUser(w http.ResponseWriter, r *http.Request) error {
	id, err := getID(r)
	if err != nil {
		return err
	}

	if err := s.store.DeleteUser(s.ctx, id); err != nil {
		return err
	}

	return WriteJSON(w, http.StatusOK, map[string]int{"deleted": id})
}

func (s *ApiServer) handleTransfer(w http.ResponseWriter, r *http.Request) error {
	return nil
}
