package models

import "gorm.io/gorm"

var DB *gorm.DB

type Schedule struct {
	ID       uint   `gorm:"primaryKey" json:"id"`
	Day      string `json:"day"`
	TimeSlot string `json:"time_slot"`
}
