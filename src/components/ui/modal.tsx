import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ModalAction {
  label: string;
  onClick?: () => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "success" | "warning" | "subtle";
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
}

export interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  actions?: ModalAction[];
  className?: string;
  contentClassName?: string;
  /** If true, wraps children in a <form> and the primary action becomes type="submit" */
  asForm?: boolean;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function Modal({
  open,
  onOpenChange,
  title,
  description,
  children,
  actions,
  className,
  contentClassName,
  asForm = false,
  onSubmit,
}: ModalProps) {
  const body = (
    <>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        {description && <DialogDescription>{description}</DialogDescription>}
      </DialogHeader>
      <div className={cn("py-2", contentClassName)}>{children}</div>
      {actions && actions.length > 0 && (
        <DialogFooter>
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant ?? (index === actions.length - 1 ? "default" : "outline")}
              onClick={action.onClick}
              loading={action.loading}
              disabled={action.disabled}
              type={action.type ?? (asForm && index === actions.length - 1 ? "submit" : "button")}
            >
              {action.label}
            </Button>
          ))}
        </DialogFooter>
      )}
    </>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn("max-w-lg", className)}>
        {asForm ? (
          <form onSubmit={onSubmit} className="space-y-4">
            {body}
          </form>
        ) : (
          body
        )}
      </DialogContent>
    </Dialog>
  );
}
