package utils

import (
	"fmt"
	"os/exec"
)

func diff() {
	cmd := exec.Command("cat", "pub.pem")
	if o, e :=	cmd.Output(); e != nil {
		fmt.Printf("%+v\n", o)
	}
}
