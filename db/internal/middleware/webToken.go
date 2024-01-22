package middleware

import (
	"errors"
	"net/http"
	"time"

	"storaph/internal/types"
	"storaph/internal/utils"

	"github.com/golang-jwt/jwt/v5"
)

const SECRET = "oh-my-secret"

func TokenTaken(handleFunc http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		utils.LinePrint("Token Taken...")

		tokenStr := r.Header.Get("oh-my-jwt")
		t, e := ValidateWebToken(tokenStr)
		if e != nil {
			_ = WriteJ(w, http.StatusBadRequest, errors.New("so bad"))
		}
		if !t.Valid {
			_ = WriteJ(w, http.StatusBadRequest, errors.New("so bad"))
		}

		handleFunc(w, r)
	}
}

func NewWebToken(user *types.PushUser, refresh bool) (string, error) {
	current := time.Now()
	iat := current.Unix()

	var exp int64
	if !refresh {
		exp = current.Add(time.Hour * time.Duration(1)).Unix()
	} else {
		exp = current.AddDate(0, 1, 0).Unix()
	}

	claims := &jwt.MapClaims{
		"iat":  iat,
		"exp":  exp,
		"user": user,
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	utils.LinePrint(token)
	return token.SignedString([]byte(SECRET))
}

func ValidateWebToken(tokenStr string) (*jwt.Token, error) {
	return jwt.Parse(tokenStr, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, errors.New("so bad")
		}
		return []byte(SECRET), nil
	})
}
