package middleware

/*
 * JOSE Header describe the cyptographic operations applied to the JWT Claims Set.
 * A JWT is represented as a sequence of URL-safe parts separated by period '.' characters.
 * Each part contains a base64url-encoded value.
 * The number of parts in the JWT is dependent upon
 *	the representation of the resulting
 *	JWS using the JWS Compact Serialization
 *	or JWE using the JWE Compact Serialization.
 */

type JsonWebToken struct {
}

func NewToken() {
}
