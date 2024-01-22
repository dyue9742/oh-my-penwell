package controller

import (
	"context"
	"encoding/json"
	"net/http"
	"strconv"

	Db "storaph/internal/database"
	Mi "storaph/internal/middleware"
	Ty "storaph/internal/types"
	Ut "storaph/internal/utils"

	"github.com/gorilla/mux"
)

const (
	GET      = "/api/v1/usr"
	NEW      = "/api/v1/new"
	ADMIN    = "/api/v1/admin"
	DELETE   = "/api/v1/delete"
	UPDATE   = "/api/v1/update"
	REFRESH  = "/api/v1/refresh"
	RELOCATE = "/api/v1/relocate"
)

func EnableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, PATCH, DELETE")
		w.Header().Set("Access-Control-Allow-Credentials", "true")

		next.ServeHTTP(w, r)
	})
}

type Server struct {
	ctx        context.Context
	store      Db.Store
	listenAddr string
}

func NewServer(listenAddr string, store Db.Store, ctx context.Context) *Server {
	return &Server{
		listenAddr: listenAddr,
		store:      store,
		ctx:        ctx,
	}
}

func (s *Server) Run() {
	router := mux.NewRouter()
	router.Use(EnableCORS)

	router.HandleFunc(ADMIN, Mi.MakeFunx(s.handleAdminRequest)).Methods("POST")
	router.HandleFunc(GET, Mi.MakeFunx(s.handleGetUserRequest)).Methods("POST")
	router.HandleFunc(NEW, Mi.MakeFunx(s.handleNewUserRequest)).Methods("POST")
	router.HandleFunc(UPDATE, Mi.MakeFunx(s.handleUpdateUserRequest)).Methods("PATCH")
	router.HandleFunc(DELETE, Mi.MakeFunx(s.handleDeleteUserRequest)).Methods("DELETE")
	router.HandleFunc(REFRESH, Mi.MakeFunx(s.handleRefreshUserRequest)).Methods("POST")
	router.HandleFunc(RELOCATE, Mi.MakeFunx(s.handleRelocateFileRequest)).Methods("PATCH")

	http.ListenAndServe(s.listenAddr, router)
}

func (s *Server) handleGetUserRequest(w http.ResponseWriter, r *http.Request) error {
	Ut.LinePrint("Get User; todo!()")
	return nil
}

func (s *Server) handleNewUserRequest(w http.ResponseWriter, r *http.Request) error {
	Ut.LinePrint("New User; Let's Go!")

	createUser := new(Ty.PushUser)
	if e := json.NewDecoder(r.Body).Decode(createUser); e != nil {
		return e
	}

	user := Ty.NewUser(createUser.Firstname, createUser.Lastname, createUser.Username, createUser.Email)
	if e := s.store.NewUserRequest(s.ctx, user); e != nil {
		return e
	}

	return Mi.WriteJ(w, http.StatusOK, user)
}

func (s *Server) handleAdminRequest(w http.ResponseWriter, r *http.Request) error {
	Ut.LinePrint("Admin Mode; todo!()")
	return nil
}

func (s *Server) handleDeleteUserRequest(w http.ResponseWriter, r *http.Request) error {
	Ut.LinePrint("Delete User; todo!()")

	id := getUserById(r)
	if e := s.store.DeleteUserRequest(s.ctx, id); e != nil {
		return e
	}

	return Mi.WriteJ(w, http.StatusOK, map[string]string{"deleted": strconv.FormatUint(id, 10)})
}

func (s *Server) handleUpdateUserRequest(w http.ResponseWriter, r *http.Request) error {
	Ut.LinePrint("Update User; todo!()")
	return nil
}

func (s *Server) handleRefreshUserRequest(w http.ResponseWriter, r *http.Request) error {
	Ut.LinePrint("Refresh User; todo!()")
	return nil
}

func (s *Server) handleRelocateFileRequest(w http.ResponseWriter, r *http.Request) error {
	Ut.LinePrint("Relocate Your File; todo!()")
	return nil
}

func getUserById(r *http.Request) uint64 {
	idStr := mux.Vars(r)["id"]

	id, e := strconv.ParseUint(idStr, 10, 32)
	if e != nil {
		return 0
	}

	return id
}
