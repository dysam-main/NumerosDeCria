"use client"

// This is a placeholder implementation of the useToast hook.
// Replace this with your actual implementation.

import React from "react";
import { useState } from "react";

export function useToast() {
  const [toasts, setToasts] = useState<any[]>([]);

  const addToast = (toast) => {
    setToasts((prev) => [...prev, toast]);
  };

  return { toasts, addToast };
}
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "../../components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
