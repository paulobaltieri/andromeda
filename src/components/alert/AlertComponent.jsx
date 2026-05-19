import React from "react"
import { toast } from "react-toastify";

export function showInfo(message) {
    toast.info(message)
}

export function showError(message) {
    toast.error(message)
}

export function showSucess(message) {
    toast.success(message)
}