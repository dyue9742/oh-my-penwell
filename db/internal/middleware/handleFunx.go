package middleware

import (
	"encoding/json"
	"net/http"
)


type F func(http.ResponseWriter, *http.Request) error

type Middleware func(http.HandlerFunc) http.HandlerFunc

func CompileMW(handler http.HandlerFunc, m []Middleware) http.HandlerFunc {
	if len(m) < 1 {
		return handler
	}

	wrapped := handler

	for i := len(m) - 1; i >= 0; i-- {
		wrapped = m[i](wrapped)
	}

	return wrapped
} 

func MakeFunx(f F) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if e := f(w, r); e != nil {
			_ = WriteJ(w, http.StatusBadRequest, e)
		}
	}
}

func WriteDocx(w http.ResponseWriter, status int, v any) error {
	w.WriteHeader(status)
	w.Header().Set("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
	return json.NewEncoder(w).Encode(v)
}

func WriteForm(w http.ResponseWriter, status int, v any) error {
	w.WriteHeader(status)
	w.Header().Set("Content-Type", "multipart/form-data")
	return json.NewEncoder(w).Encode(v)
}

func WriteJ(w http.ResponseWriter, status int, v any) error {
	w.WriteHeader(status)
	w.Header().Set("Content-Type", "application/json")
	return json.NewEncoder(w).Encode(v)
}
