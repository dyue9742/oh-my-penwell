package middleware

import (
	"encoding/json"
	"net/http"
)

type F func(http.ResponseWriter, *http.Request) error

func MakeFunx(f F) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if e := f(w, r); e != nil {
			_ = WriteJ(w, http.StatusBadRequest, e)
		}
	}
}

func WriteJ(w http.ResponseWriter, status int, v any) error {
	w.WriteHeader(status)
	w.Header().Set("Content-Type", "application/json")
	return json.NewEncoder(w).Encode(v)
}
