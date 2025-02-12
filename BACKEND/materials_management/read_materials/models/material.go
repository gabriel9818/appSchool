package models

type Material struct {
	ID          int    `json:"id"`
	Name        string `json:"name"`
	Subject     string `json:"subject"`
	Description string `json:"description"`
	CreatedAt   string `json:"created_at"`
}
